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
      }
    }
  };
}
ul_.addEventListener("click",function(){
    ajax_();
})
