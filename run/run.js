var i=document.getElementById("imgs");
index=-1;
function fn(value){
    index++;
    if (index>4){
        index=0;
    }
    i.src="images/"+value+"-"+index+".png";
}
document.onkeydown=function (e) {
    var e=window.event||e;
    //alert(e.keyCode);
    switch (e.keyCode) {
        case 37://左
            i.style.left=i.offsetLeft-10+"px";
            fn("left");
            break;
        case 38://上
            i.style.top=i.offsetTop-10+"px";
            fn("up");
            break;
        case 39://右
            i.style.left=i.offsetLeft+10+"px";
            fn("right");
            break;
        case 40://下
            i.style.top=i.offsetTop+10+"px";
            fn("down");
            break;
    }
}

