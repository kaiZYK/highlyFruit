// 获取ul
var ul_ = document.getElementsByClassName("shopNew-list")[0];
var dataList = [];
function ajax_() {
  var ajax = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
  ajax.open("get", "http://127.0.0.1:3000/guid/new");
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
// 计数器
var index = 0;
function holdUp() {
  // 创建页面元素
  for (let item of dataList) {
    console.log(item);
    var li = document.createElement("li");
    var a = document.createElement("a");
    //   console.log(a);
    a.href = "./shopProduct.html";
    var img_ = document.createElement("img");
    img_.className = "content_pic";
    img_.src = item.img;
    // console.log(img_);
    var div_1 = document.createElement("div");
    var div_2 = document.createElement("div");
    // console.log(div_1, div_2);
    var div_3 = document.createElement("div");
    var p_ = document.createElement("p");
    p_.className = "content_title";
    p_.innerHTML = item.text;
    // console.log(p_);
    div_3.appendChild(p_);
    var div_icon = document.createElement("div");
    div_icon.className = "icon";
    div_3.appendChild(div_icon);
    var like_ = document.createElement("span");
    like_.className = "like";
    like_.innerHTML = item.like;
    div_icon.appendChild(like_);
    var comment_ = document.createElement("span");
    comment_.className = "comment";
    comment_.innerHTML = item.words;
    div_icon.appendChild(comment_);
    a.appendChild(img_);
    a.appendChild(div_1);
    a.appendChild(div_2);
    a.appendChild(div_3);
    li.appendChild(a);
    ul_.appendChild(li);
  }
}
window.addEventListener("load", function () {
  ajax_();
});
// 获取底部 点击加载更多
var more_ = document.getElementsByClassName("more")[0];
var under_ = document.getElementsByClassName("under")[0];
more_.addEventListener("click", function () {
  more_.style.display = "none";
  under_.style.display = "inline-block";
  index++;
  if (index < dataList.length) {
    setTimeout(() => {
      holdUp();
    }, 1000);
  }
});
