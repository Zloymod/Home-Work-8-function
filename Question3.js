// let number = Number(prompt("Введи число"));
// console.log(number);
let number = 1;

console.log(Number.isInteger(number));
function getDivisorsCount(number) {
  let sum = 0;
  if (typeof number === "number" && number > 0 && Number.isInteger(number)) {
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        sum = sum + 1;
        // console.log(typeof i, i);
      }
    }
    return sum;
  } else {
    return alert("number должен быть целым числом и больше нуля!");
  }
}

// function summ(sum) {
// console.log(sum);
// }

// getDivisorsCount();

console.log(getDivisorsCount(0.5));
console.log(getDivisorsCount(12));
console.log(getDivisorsCount(15));
console.log(getDivisorsCount(42));
console.log(getDivisorsCount(4));
console.log(getDivisorsCount());

// let number = 1;
// let sum = 0;
// if (Number.isInteger(number) === "false") {
//   alert("number должен быть целым числом и больше нуля!");
//   function getDivisorsCount(number, sum) {
//     if (typeof number === "number" && number > 0 && Number.isInteger(number)) {
//       for (let i = 1; i <= number; i++) {
//         if (number % i === 0) {
//           sum = sum + 1;
//           // console.log(typeof i, i);
//         }
//         return sum;
//       }
//     }
//   }
// }

// //
// // console.log(getDivisorsCount(0.5));
// // 9;
// // console.log(getDivisorsCount(12.5));
// console.log(getDivisorsCount(15));
// console.log(getDivisorsCount(42));
// console.log(getDivisorsCount(4));
// console.log(getDivisorsCount());
