function ajax_() {
  var ajax = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
  ajax.open("get", "http://127.0.0.1:3000/guid/hot");
  ajax.send();
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
      if (ajax.status == 200) {
        dataList = JSON.parse(ajax.responseText);
        console.log(dataList);
        holdUp();
      } else {
        console.log("请求错误");
      }
    }
  };
}
