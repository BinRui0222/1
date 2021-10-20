var p =[],i;
for(i=0;i<52;i++){
    switch(parseInt(i/13)){
        case 0:
            p.push("H"+(parseInt(i%13)+1));
            break;
        case 1:
            p.push("B"+(parseInt(i%13)+1));
            break;
        case 2:
            p.push("L"+(parseInt(i%13)+1));
            break;
        case 3:
            p.push("M"+(parseInt(i%13)+1));
            break;
    }
}
console.log(p.toString());
var p1=[];p2=[];p3=[];p4=[];
function compare(a,b){
    return Math.random()-0.5;
}
function compare2(a,b){
    if(b.charCodeAt(1) == a.charCodeAt(1)){
    }
    else{
        return b.charCodeAt(1) - a.charCodeAt(1);
    }
}
function compare3(a,b){
    if(b.charCodeAt(0) == a.charCodeAt(0)){
    }
    else{
        return b.charCodeAt(0) - a.charCodeAt(0);
    }
}
function compare1(a,b){
    if(b.charCodeAt(2) == a.charCodeAt(2)){
    }
    else{
        return b.charCodeAt(2) - a.charCodeAt(2);
    }
}
p.sort(compare1);
p.sort(compare2);
p.sort(compare3);
for(let i=0;i<p.length;i++){
    var r = Math.floor(Math.random() * p.length);
    console.log(p[r]);
    p1.push(p[r]);
    p.splice(r,1);
    var r = Math.floor(Math.random() * p.length);
    console.log(p[r]);
    p2.push(p[r]);
    p.splice(r,1);
    var r = Math.floor(Math.random() * p.length);
    console.log(p[r]);
    p3.push(p[r]);
    p.splice(r,1);
    var r = Math.floor(Math.random() * p.length);
    console.log(p[r]);
    p4.push(p[r]);
    p.splice(r,1);
}
p1.sort(compare1);p1.sort(compare2);p1.sort(compare3);
p2.sort(compare1);p2.sort(compare2);p2.sort(compare3);
p3.sort(compare1);p3.sort(compare2);p3.sort(compare3);
p4.sort(compare1);p4.sort(compare2);p4.sort(compare3);
console.log("Player1: " + p1);
console.log("Player2: " + p2);
console.log("Player3: " + p3);
console.log("Player4: " + p4);