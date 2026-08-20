"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4 * a * c;
  if(d === 0){
    arr.push(-b / (2 * a));
  }
  else if(d > 0){
    arr.push((-b + Math.sqrt(d) )/(2*a));
    arr.push((-b - Math.sqrt(d) )/(2*a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let sum = 0;
  let p = (percent/100) / 12;
  let s = amount - contribution;
  let n = countMonths;
  let payment = s * (p + (p / (((1 + p)**n) - 1)));
  sum = payment * n;
  return +sum.toFixed(2);
}