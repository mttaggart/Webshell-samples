<?php
/*
	欢迎使用DM企业建站系统，本系统由www.demososo.com开发。
*/
if(!defined('IN_DEMOSOSO')) {
	exit('this is wrong page,please back to homepage');
}
 
?>
<div id="header_menu_right" class="headerwrap stickytop">
<?php
if($bsheadertop<>'') block($bsheadertop); //top text...
?>
 <header id="header" class="header">
 <div class="container"> 
<?php
//if($bsheader<>'') block($bsheader);
 //menu is in logo below
 //$logourl = LANG=='cn'?'index.html':LANG.'/index.html';
 if($logoimg<>'') {
 		 echo '<div class="logo"><a href="'.BASEURLPATH.'">';
		 echo '<img src="'.UPLOADPATHIMAGE.$logoimg.'" alt="" />'; 
		 echo '</a></div>';}
		 
if($bsheadertext<>'') {echo '<div class="headertel">';block($bsheadertext); echo '</div>';}
  
 if($bsheadersearch<>'') { 
 	echo '<div class="headersearchrg"> </div>';
 	block($bsheadersearch);  	 
 } //end search
?>


 <?php 
block('prog_lang');
//block('prog_shoppingbag');
?>
<button   class="dmmenumobi"> </button>
 <div class="menu menuright needsuperfish">
 <?php 
		 $file =  TPLCURROOT.'selfblock/menu/menu.php'; 
		 if(!is_file($file))  $file =  BLOCKROOT.'menu/menu.php';  
		 if(checkfile($file)) require($file);    	
		 ?>
</div><!-- end menu -->
</div> 
</header><!--end header-->
</div><!-- end header all wrap -->