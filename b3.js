const readline = require('readline-sync');
var top = 10,bott = 0,now = 3,Target;
var floor = ["B3","B2","B1","1","2","3","4","5","6","7","8"];
while(true){
    Target=readline.question("目前在"+ floor[now] + "F,要去哪樓?");
    Target=Target.toUpperCase();
    Target=floor.indexOf(Target);
    if(Target<0){
        console.log("Wrong,輸入"+floor.toString()+"樓層");
        continue;
    }
    if(Target == now){
        console.log("Leave");
        break;
    }
    else{
        if(Target < now){
            console.log("電梯下樓");
            for(now = now;Target < now;now --){
                console.log("電梯在" +floor[now]+ "樓");
            }
            console.log(floor[now]);
        }
        else{
            console.log("電梯上樓");
            do{
                now ++;
                console.log("電梯在" +floor[now]+ "樓");
            }
            while(Target > now);
            console.log(floor[now]);
            
        }
    }
}