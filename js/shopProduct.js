
// 导购详情页喜欢脚本
// 找到喜欢按钮a标签 like点击变红数字加1
// 心
var like = document.getElementsByClassName('like')[0];
var likeXin = document.getElementsByClassName('like_xin')[0];
var num = document.getElementsByClassName('num')[0];
// 点击
like.addEventListener("click", function () {
    likeXin.setAttribute("index", likeXin.getAttribute("index") - 0 + 1);
    if (likeXin.getAttribute("index") % 2) {
        likeXin.style.backgroundImage = "Url(../img/icon/xinRedh.png)";
        like.style.color = "#fe6f60";
        num.innerHTML = num.innerHTML - 0 + 1;
    } else {
        likeXin.style.backgroundImage = "Url(../img/icon/xinRedo.png)";
        num.innerHTML = num.innerHTML -= 1;
        like.style.color = "#bebebe";
    }
})
// 分享
var share = document.getElementsByClassName('share')[0];
var likeFenxiang = document.getElementsByClassName('like_fenxiang')[0];
// 点击
share.addEventListener("click", function () {
    likeFenxiang.setAttribute("index", likeFenxiang.getAttribute("index") - 0 + 1);
    if (likeFenxiang.getAttribute("index") % 2) {
        likeFenxiang.style.backgroundImage = "Url(../img/icon/shareh_yj1.png)";
        share.style.color = "#fe6f60";
    } else {
        likeFenxiang.style.backgroundImage = "Url(../img/icon/share_yj1.png)";
        share.style.color = "#bebebe";
    }
})
