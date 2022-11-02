// 获取点赞标签
var zans = null;
function zan() {
  zans = document
    .getElementsByClassName("coldplay")[1]
    .getElementsByClassName("like");
  //   console.log(zans);
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
      window.location.href = "./try/tryProduct.html";
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
        this.style.backgroundImage = "Url(./img/icon/xinRedh.png)";
        this.style.backgroundSize = "12px";
        this.innerHTML = this.innerHTML - 0 + 1;
      } else {
        this.style.backgroundImage = "Url(./img/icon/xin.png)";
        this.style.backgroundSize = "12px";
        this.innerHTML -= 1;
      }
    });
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

// 回到顶部按钮消失功能
// 获取回到顶部按钮
var goTop = document.getElementsByClassName("goTop")[0];
// 节流阀
var flg = true;
function scroll_() {
  if (flg) {
    // 节流阀关闭
    flg = false;
    var scrollTop = document.documentElement.scrollTop;
    if (scrollTop <= 20) {
      goTop.style.display = "none";
    } else {
      goTop.style.display = "block";
    }
  }
  setTimeout(function () {
    // 节流阀打开
    flg = true;
  }, 100);
}
window.onload = scroll_;
window.onscroll = scroll_;

// banner添加预约功能
// 获取申请人数
var proposer = document.getElementsByClassName("proposer")[0];
// 获取台数
var count = document.getElementsByClassName("count")[0];
// 获取立即申请按钮
var immediately = document.getElementsByClassName("immediately")[0];
// console.log(immediately);
// 点击增加申请人数和减少剩余台数
immediately.addEventListener("click", function () {
  proposer.innerHTML = proposer.innerHTML - 0 + 1;
  count.innerHTML = count.innerHTML - 0 - 1;
  if (count.innerHTML == 0) {
    immediately.disabled = true;
    immediately.style.backgroundColor = "gray";
    immediately.innerHTML = "暂无库存";
  }
});

// 倒计时
// 获取倒计时展示区域
var countDown = document.getElementsByClassName("countDown")[0];
// 倒计时双11时间
var futureData = new Date(2022, 10, 11, 00, 00, 00);
var timer = null;

timer = setInterval(function () {
  // 获取现在时间
  var now = new Date();
  // 动态拿到现在时间到双十一时间的毫秒数
  var jetTime = futureData - now;
  // 天数
  var day = timeFormatting(Math.floor(jetTime / 1000 / 60 / 60 / 24));
  // 小时
  var hour = timeFormatting(Math.floor((jetTime / 1000 / 60 / 60) % 24));
  // 分钟
  var minute = timeFormatting(Math.floor((jetTime / 1000 / 60) % 60));
  // 秒
  var second = timeFormatting(Math.floor((jetTime / 1000) % 60));
  countDown.innerHTML = `申请时间剩余：${day}天${hour}小时${minute}分钟${second}秒`;
  // 判断时间是否到双十一
  if (day <= 0 && hour <= 0 && minute <= 0 && second <= 0) {
    clearInterval(timer);
    countDown.innerHTML = `双十一已到，大家开始狂欢吧！`;
  }
}, 1000);

// 封装时间格式化函数
function timeFormatting(time) {
  return time < 10 ? "0" + time : time;
}

// 轮播图功能
// 获取左箭头按钮
var boult_l = document.getElementsByClassName("boult_l")[0];
// 获取右箭头按钮
var boult_r = document.getElementsByClassName("boult_r")[0];
// 获取滚动的ul
var scrollUl = document.getElementsByClassName("scrollul")[0];

// 向左滑动 右箭头
var translateX = 0;
boult_r.addEventListener("click", function () {
  // 点击清除轮播
  clearInterval(scrollTimer);
  // 右箭头判断是否在第三屏
  if (translateX == -2024) {
    // 在第三屏  再点击右箭头 再向左滑动就回到第一屏
    translateX = 0;
  } else {
    // 不在第三屏就每次向左滑动一屏
    translateX -= 1012;
  }
  scrollUl.style.transform = "translateX(" + translateX + "px)";
  scrollUl.style.transition = "all 1s ease 0.5s";
  // 点完之后重新执行定时器轮播
  scrollTimer = setInterval(function () {
    if (translateX == -2024) {
      // 在第三屏  再点击右箭头 再向左滑动就回到第一屏
      translateX = 0;
    } else {
      // 不在第三屏就每次向左滑动一屏
      translateX -= 1012;
    }
    scrollUl.style.transform = "translateX(" + translateX + "px)";
    scrollUl.style.transition = "all 1s ease 0.5s";
  }, 3000);
});

