// 体检报告最新部分点赞
var zans_1 = null;
function zan_1() {
  zans_1 = document.getElementsByClassName("zan");
}
zan_1();
for (let i = 0; i < zans_1.length; i++) {
  zans_1[i].setAttribute("index", 0);
  zans_1[i].addEventListener("click", function () {
    this.setAttribute("index", this.getAttribute("index") - 0 + 1);
    if (this.getAttribute("index") % 2) {
      this.style.backgroundImage = "Url(../img/icon/use5.png)";
      this.style.backgroundSize = "12px";
      this.innerHTML = this.innerHTML - 0 + 1;
    } else {
      this.style.backgroundImage = "Url(../img/icon/zan.png)";
      this.style.backgroundSize = "12px";
      this.innerHTML = this.innerHTML -= 1;
    }
  });
  // 鼠标滑上去的时候 红心点量
  zans_1[i].addEventListener("mouseenter", function () {
    this.style.backgroundImage = "Url(../img/icon/use5.png)";
    this.style.backgroundSize = "12px";
  });
  // 鼠标滑走的时候判断是奇数次还是偶数次 奇数次变红 偶数次变灰
  zans_1[i].addEventListener("mouseleave", function () {
    if (this.getAttribute("index") % 2) {
      this.style.backgroundImage = "Url(../img/icon/use5.png)";
      this.style.backgroundSize = "12px";
    } else {
      this.style.backgroundImage = "Url(../img/icon/zan.png)";
      this.style.backgroundSize = "12px";
    }
  });
    zans_1 = document.getElementsByClassName('zan');
}
zan_1();
for (let i = 0; i < zans_1.length; i++) {
    zans_1[i].setAttribute("index", 0);
    zans_1[i].addEventListener("click", function () {
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
