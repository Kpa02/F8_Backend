// Bai 1 : Hoán vị hai số không dùng biến trung gian.
var a = 5,
  b = 7;
a = a + b;
b = a - b;
a = a - b;

console.log(`a = ${a} , b = ${b}`);

// Bai 2 : Thực hiện phép toán.

var S;
S = 10 + 20 + 5 ** 10 / 2;
console.log(`S = ${S}`);

// Bai 3 : Tìm số lớn nhất .
var a = 3,
  b = 4,
  c = 5;
var max = a;
if (max < b) {
  max = b;
}
if (max < c) {
  max = c;
}

console.log(`Số lớn nhất = ${max}`);

//Bai 4 : Xét cùng dấu , trái dấu.

var a = -5;
b = 5;
if (a * b < 0) {
  console.log(`a = ${a} và b = ${b} là hai số trái dấu.`);
}
if (a * b > 0) {
  console.log(`a = ${a} và b = ${b} là hai số cùng dấu.`);
}

//Bai 5 : Sắp xếp tăng dần.

var a = 5,
  b = -11,
  c = 11;
var tg;
if (a > b) {
  tg = a;
  a = b;
  b = tg;
}

if (a > c) {
  tg = a;
  a = c;
  c = tg;
}

if (b > c) {
  tg = b;
  b = c;
  c = tg;
}

console.log(`Thứ tự tăng dần là: ${a}, ${b}, ${c}`);