// 向右滑动 左箭头
boult_l.addEventListener("click", function () {
  // 点击清除轮播
  clearInterval(scrollTimer);
  // 左箭头判断是否在第一屏
  if (translateX == 0) {
    // 在第一屏 再点击左箭头 再向右滑动就回到第三屏
    translateX = -2024;
  } else {
    // 不在第一屏就每次向右滑动一屏
    translateX += 1012;
  }
  scrollUl.style.transform = "translateX(" + translateX + "px)";
  scrollUl.style.transition = "all 1s ease 0.5s";
  // 点完之后重新执行定时器轮播
  scrollTimer = setInterval(function () {
    if (translateX == -2024) {
      // 在第三屏  再点击右箭头 再向左滑动就回到第一屏
      translateX = 0;
    } else {
      // 不在第三屏就每次向左滑动一屏
      translateX -= 1012;
    }
    scrollUl.style.transform = "translateX(" + translateX + "px)";
    scrollUl.style.transition = "all 1s ease 0.5s";
  }, 3000);
});

// 自动向左滑动轮播
var scrollTimer = null;
scrollTimer = setInterval(function () {
  if (translateX == -2024) {
    // 在第三屏  再点击右箭头 再向左滑动就回到第一屏
    translateX = 0;
  } else {
    // 不在第三屏就每次向左滑动一屏
    translateX -= 1012;
  }
  scrollUl.style.transform = "translateX(" + translateX + "px)";
  scrollUl.style.transition = "all 1s ease 0.5s";
}, 3000);

// 报告精选部分的点赞功能
// 获取精选部分的全部的a
var reportAs = document
  .getElementsByClassName("report")[0]
  .getElementsByClassName("report_a");
// 遍历全部的a路径不跳转
for (let item of reportAs) {
  item.href = "##";
}
// 获取精选部分的全部的img
var reportImgs = document
  .getElementsByClassName("report")[0]
  .getElementsByClassName("content_pic");
// 遍历全部的img路径跳转
for (let item of reportImgs) {
  item.addEventListener("click", function () {
    window.location.href = "./try/tryProduct.html";
  });
}
// 获取精选部分的全部的点赞
var reportZans = document
  .getElementsByClassName("report")[0]
  .getElementsByClassName("like");
// 遍历爱心的数组
for (let i = 0; i < reportZans.length; i++) {
  // 给每一个爱心设置index属性 初始值都为0
  reportZans[i].setAttribute("index", 0);
  reportZans[i].addEventListener("click", function () {
    // 当点击当前的爱心的时候 当前的index属性加1
    this.setAttribute("index", this.getAttribute("index") - 0 + 1);

    // 判断当前的index属性的第几次 添加或删除爱心和减少数量
    if (this.getAttribute("index") % 2) {
      this.style.backgroundImage = "Url(./img/icon/xinRedh.png)";
      this.style.backgroundSize = "12px";
      this.innerHTML = this.innerHTML - 0 + 1;
    } else {
      this.style.backgroundImage = "Url(./img/icon/zan.png)";
      this.style.backgroundSize = "12px";
      this.innerHTML -= 1;
    }
  });
}

// 导购部分的点赞功能
// 导购部分的全部的a
var shopAs = document
  .getElementsByClassName("shop")[0]
  .getElementsByClassName("shop_a");
// 遍历全部的a路径不跳转
for (let item of shopAs) {
  item.href = "##";
}
// 获取精选部分的全部的img
var shopImgs = document
  .getElementsByClassName("shop")[0]
  .getElementsByClassName("content_pic");
// 遍历全部的img路径跳转
for (let item of shopImgs) {
  item.addEventListener("click", function () {
    window.location.href = "./shop/shopProduct.html";
  });
}
// 获取精选部分的全部的点赞
var shopZans = document
  .getElementsByClassName("shop")[0]
  .getElementsByClassName("like");
// 遍历爱心的数组
for (let i = 0; i < shopZans.length; i++) {
  // 给每一个爱心设置index属性 初始值都为0
  shopZans[i].setAttribute("index", 0);
  shopZans[i].addEventListener("click", function () {
    // 当点击当前的爱心的时候 当前的index属性加1
    this.setAttribute("index", this.getAttribute("index") - 0 + 1);

    // 判断当前的index属性的第几次 添加或删除爱心和减少数量
    if (this.getAttribute("index") % 2) {
      this.style.backgroundImage = "Url(./img/icon/xinRedh.png)";
      this.style.backgroundSize = "12px";
      this.innerHTML = this.innerHTML - 0 + 1;
    } else {
      this.style.backgroundImage = "Url(./img/icon/xin.png)";
      this.style.backgroundSize = "12px";
      this.innerHTML -= 1;
    }
  });
}
