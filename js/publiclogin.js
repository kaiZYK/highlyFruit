// 登录回显功能
var login = document.getElementsByClassName("login")[0];
var enter = document.getElementsByClassName("enter")[0];
// console.log(login);
// console.log(enter);
var suc = window.localStorage.getItem("succeed");
var user = window.localStorage.getItem("user");
// console.log(suc);
// console.log(tel);
if (suc == "true") {
  enter.innerHTML = user;
  enter.style.width = "100px";
  login.parentNode.removeChild(login);
}
