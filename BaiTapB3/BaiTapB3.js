//B1: Hiển thị số lẻ và chẵn

var n = 10,
  evenNum = "",
  oddNum = "";
if (Number.isInteger(n) && n > 0) {
  for (var i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      evenNum += i;
      evenNum += ", ";
    } else {
      oddNum += i;
      oddNum += ", ";
    }
  }
  console.log(`Số Chẵn : ${evenNum}`);
  console.log(`Số Lẻ : ${oddNum}`);
} else {
  console.log(`Mời nhập số nguyên > 0`);
}

//B2: Tinh Gía trị biểu thức.
var total = 0;
function value(k) {
  for (var i = 1; i <= k; i++) {
    total += i * (i + 1);
  }
  return total;
}

console.log(`S = ${value(3)}`);

// B3: Tính tổng chẵn lẻ .
var a = 5,
  b = 9,
  tongChan = 0,
  tongLe = 0;
if (Number.isInteger(a) && Number.isInteger(b) && a > 0 && b > 0) {
  for (var i = a; i <= b; i++) {
    if (i % 2 === 0) {
      tongChan += i;
    } else {
      tongLe += i;
    }
  }
  console.log(`Tổng Số Chẵn : ${tongChan}`);
  console.log(`Tổng Số Lẻ : ${tongLe}`);
} else {
  console.log(`Mời nhập a , b là số nguyên lớn hơn 0`);
}

//B4 : Viết chương trình tìm số nguyên tố
var h = 10;

function isPrime(h) {
  if (h === 1) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(h); i++) {
    if (h % i === 0) {
      return false;
    }
  }
  return true;
}

if (Number.isInteger(h) && h > 0) {
  if (isPrime(h)) {
    console.log(`${h} là số nguyên tố`);
  } else {
    console.log(`${h} không phải là số nguyên tố`);
  }
} else {
  console.log("Mời nhập lại số nguyên lớn hơn 0");
}

//B5 : Tính tổng không dùng vòng lặp.

function getValue(n) {
  var s = 0;
  if (n >= 1) {
    s = 1 / n;
    s = s + getValue(n - 1);
  }
  return s;
}

console.log("s là", getValue(5).toFixed(2));
