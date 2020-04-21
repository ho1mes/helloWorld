//阴影跟鼠标动
var box=document.getElementById("box");
var mi=document.getElementById("min");
var ma=document.getElementById("max");
var bb=document.getElementById("bb");
var imgs=document.getElementById("imgs");

mi.onmousemove=function (e) {
    ma.style.display="block";
    bb.style.display="block";

    var scrollLeft=document.body.scrollLeft||document.documentElement.scrollLeft;
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    var x=e.clientX+document.body.scrollLeft-mi.offsetLeft-bb.offsetWidth/2;
    var y=e.clientY+document.body.scrollTop-mi.offsetTop-bb.offsetHeight/2;

    if(x<0){
        x=0;
    }
    else if(x>mi.offsetWidth-bb.offsetWidth){
        x=mi.offsetWidth-bb.offsetWidth;
    }

    if(y<0){
        y=0;
    }
    else if(y>mi.offsetHeight-bb.offsetHeight){
        y=mi.offsetHeight-bb.offsetHeight;
    }
    bb.style.left=x+"px";
    bb.style.top=y+"px";

    imgs.style.left=-2*x+"px";
    imgs.style.top=-2*y+"px";

};



mi.onmouseout=function () {
    ma.style.display="none";
    bb.style.display="none";
};

//图片变化


