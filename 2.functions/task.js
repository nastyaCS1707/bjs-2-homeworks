function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for(numbers of arr){
    if (numbers < min) {
      min = numbers;
    } else if(numbers > max){
      max = numbers;
    }
    sum += numbers;
  }
  let avg = sum / arr.length
  return { min: min, max: max, avg: +avg.toFixed(2) };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for(numbers of arr){
    sum += numbers
  }
  return sum

}

function differenceMaxMinWorker(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let dif = null;
  if (!Array.isArray(arr) || arr.length === 0){
    dif = 0
  }else {
    dif = max-min
  }
  return dif
}
 
function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for(numbers of arr){
    if (numbers % 2 === 0){
      sumEvenElement += numbers;
    }else {
      sumOddElement += numbers
    }
  }
  return sumEvenElement - sumOddElement
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let avg = 0
  if (!Array.isArray(arr) || arr.length === 0){
    avg = 0
  }else {
    for(numbers of arr){
      if (numbers % 2 === 0){
        sumEvenElement += numbers;
        countEvenElement++
      }else {
        continue;
      }
    }
    avg = sumEvenElement/countEvenElement
  }
  return avg
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for(arr of arrOfArr){
    let res = func(...arr);
    if(res > maxWorkerResult){
      maxWorkerResult = res
    }else{
      continue;
    }
  }
  return maxWorkerResult;
}
