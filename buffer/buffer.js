
var timer=null;
function animate(dom,target) {
    clearInterval(timer);
    timer=setInterval(function () {

        var speed=(target-dom.offsetLeft)/10;
        speed=speed>0 ? Math.ceil(speed):Math.floor(speed);
        if (target===dom.offsetLeft){
            clearInterval(timer);
        }else {
            dom.style.left = dom.offsetLeft + speed + "px";
        }
    },30);
}