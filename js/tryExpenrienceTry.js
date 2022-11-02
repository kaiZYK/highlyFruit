// 创建ajax请求数据
function ajax_() {
    var xml = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
    xml.open("get", "http://127.0.0.1:3000/report/hot", true);
    xml.send();
    xml.onreadystatechange = function () {
        if (xml.readyState == 4) {
            if (xml.status == 200) {
                datalist = JSON.parse(xml.response);
                // 遍历数组
                show();

            }
        }
    }
}