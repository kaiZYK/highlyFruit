// 获取点赞标签
var zans = null;
function zan() {
  zans = document.getElementsByClassName("like");
}
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
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = "##";
    // a.href = "./shopProduct.html";
    var img_ = document.createElement("img");
    img_.className = "content_pic";
    img_.src = item.img;
    var div_1 = document.createElement("div");
    var div_2 = document.createElement("div");
    var div_3 = document.createElement("div");
    var p_ = document.createElement("p");
    p_.className = "content_title";
    p_.innerHTML = item.text;
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

    // 给img设置跳转页面
    img_.addEventListener("click", function () {
      window.location.href = "./shopProduct.html";
    });
  }
  // 点赞功能
  // 每次渲染数据获取赞
  zan();
  // 遍历爱心的数组
  for (let i = 0; i < zans.length; i++) {
    // 给每一个爱心设置index属性 初始值都为0
    zans[i].setAttribute("index", 0);
    zans[i].addEventListener("click", function () {
      // 当点击当前的爱心的时候 当前的index属性加1
      this.setAttribute("index", this.getAttribute("index") - 0 + 1);

      // 判断当前的index属性的第几次 添加或删除爱心和减少数量
      if (this.getAttribute("index") % 2) {
        this.style.backgroundImage = "Url(../img/icon/xinRedh.png)";
        this.style.backgroundSize = "12px";
        this.innerHTML = this.innerHTML - 0 + 1;
      } else {
        this.style.backgroundImage = "Url(../img/icon/xin.png)";
        this.style.backgroundSize = "12px";
        this.innerHTML -= 1;
      }
    });
    // 鼠标滑上去的时候 红心点量
    zans[i].addEventListener("mouseenter", function () {
      this.style.backgroundImage = "Url(../img/icon/xinRedh.png)";
      this.style.backgroundSize = "12px";
    });
    // 鼠标滑走的时候判断是奇数次还是偶数次 奇数次变红 偶数次变灰
    zans[i].addEventListener("mouseleave", function () {
      if (this.getAttribute("index") % 2) {
        this.style.backgroundImage = "Url(../img/icon/xinRedh.png)";
        this.style.backgroundSize = "12px";
      } else {
        this.style.backgroundImage = "Url(../img/icon/xin.png)";
        this.style.backgroundSize = "12px";
      }
    });
  }
}
// 当页面加载时
window.addEventListener("load", function () {
  ajax_();
});
// 获取底部 点击加载更多
var more_ = document.getElementsByClassName("more")[0];
var under_ = document.getElementsByClassName("under")[0];
var notMore = document.getElementsByClassName("notMore")[0];
more_.addEventListener("click", function () {
  more_.style.display = "none";
  under_.style.display = "inline-block";
  index++;
  if (index < dataList.length) {
    setTimeout(() => {
      holdUp();
      more_.style.display = "inline-block";
      under_.style.display = "none";
    }, 1000);
  }
});
