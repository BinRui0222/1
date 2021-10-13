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
console.log("Player1: " + p1);
console.log("Player2: " + p2);
console.log("Player3: " + p3);
console.log("Player4: " + p4);