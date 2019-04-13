<?php
namespace app\common\model;
use think\Model;
class ArticleCategory extends Base
{
   protected $autoCheckFields = true;


   public function isExistsCategoryName($cname){
    $where['cname'] =$name;
    return $list = $this->where($where)->find();

   }
   public  function getCategory($cid){
             $where['cid'] = $cid;
      return $list = $this->where($where)->find();

   }
   public  function getChildCategory($pid){
    //获得子分类
             $where['pid'] = $pid;
      return $list = $this->where($where)->select();

   }
   public function add($data){

        
   	    if(empty($data) || !is_array($data) ){ 
   	    	return false;
   	    }
        if($this->save($data)){
            return true;
        }else{
	    	    return false;
	    }
 

  }
   public function categoryUpdate($post){
        if(empty($post) || !is_array($post) ){ 
          return false;
        }
         $where['cid'] = $post['id'];
         $update =[];
         if(!is_null($post['status'])){
           $update['status'] = $post['status'];
         }
         
     
         if(!is_null($post['sort'])){
           $update['sort'] = $post['sort'];
         }
        if($this->where($where)->update($update)){
             return true;
        }else{
             return false;
      }
 
  }
   public function edit($post){
        if(empty($post) || !is_array($post) ){ 
          return false;
        }
        if($post['status']){
           $post['status'] = 1;
        }
        $where['cid'] =$post['cid'];
       $this->where($where)->update($post);
            return true;
     
 
  }
   public function del($cid){
      if(is_array($cid)){
           $cid_data = implode(',',$cid);

           foreach($cid as $v){
             //检查是否有下级分类
              $child = $this->getChildCategory($v);
              $children = obj_to_array($child);

              if(!empty($children)){
                return '该分类含有子类，不能直接删除，请先删除子分类';
              }  
           }
      }else{
                 //检查是否有下级分类
          $child = $this->getChildCategory($cid);
          $children = obj_to_array($child);
          if(!empty($children)){
            return '该分类含有子类，不能直接删除，请先删除子分类';
          }  
          $cid_data =$cid;  
      }



      $res = $this->where("cid",'in',$cid_data)->delete();
        if($res){
           return true;
        }else{
          return false;
        }

   }

}
