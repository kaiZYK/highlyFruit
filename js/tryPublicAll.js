
// 
// 获取整个ul
var ul = document.getElementsByClassName('tryPublicAll_list')[0];
console.log(ul);
// 获取li
var lis = ul.children;
console.log(lis);
// 创建数组接受后台数据
var datalist = [];

// 创建ajax请求数据
function ajax_() {
    var xml = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
    xml.open("get", "http://127.0.0.1:3000/useing/public", true);
    xml.onreadystatechange = function () {
        if (xml.readyState == 4) {
            if (xml.status == 200) {
                datalist = JSON.parse(xml.response);
                console.log(datalist);
                // 遍历数组
                show();

            }
        }
    }
}

// 页面加载触发ajax
window.addEventListener("load", function () {
    ajax_();
});
// 遍历数组
function show() {
    for (var item of datalist) {
        console.log(item);

    }
}
show();