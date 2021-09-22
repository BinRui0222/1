const readline = require('readline-sync');
w = readline.question('體重(kg)');
h = readline.question('身高(cm)');
var bmi =w/((h/100)**2);
console.log("BMI = "+ bmi);