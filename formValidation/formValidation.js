var spans=document.getElementById("spans");
spans.innerHTML=Math.floor(Math.random()*9000)+1000;
btn=document.getElementById("btn");
uname=document.getElementById("uname");
upwd=document.getElementById("upwd");
yz=document.getElementById("yz");
btn.onclick=function () {
    if (uname.value=="admin"){
        if (upwd.value=="admin"){
            if (yz.value==spans.innerHTML){
                location.href="../pages/lianxi.html";
            }
            else{
                alert("验证码不对");
            }
        }
        else{
            alert("密码不对");
        }
    }
    else{
        alert("账户不对");
    }
}