// 获取整个ul
var ul = document.getElementsByClassName('tryPublicAll_list')[0];
// console.log(ul);
// 获取li
var lis = ul.children;
// console.log(lis);
// 创建数组接受后台数据
var datalist = [];

// 创建ajax请求数据
function ajax_() {
    var xml = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
    xml.open("get", "http://127.0.0.1:3000/useing/public", true);
    xml.send();
    xml.onreadystatechange = function () {
        if (xml.readyState == 4) {
            if (xml.status == 200) {
                datalist = JSON.parse(xml.response);
                // console.log(datalist);
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

var index_color = 0;
// 遍历数组
function show() {
    for (var item of datalist) {
        // console.log(item);
        // 创建li
        var li = document.createElement("li");



        // 创建li里面的a标签
        var a = document.createElement("a");
        li.appendChild(a);
        a.href = "../tryProduct.html";
        // 创建li里面的span标签
        var span = document.createElement("span");
        span.innerHTML = item.info_ty;
        // 设置首发或者体验师的样式类名
        if (item.info_ty == "首发") {
            span.className = "right_label";
        } else {
            span.className = "right_label tiyanshi";
        }
        a.appendChild(span);
        // 创建a标签里面的img标签
        var a_img = document.createElement("img");
        a_img.src = item.img;
        a_img.className = "content_pic";
        a.appendChild(a_img);
        // 创建a标签里面的div标签
        var a_div = document.createElement("div");
        a_div.className = "list_num_gray";
        a.appendChild(a_div);
        // 三种颜色随机。

        index_color++;
        if (index_color % 3 == 0) {
            a_div.className = "list_num_green";
        } else if (index_color % 3 == 1) {
            a_div.className = "list_num_orange";
        } else {
            a_div.className = "list_num_gray";
        }

        // 创建div标签里面的h2标签
        var a_div_h2 = document.createElement("h2");

        a_div.appendChild(a_div_h2);

        a_div_h2.innerHTML = item.text;
        // 创建div标签里面的第一个p标签
        var a_div_p1 = document.createElement("p");
        a_div_p1.className = 'num';
        a_div.appendChild(a_div_p1);
        // 创建div标签里面的第一个p标签下span1
        var a_div_p1_span1 = document.createElement("span");
        a_div_p1.appendChild(a_div_p1_span1);
        a_div_p1_span1.innerHTML = item.totalnum;
        // 创建div标签里面的第1个p标签下span2
        var a_div_p1_span2 = document.createElement("span");
        a_div_p1.appendChild(a_div_p1_span2);
        a_div_p1_span2.innerHTML = item.totalnum + '台';

        // 创建div标签里面的第2个p标签
        var a_div_p2 = document.createElement("p");
        a_div.appendChild(a_div_p2);
        a_div_p2.className = 'shenqing';


        var a_div_p2_span = document.createElement("span");
        a_div_p2.appendChild(a_div_p2_span);
        a_div_p2_span.innerHTML = item.apply + '申请';
        // 创建div标签里面的第3个p标签
        var a_div_p3 = document.createElement("p");
        a_div.appendChild(a_div_p3);
        a_div_p3.className = 'shuliang';
        a_div_p3.innerHTML = "剩余时间2天";

        ul.appendChild(li);

    }
}

// 获取点击加载更多按钮
var more = document.getElementsByClassName("more")[0];
// 获取正在加载中按钮
var under = document.getElementsByClassName("under")[0];
// 获取没有更多提示信息
var notMore = document.getElementsByClassName("notMore")[0];

// 点击时加载数据
more.addEventListener("click", function () {
    more.style.display = "none";
    under.style.display = "inline-block";
    setTimeout(function () {
        show();
        more.style.display = "inline-block";
        under.style.display = "none";
    }, 1000);
});