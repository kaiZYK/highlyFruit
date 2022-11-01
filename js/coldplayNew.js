// 获取整个ul
var ul = document.getElementsByClassName("coldplayNew-list")[0];
// 获取li
var lis = ul.children;
// 创建数据数组
var datalist = [];

// 创建ajax
function ajax_() {
  var xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
  xhr.open("get", "http://127.0.0.1:3000/play/new", true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        datalist = JSON.parse(xhr.response);
        console.log(datalist);
        // 遍历数据
        show();
      }
    }
  };
}

// 页面加载完成触发ajax
window.addEventListener("load", function () {
  ajax_();
});

// 遍历数据
function show() {
  for (let item of datalist) {
    console.log(item);
    // 创建li里面的a标签
    var a = document.createElement("a");
    a.href = "../try/tryProduct.html";

    // 创建a标签里面的img标签
      var img = document.createElement("img");
      img.src=""
  }
}
