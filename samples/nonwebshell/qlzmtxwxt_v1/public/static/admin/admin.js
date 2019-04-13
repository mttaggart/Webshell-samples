//打开指定窗口信息，常用于编辑，添加等
function edit(url,title="编辑信息",width='880px',height='90%'){
  layer.open({
          type: 2,
          title: title,
          shadeClose:true,
          shade: 0.4,
          maxmin: true, //允许全屏最小化 
          resize:false,
          area: [width,height],
          content: url  //iframe的url
        }); 
}
function add(url,title='添加信息',width='880px',height='90%'){
  layer.open({
          type: 2,
          title: title,
          shadeClose:true,
          shade: 0.4,
          area: [width,height],
          maxmin: true, //允许全屏最小化      
          resize:false,
          content: url  //iframe的url
        }); 
}
//单个删除
function del(url){
  layer.msg('您确定要删除吗？', {
    time: 0 //不自动关闭
    ,btn: ['确定', '取消']
    ,yes: function(index){
      layer.close(index);
            $.get(url,function(json){
                    if(json.code == 0){
                          layer.msg(json.msg);
                            setTimeout(function(){  //使用  setTimeout（）方法设定定时2000毫秒
                            window.location.reload();//页面刷新
                          },1000);
                   }else if(json.code == -1){
                     layer.msg(json.msg, {time: 5000, icon:5});
                   }
               });
    }
  });
}
//新的空白页面打开
function blank(url){
  window.location.href= url;
}
//返回之前页面
function back(){
  javascript:history.go(-1);
}


// function ajaxForm(){
//   $.ajax({url: "test.html",data: $("form").serialize(), success: function(){
//                         layer.msg(json.msg);
//       }});
// }
function audit(obj){
  var url = obj.getAttribute('data-url');
  $.get(url,function(json){
    if(json.code == 0){
      layer.msg(json.msg);
      location.reload();
    }
  });
}

// function post(url,param){
//  console.log(param);
//       $.post(url,param,function(json){
//         if(json.code == 0){
//           layer.msg(url);
//         }           
//       });  
// }
// //多选删除
// function selectDel(element,childrenElement,$url,$jsonParam){

// //全选删除
//       var id = [];
//       $("#del").click(function(){
//             $(".id").each(function() {
//             if(this.checked == true){
//                  id.push($(this).val()); 
//             }
//             });              
//        if(id.length == 0){
//           parent.layer.alert('你没有选中任何分类');
//        }else{
//         layer.msg('您确定要批量删除吗？', {
//           time: 0 //不自动关闭
//           ,btn: ['确定', '取消']
//           ,yes: function(index){
//             layer.close(index);
//                  $.post("{:url('financeRecharge/del')}"
//             ,{"id":id}        
//            ,function(json){
//             if(json.code == 0){
//                 layer.msg(json.msg);
//                 setTimeout(function(){  //使用  setTimeout（）方法设定定时2000毫秒
//                 window.location.reload();//页面刷新
//                 },1000);
//                  }
//                }
//              );
//           }
//         });
       
//        }
//   });

// }
	  //ajax删除
	// var index = parent.layer.confirm('您确定要删除吗？', {
	//   btn: ['确定','取消'] //按钮
	// }, function(){

	// 	layer.close(index);
	//         $.get(url,function(json){
	//                 if(json.code == 0){
	//                 layer.msg(json.msg);
	//                   setTimeout(function(){  //使用  setTimeout（）方法设定定时2000毫秒
	//                   window.location.reload();//页面刷新
	//                 },1000);
	//             }
	//            }); 
	// }, function(){

	// });
// }
//自动提交表单数据
//url 提交的地址
//name  表单form的名称
// function ajaxFrom(url='',name="form"){

//     $post = $(name).serialize();
//     $.post(url,$post,function(json){
//           layer.msg(url);
//           });
//  }



// function ql_post(url,param="{'id':id}"){
// 	     $.post(url,param,function(json){
//                 if(json.code == 0){
// 		              layer.msg(json.msg);
// 		                setTimeout(function(){  //使用  setTimeout（）方法设定定时2000毫秒
// 		                window.location.reload();//页面刷新
// 		               },1000);
//                 }
//          });
// }


/** 监听表单提交 */
  // form.on('submit(formSubmit)', function(data){
  //   $.post("{:url('article/add')}",$("formSubmit").serialize(),function(json){
  //         if(json.code == 0){
  //                             if (typeof(res.url) != 'undefined' && res.url != null && res.url != '') {
  //                                   location.href = res.url;
  //                               } else {
  //                                   location.reload();
  //                               }
  //         }else{
  //           layer.msg(json.msg);
  //         }
  //   });
  //    return false; //阻止表单跳转
  // });