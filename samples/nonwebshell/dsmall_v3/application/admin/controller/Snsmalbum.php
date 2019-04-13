<?php

namespace app\admin\controller;


use think\Lang;

class Snsmalbum extends AdminControl
{
    public function _initialize()
    {
        parent::_initialize(); // TODO: Change the autogenerated stub
        Lang::load(APP_PATH . 'admin/lang/'.config('default_lang').'/snsmalbum.lang.php');
    }

    /**
     * 相册设置
     */
    public function setting() {
        $config_model = model('config');
        if (request()->isPost()) {
            //构造更新数据数组
            $update_array = array();
            $update_array['malbum_max_sum'] = intval(input('post.malbum_max_sum'));
            $result = $config_model->editConfig($update_array);
            if ($result === true) {
                dsLayerOpenSuccess(lang('ds_common_save_succ'));
            } else {
                $this->error(lang('ds_common_save_fail'));
            }
        } else {
            $list_setting = rkcache('config', true);
            $this->assign('list_setting', $list_setting);
            return $this->fetch();
        }
    }

    /**
     * 相册列表
     */
    public function index()
    {
        $snsmalbum_model = model('snsalbum');
        // 相册总数量
        $where = array();
        if (input('param.class_name') != '') {
            $where['ac_name'] = array('like', '%' . trim(input('param.class_name')) . '%');
        }
        if (input('param.user_name') != '') {
            $where['member_name'] = array('like', '%' . trim(input('param.user_name')) . '%');
        }
        $ac_lists = $snsmalbum_model->getSnsalbumclassList($where,10,'a.*,m.member_name');
        if (!empty($ac_lists)) {
            $ac_list= $ac_lists;
            $acid_array = array();
            foreach ($ac_list as $val) {
                $acid_array[] = $val['ac_id'];
            }
            // 相册中商品数量
            $ap_count = $snsmalbum_model->getSnsalbumpicCountList(array('ac_id' => array('in', $acid_array)),'count(ap_id) as count,ac_id','ac_id');
            $ap_count = array_under_reset($ap_count, 'ac_id', 1);
            foreach ($ac_list as $key => $val) {
                if (isset($ap_count[$val['ac_id']])) {
                    $ac_list[$key]['count'] = $ap_count[$val['ac_id']]['count'];
                }
                else {
                    $ac_list[$key]['count'] = 0;
                }
            }
            $this->assign('ac_list', $ac_list);
        }
        $this->assign('showpage', $snsmalbum_model->page_info->render());
        $this->setAdminCurItem('index');
        return $this->fetch('index');
    }

    /**
     * 图片列表
     */
    public function pic_list() {
        $snsmalbum_model = model('snsalbum');
        $id = intval(input('param.id'));
        if ($id <= 0) {
            $this->error(lang('param_error'));
        }
        $where = array();
        $where['ac_id'] = $id;
        if (input('param.pic_name') != '') {
            $where['ap_name|ap_cover'] = array('like', '%' . input('param.pic_name') . '%');
        }
        $pic_list = $snsmalbum_model->getSnsalbumpicList($where, 10);
        $this->assign('id', $id);
        $this->assign('showpage', $snsmalbum_model->page_info->render());
        $this->assign('pic_list', $pic_list);
        $this->setAdminCurItem('pic_list');
        return $this->fetch();
    }

    /**
     * 删除图片
     */
    public function del_pic()
    {
        $id = input('param.ap_id');
        if ($id <= 0) {
            ds_json_encode(10001, lang('param_error'));
        }        
        $id_array = ds_delete_param($id);
        if($id_array === FALSE){
            ds_json_encode(10001, lang('param_error'));
        }
        $condition = array('ap_id' => array('in', $id_array));
        $snsmalbum_model = model('snsalbum');
        $ap_list = $snsmalbum_model->getSnsalbumpicList($condition);
            if (empty($ap_list)) {
                ds_json_encode(10001, lang('snsalbum_choose_need_del_img'));
            }
            foreach ($ap_list as $val) {
                @unlink(BASE_UPLOAD_PATH . DS . ATTACH_MALBUM . DS . $val['member_id'] . DS . $val['ap_cover']);
                @unlink(BASE_UPLOAD_PATH . DS . ATTACH_MALBUM . DS . $val['member_id'] . DS . str_ireplace('.', '_240.', $val['ap_cover']));
                @unlink(BASE_UPLOAD_PATH . DS . ATTACH_MALBUM . DS . $val['member_id'] . DS . str_ireplace('.', '_1280.', $val['ap_cover']));
            }
            $result = $snsmalbum_model->delSnsalbumpic($condition);
            if($result){
                $this->log(lang('ds_del') . lang('ds_member_album_manage') . '[ID:' . $id . ']', 1);
                ds_json_encode(10000, lang('ds_common_del_succ'));
            } else {
                ds_json_encode(10001, lang('ds_common_del_fail'));
            }
            
    }

    protected function getAdminItemList($curitem = '')
    {
        $menu_array = array(
            array(
                'name' => 'index', 
                'text' => lang('snsalbum_class_list'),
                'url' => url('Snsmalbum/index')
            ), array(
                'name' => 'setting', 
                'text' => lang('snsalbum_album_setting'),
                'url' => "javascript:dsLayerOpen('".url('Snsmalbum/setting')."','".lang('snsalbum_album_setting')."')"
            ),
        );
        if(request()->action()=='pic_list'){
            $menu_array[]=array(
                'name' => 'pic_list', 
                'text' => lang('snsalbum_pic_list'),
                'url' => url('Snsmalbum/pic_list',['id'=>input('param.id')])
            );
        }
        return $menu_array;
    }
}