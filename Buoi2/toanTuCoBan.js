var a = 6;
var b = "10";
var c = 100;
// var check = a != b;

// console.log(check);

// if (10 === a) {
//   console.log(`Thỏa mãn`);
// }

var check = a >= 5 && a < 8;
var check1 = a >= 5 || a < 8;
console.log(check);
console.log(check1);

var check3 = (a > 0 || a < -2) && b == 10 && c > 10;
console.log(check3);

// toán tử 3 ngôi
var d = 10;
var e = d >= 5 ? "Thỏa mãn" : "Không thỏa mãn";
// Cú pháp : Điều kiện ? giá trị đúng : giá trị sai
var s = 1 + -2 + d >= 10 ? 20 : 10;

console.log(e);
console.log(s);
console.log(s > 10 ? "ok" : "sai");

var show = `KQ = ${a > 5 ? "ok " : "sai"}`;
console.log(show);
