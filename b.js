const readline = require('readline-sync');
var t = 10,b = 1,n = 7,Target;
while(true){
    Target=readline.question('目前在'+ n + 'F,要去哪樓?');
    Target=parseInt(Target);
    if(isNaN(Target) || Target > t || Target < b){
        console.log('Wrong,輸入1~10整數');
        continue;
    }
    if(Target == n){
        console.log("Leave");
        break;
    }
    else{
        console.log('continue');
    }
}
