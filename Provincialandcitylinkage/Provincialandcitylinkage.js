var ar=["北京",["海淀",["海1","海2","海3"],
    "朝阳",["朝1","朝2","朝2"]],
    "上海",["杨浦",["杨1","杨2","杨3"],
        "黄埔",["黄1","黄2","黄3"]],
    "浙江",["杭州",["杭1","杭2","杭3"],
        "宁波",["宁1","宁2","宁3"]]];
/*for (var i=0;i<ar.length;i++){
    alert(ar[i]);
}*/

var prov=document.getElementById("prov");
var city=document.getElementById("city");
var county=document.getElementById("county");

for (var i=0;i<ar.length;i++){
    if (typeof ar[i]=="string"){
        prov.add(new Option(ar[i],ar[i]));
    }
}

prov.onchange=function () {
    for (var i=0;i<ar.length;i++){
        if (typeof ar[i]=="string"){
            if (prov.value==ar[i]){
                var br=ar[i+1];
                city.innerText="";
                for (var j=0;j<br.length;j++){
                    if (typeof br[j]=="string"){
                        city.add(new Option(br[j],br[j]));}
                }
            }
        }
    }
}

city.onchange=function () {
    for (var i=0;i<ar.length;i++){
        if (typeof ar[i]!="string"){
            var br=ar[i];
            for (var j=0;j<br.length;j++){
                if (typeof br[j]=="string"){
                    if (city.value==br[j]){
                        var cr=br[j+1];
                        county.innerText="";
                        for (var k=0;k<cr.length;k++){
                            county.add(new Option(cr[k],cr[k]));
                        }
                    }
                }
            }
        }
    }
}