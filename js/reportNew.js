


// 体检报告最新部分点赞
var zans_1 = null;
function zan_1() {
    zans_1 = document.getElementsByClassName('zan');
    console.log(zans_1);
}
zan_1();
for (let i = 0; i < zans_1.length; i++) {
    // console.log("======");
    zans_1[i].setAttribute("index", 0);
    zans_1[i].addEventListener("click", function () {
        console.log(this);
        this.setAttribute("index", this.getAttribute("index") - 0 + 1);
        if (this.getAttribute("index") % 2) {
            this.style.backgroundImage = "Url(../img/icon/xinRedh.png)";
            this.style.backgroundSize = "12px";
            this.innerHTML = this.innerHTML - 0 + 1;
        } else {
            this.style.backgroundImage = "Url(../img/icon/use5.png)";
            this.style.backgroundSize = "12px";
            this.innerHTML = this.innerHTML -= 1;
        }

    })

}


