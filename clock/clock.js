var h=document.getElementById("h");
var m=document.getElementById("m");
var s=document.getElementById("s");

function fn() {
    var date=new Date();
    h.innerHTML=time(date.getHours());
    m.innerHTML=time(date.getMinutes());
    s.innerHTML=time(date.getSeconds());
}

setInterval(function () {
    fn();
},1000)

fn();

function time(str) {
    if(str<10){
        return "0"+str;
    }
    else {
        return str;
    }
}