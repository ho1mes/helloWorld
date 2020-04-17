var arr=["面条","饺子","汤圆","米饭","汉堡"];
var btn=document.getElementById("btn");
var stop=document.getElementById("stop");
var box=document.getElementById("box");
var index=0;
time=null;
btn.onclick=function () {
     time=setInterval(function () {
        box.innerHTML=arr[index];
        index++;
        if (index>arr.length-1){
            index=0;
        }
    },500);
}

stop.onclick=function () {
    clearInterval(time);
}