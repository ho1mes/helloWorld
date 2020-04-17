var b=document.getElementById("b");
var uls=document.getElementById("uls");
var t=document.getElementById("t");

b.onclick=function () {
    var lis=document.getElementsByTagName("li");
    var oli=document.createElement("li");
    //创建li
    uls.appendChild(oli);
    //将li放在ul中
    oli.innerHTML=t.value+"<a href='javascript:;'>删除</a>";
    var oa=document.getElementsByTagName("a");
    for (var i=0;i<oa.length;i++){
        oa[i].onclick=function () {
            uls.removeChild(this.parentNode);
        }
    }
}