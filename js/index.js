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
// var futureData = new Date(2022, 10, 11, 00, 00, 00);
var futureData = new Date(2022, 10, 1, 23, 11, 00);
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
