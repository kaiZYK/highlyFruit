// 获取点赞标签
var zans = null;
// 点赞的次数
var zanIndex = 0
function zan() {
  zans = document.getElementsByClassName('like');
}

// 获取整个ul
var ul = document.getElementsByClassName("list")[0];

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

// 数据下标
index = 0;
// 遍历数据
function show() {
  for (let item of datalist[index]) {

    // 创建ul里面的li标签
    var li = document.createElement("li");

    // 创建li里面的a标签
    var a = document.createElement("a");
    a.href = "##";
    // a.href = "../try/tryProduct.html";

    // 创建a标签里面的img标签
    var a_img = document.createElement("img");
    a_img.src = item.img;
    a_img.className = "content_pic";
    a.appendChild(a_img);

    // 创建a标签里面的div标签
    var a_div = document.createElement("div");
    // 创建a标签里面的div标签里面的第一个p标签
    var a_div_p1 = document.createElement("p");
    a_div_p1.innerHTML = item.text;
    a_div_p1.className = "content_title";
    a_div.appendChild(a_div_p1);
    // 创建a标签里面的div标签里面的第二个p标签
    var a_div_p2 = document.createElement("p");
    a_div_p2.innerHTML = item.description;
    a_div_p2.className = "content_introduce";
    a_div.appendChild(a_div_p2);
    // 创建a标签里面的div标签里面的第一个div标签
    var a_div_div1 = document.createElement("div");
    a_div_div1.innerHTML = item.price;
    a_div_div1.className = "content_price";
    a_div.appendChild(a_div_div1);
    // 创建a标签里面的div标签里面的第二个div标签
    var a_div_div2 = document.createElement("div");
    a_div_div2.className = "icon";
    // 创建a标签里面的div标签里面的第二个div标签里面的第一个sapn
    var a_div_div2_span1 = document.createElement("span");
    a_div_div2_span1.innerHTML = item.like;
    a_div_div2_span1.className = "like";
    a_div_div2.appendChild(a_div_div2_span1);
    // 创建a标签里面的div标签里面的第二个div标签里面的第二个sapn
    var a_div_div2_span2 = document.createElement("span");
    a_div_div2_span2.innerHTML = item.words;
    a_div_div2_span2.className = "comment";
    a_div_div2.appendChild(a_div_div2_span2);
    a_div.appendChild(a_div_div2);
    a.appendChild(a_div);
    li.appendChild(a);
    ul.appendChild(li);

    // 给img设置跳转页面
    a_img.addEventListener("click", function () {
      window.location.href = "../try/tryProduct.html";
    })
  }
  // 点赞功能
  // 每次渲染数据获取赞
  zan()
  for (let i = 0; i < zans.length; i++) {
    zans[i].addEventListener("click", function () {
      // 点赞的次数增加
      zanIndex++;
      if (zanIndex % 2) {
        this.style.backgroundImage = "Url(../img/icon/xinRedh.png)";
        this.style.backgroundSize = "12px";
        this.innerHTML = this.innerHTML - 0 + 1;
      } else {
        this.style.backgroundImage = "Url(../img/icon/xin.png)";
        this.style.backgroundSize = "12px";
        this.innerHTML -= 1;
      }
    })
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
  zan();
  // 数据下标增加
  index++;
  // 如果数据下标大于数据数组的长度 显示暂无更多数据
  more.style.display = "none";
  under.style.display = "inline-block";
  // 如果数据下标小于数据数组的长度 加载数据
  if (index < datalist.length) {
    setTimeout(function () {
      show();
      more.style.display = "inline-block";
      under.style.display = "none";
    }, 1000);
  }
  // 如果数据的下标为数据的最后一组数据 显示没有更多了 等待一秒到最后一组数据展示完出现
  if (index == datalist.length - 1) {
    setTimeout(function () {
      more.style.display = "none";
      under.style.display = "none";
      notMore.style.display = "inline-block";
    }, 1000);
  }
});
