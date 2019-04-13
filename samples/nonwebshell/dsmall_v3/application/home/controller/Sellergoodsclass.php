<?php

namespace app\home\controller;


class Sellergoodsclass extends BaseSeller
{
    public function _initialize()
    {
        parent::_initialize(); // TODO: Change the autogenerated stub
    }

    /**
     * 卖家商品分类
     *
     * @param
     * @return
     */
    public function index()
    {
        $storegoodsclass_model = model('storegoodsclass');
            $goods_class = $storegoodsclass_model->getTreeClassList(array('store_id' => session('store_id')), 2);
            $str = '';
            if (is_array($goods_class) and count($goods_class) > 0) {
                foreach ($goods_class as $key => $val) {
                    $row[$val['storegc_id']] = $key + 1;
                    if ($val['storegc_parent_id'] != '0'){
                        $str .= intval($row[$val['storegc_parent_id']]) . ",";
                    }else{
                        $str .= "0,";
                    }

                }
                $str = substr($str, 0, -1);
            }
            else {
                $str = '0';
            }
            $this->assign('map', $str);
            $this->assign('class_num', count($goods_class) - 1);
            $this->assign('goods_class', $goods_class);

            $this->setSellerCurMenu('sellergoodsclass');
            $this->setSellerCurItem('index');
            return $this->fetch($this->template_dir . 'index');
    }

    /*分类添加*/
    public function goods_class_add(){
        $storegoodsclass_model = model('storegoodsclass');
        $goods_class = $storegoodsclass_model->getStoregoodsclassList(array(
                                                                'store_id' => session('store_id'),
                                                                'storegc_parent_id' => 0
                                                            ));
        $this->assign('goods_class', $goods_class);
        $this->assign('class_info', array('storegc_parent_id'=>input('top_class_id')));
        $this->assign('type','add');
        return $this->fetch($this->template_dir . 'class_add');
    }
    /*分类编辑*/
    public function goods_class_edit(){
        $class_id=input('param.top_class_id');
        $storegoodsclass_model = model('storegoodsclass');
        $class_info = $storegoodsclass_model->getStoregoodsclassInfo(array('storegc_id' => intval($class_id)));
        $goods_class = $storegoodsclass_model->getStoregoodsclassList(array(
                                                                'store_id' => session('store_id'),
                                                                'storegc_parent_id' => 0
                                                            ));
        $this->assign('goods_class', $goods_class);
        $this->assign('class_info', $class_info);
        $this->assign('type','edit');
        return $this->fetch($this->template_dir . 'class_add');
    }

    /**
     * 卖家商品分类保存
     *
     * @param
     * @return
     */
    public function goods_class_save()
    {
        $storegoodsclass_model = model('storegoodsclass');
        if (input('post.type') =='edit') {

            $storegc_id = intval(input('post.storegc_id'));
            if ($storegc_id <= 0) {
                ds_json_encode(10001,lang('wrong_argument'));
            }
            $class_array = array();
            if (input('post.storegc_name') != '') {
                $class_array['storegc_name'] = input('post.storegc_name');
            }
            if (input('post.storegc_parent_id') != '') {
                $class_array['storegc_parent_id'] = input('post.storegc_parent_id');
            }
            if (input('post.storegc_state') != '') {
                $class_array['storegc_state'] = input('post.storegc_state');
            }
            if (input('post.storegc_sort') != '') {
                $class_array['storegc_sort'] = input('post.storegc_sort');
            }
            $where = array();
            $where['store_id'] = session('store_id');
            $where['storegc_id'] = intval(input('post.storegc_id'));
            $state = $storegoodsclass_model->editStoregoodsclass($class_array, $where);
            if ($state) {
                ds_json_encode(10000,lang('ds_common_save_succ'));
            }
            else {
                ds_json_encode(10001,lang('ds_common_save_fail'));
            }
        }
        else {
            $class_array = array();
            $class_array['storegc_name'] = input('post.storegc_name');
            $class_array['storegc_parent_id'] = input('post.storegc_parent_id',0);
            $class_array['storegc_state'] = input('post.storegc_state');
            $class_array['store_id'] = session('store_id');
            $class_array['storegc_sort'] = input('post.storegc_sort');
            $state = $storegoodsclass_model->addStoregoodsclass($class_array);
            if ($state) {
                ds_json_encode(10000,lang('ds_common_save_succ'));
            }
            else {
                ds_json_encode(10001,lang('ds_common_save_fail'));
            }
        }
    }

    /**
     * 卖家商品分类删除
     *
     * @param
     * @return
     */
    public function drop_goods_class()
    {
        $storegoodsclass_model = model('storegoodsclass');
        $stcid_array = explode(',', input('param.class_id'));

        foreach ($stcid_array as $key => $val) {
            if (!is_numeric($val))
                unset($stcid_array[$key]);
        }

        $where = array();
        $where['storegc_id'] = array('in', $stcid_array);
        $where['store_id'] = session('store_id');

        $drop_state = $storegoodsclass_model->delStoregoodsclass($where);
        if ($drop_state) {
            ds_json_encode(10000,lang('ds_common_del_succ'));
        }
        else {
            ds_json_encode(10001,lang('ds_common_del_fail'));
        }
    }

    /**
     * 用户中心右边，小导航
     *
     * @param string $menu_type 导航类型
     * @param string $name 当前导航的name
     * @return
     */
    protected function getSellerItemList()
    {
        $menu_array = array(
             array(
                'name' => 'index', 'text' => '店铺分类', 'url' => url('Sellergoodsclass/index')
            )
        );
        return $menu_array;
    }
}