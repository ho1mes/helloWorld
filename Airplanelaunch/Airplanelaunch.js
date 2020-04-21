var im=document.getElementById("im");

document.onkeydown=function (e) {
    var e=window.event||e;
    //alert(e.keyCode);
    switch (e.keyCode) {
        case 37://左
            im.style.left=im.offsetLeft-10+"px";
            break;
        case 38://上
            im.style.top=im.offsetTop-10+"px";
            break;
        case 39://右
            im.style.left=im.offsetLeft+10+"px";
            break;
        case 40://下
            im.style.top=im.offsetTop+10+"px";
            break;
        case 32://空格
            game(im.offsetTop,im.offsetLeft+im.offsetWidth/2);
            break;
    }
}

function game(top,left) {
    for (var i=0;i<5;i++){
        var pos=document.getElementById("pos"+i);

        if(pos.style.display=="none"){
            pos.style.display="block";
            pos.style.top=top+"px";
            pos.style.left=left+"px";
            break;
        }
    }
}

setInterval(function () {
    for (var i=0;i<5;i++){
        var pos=document.getElementById("pos"+i);
        pos.style.top=pos.offsetTop-10+"px";
        if (pos.offsetTop<-7){
            pos.style.display="none";
        }
    }
},50)
