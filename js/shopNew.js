// 获取ul
var ul_ = document.getElementsByClassName("shopNew-list")[0];
// console.log(ul_);
// 获取li
var li_ = ul_.children;
// console.log(li_);
var dataList = [];
function ajax_() {
  var ajax = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
  ajax.open("get","http://127.0.0.1:3000/guid/new");
  ajax.send();
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
      if (ajax.status == 200) {
        dataList = JSON.parse(ajax.responseText);
        console.log(dataList);
        holdup();
      }
    }
  };
}

// 获取底部 点击加载更多
var more_=document.getElementsByClassName("more")[0];
var under_=document.getElementsByClassName("under")[0];
// console.log(more_,under_);
more_.addEventListener("click",function(){
    more_.style.display="none";
    under_.style.display="inline-block";
    ajax_();
    function holdup(){
   // 创建页面元素
   var a =document.createElement("a");
   console.log(a);
    // var li=document.createElement("li");
    
    }
 

})


