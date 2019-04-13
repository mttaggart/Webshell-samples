 
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=PjLEeOGY5nppDwlkg2rlZxGxdQG7Aqet"></script>
 

 
<?php

//http://api.map.baidu.com/lbsapi/createmap/index.html  创建sample

//".LANG." must be cn.
$sql = "SELECT arr_map from ".TABLE_LANG."  where lang='".LANG."'  order by id limit 1";
//echo $sql;
$row22 = getrow($sql);
 //pre($row22);
$arr_can=$row22['arr_map'];

$map_w='100%';
$map_h="350px";

$bscntarr = explode('==#==',$arr_can); 
     if(count($bscntarr)>1){
          foreach ($bscntarr as   $bsvalue) {
             if(strpos($bsvalue, ':##')){
               $bsvaluearr = explode(':##',$bsvalue);
               $bsccc = $bsvaluearr[0];
               $$bsccc=$bsvaluearr[1];
             }
          }
      }



?>

 
   
    <!--百度地图容器-->
     <div style="width:<?php echo $map_w?>;height:<?php echo $map_h?>;border:#ccc solid 1px;" id="baidumap"></div>
   



    <script type="text/javascript">
    //创建和初始化地图函数：
    function initMap(){
      createMap();//创建地图
      setMapEvent();//设置地图事件
      addMapControl();//向地图添加控件
      addMapOverlay();//向地图添加覆盖物
    }
    function createMap(){ 
      map = new BMap.Map("baidumap"); 
       map.centerAndZoom(new BMap.Point(<?php echo $map_x_wei?>,<?php echo $map_y_jing?>),16);
    }
    function setMapEvent(){
      //map.enableScrollWheelZoom(); //取消鼠标滚动。
      map.enableKeyboard();
      map.enableDragging();
      map.enableDoubleClickZoom()

    }
    function addClickHandler(target,window){
      target.addEventListener("click",function(){
        target.openInfoWindow(window);
      });
    }
    function addMapOverlay(){
         var markers = [
        {content:"<?php echo $map_desp?>",title:"<?php echo $map_title?>",imageOffset: {width:0,height:3},position:{lat:<?php echo $map_x_wei?>,lng:<?php echo $map_y_jing?>}}
      ];
      for(var index = 0; index < markers.length; index++ ){
        var point = new BMap.Point(markers[index].position.lat,markers[index].position.lng);
        var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
          imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
        })});
        var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
        var opts = {
          width: 260,
          title: markers[index].title,
          enableMessage: true
        };
        var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
        marker.setLabel(label);
        addClickHandler(marker,infoWindow);
        map.addOverlay(marker);
      };
    }
    //向地图添加控件
    function addMapControl(){
      var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
      scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
      map.addControl(scaleControl);
      var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
      map.addControl(navControl);
      var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
      map.addControl(overviewControl);
    }
    var map;
      initMap();
  </script>

 