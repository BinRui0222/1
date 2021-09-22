const readline = require('readline-sync');
w =readline.question('體重(kg)');
h =readline.question('身高(m)');
var bmi =w/(h*h);
console.log("BMI = "+ bmi);