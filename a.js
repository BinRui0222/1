const readline = require('readline-sync');
we = readline.question('Weight(kg)');
he = readline.question('Height(cm)');
w = Number(we);
h = Number(he);
if (isNaN(w)|isNaN(h)|w > 635 | w < 5 |h > 272 | h< 56){
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