var d2=document.getElementById("d2");
var d1=document.getElementById("d1");
d2.onmousedown=function (e) {
    var e=window.event||e;
    var x=d1.offsetWidth-e.clientX;
    var y=d1.offsetHeight-e.clientY;

    document.onmousemove=function (e) {
        var e=window.event||e;
        d1.style.width=e.clientX+x+"px";
        d1.style.height=e.clientY+y+"px";
    }
}

d2.onmouseup=function () {
    document.onmousemove=null;
}