const readline = require('readline-sync');
var top = 10,bott = 1,now = 7,Target;
while(true){
    Target=readline.question('目前在'+ now + 'F,要去哪樓?');
    Target=parseInt(Target);
    if(isNaN(Target) || Target > top || Target < bott){
        console.log('Wrong,輸入1~10整數');
        continue;
    }
    if(Target == now){
        console.log("Leave");
        break;
    }
    else{
        if(Target < now){
            console.log("電梯下樓");
            for(now == now;Target < now;now --){
                console.log("電梯在" +now+ "樓");
            }
            console.log(now);
        }
        else{
            console.log("電梯上樓");
            do{
                now ++;
                console.log("電梯在" +now+ "樓");
            }
            while(Target > now);
            console.log(now);
            
        }
    }
}
