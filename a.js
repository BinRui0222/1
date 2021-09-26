const readline = require('readline-sync');
w = readline.question('Weight(kg)');
h = readline.question('Height(cm)');
if (w > 635 | w < 5 |h > 272 | h< 56){
    console.log("數值錯誤");
    return 0 ;
}
var bmi =w/((h/100)**2);
console.log("BMI = "+ bmi);
if (bmi < 18.5) {
    console.log("過輕");
}
if (bmi > 24){
    console.log("過重");
}