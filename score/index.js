
var str=prompt("请输入成绩");
if(isNaN(str)){
    alert("请输入数字");
}
else if(str==100){
    alert("满分");
}
else if(str>=60){
    alert("及格");
}
else {
    alert("不及格");
}