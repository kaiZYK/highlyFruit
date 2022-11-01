// 创建ajax
function ajax_() {
  var xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
  xhr.open("get", "http://127.0.0.1:3000/play/hot", true);
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
