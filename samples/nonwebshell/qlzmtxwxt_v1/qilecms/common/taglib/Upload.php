<?php
namespace app\common\taglib;
use think\template\TagLib;
class Upload extends Taglib
{
        // 标签定义
    protected $tags = [
      'images'     => ['attr' => 'name,value,type,id', 'close' => 0],
      'videos'     => ['attr' => 'time,format', 'close' => 1], //闭合标签，默认为不闭合
    ];
    /**
     * input标签解析
     * 格式：
     * {php}echo $name{/php}
     * @access public
     * @param array $tag 标签属性
     * @param string $content 标签内容
     * @return string
     */
    public function tagImages($tag)
    {
      global $settings;
      $upload_url = !empty($tag['url'])?$tag['url']:'';
      $url ="";
      $link ='<?php '.QL_ROOT.'include "'.$url.'" ?>';

        return $link;

    }

    /*
     * 这是一个闭合标签的简单演示
    */
    public function tagVideos($tag)
    {

      // $html = @file_get_contents(QL_ROOT."qilecms/admin/view/tag/uploads_img.html");

       $name = !empty($tag['name']) ? $tag['name']:'';
       $parse = '<?php  ';
       $html = '<input type="button" name="data[water_logo]" id="water_logo" value="'.$name.'" >';
       $parse .= "echo '".$html."'";

       $parse .= ' ?>';
       return $parse;

    }


}