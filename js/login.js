// 登录功能
// 获取手机号
var loginTel = document.getElementsByClassName("loginTel")[0];
// 获取密码
var conFirmPws = document.getElementsByClassName("conFirmPws")[0];
// 获取记住密码
var check = document.getElementById("check");
// 获取立即登录
var btn = document.getElementsByClassName("btn")[0];
// console.log(loginTel);
// console.log(conFirmPws);
// console.log(check);
// console.log(btn);

// 记住密码 功能
window.addEventListener("load", function () {
  if (window.localStorage.getItem("check") == "true") {
    loginTel.value = window.localStorage.getItem("tel");
    conFirmPws.value = window.localStorage.getItem("pwd");
    check.checked = window.localStorage.getItem("check");
  }
});
// 判断账号密码是否输入正确
btn.addEventListener("click", function () {
  var telLocalStorage = window.localStorage.getItem("tel");
  var pwdLocalStorage = window.localStorage.getItem("pwd");
  //   console.log(telLocalStorage);
  //   console.log(pwdLocalStorage);
  if (
    loginTel.value == telLocalStorage &&
    conFirmPws.value == pwdLocalStorage
  ) {
    alert("登录成功");
    window.location.href = "./index.html";
    window.localStorage.setItem("check", check.checked);
    window.localStorage.setItem("succeed", true);
  } else {
    alert("用户名/密码输入错误");
    window.localStorage.setItem("succeed", false);
  }
});
