function getSumOfNumbers(number, type = "odd") {
  if (typeof number !== "number") {
    return NaN;
  }

  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (type == "even" && i % 2 === 0) {
      sum += i;
    } else if (type == "odd" && i % 2 !== 0) {
      sum += i;
    } else if (type !== "even" && type !== "odd") {
      sum += i;
    }
  }
  return sum;
}

console.log(getSumOfNumbers("dawdwa")); // NaN
console.log(getSumOfNumbers(10)); // 25 (по умолчанию "odd")

console.log(getSumOfNumbers(10, "odd")); // 25
console.log(getSumOfNumbers(10, "even")); // 30
console.log(getSumOfNumbers(10, "")); // 55

// const result = number(10);
// console.log("result", result);

// function number(summ) {
//   if (((i = 0), i <= 10, i++)) {
//     const summ = (i = ++i);
//     console.log(summ);
//     return summ;
//   }
// }
// } else {
//   return NaN;
// }

// console.log(number());
