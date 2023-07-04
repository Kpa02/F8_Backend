// Bai 1
var n = 10;
function fibonaci(n) {
  if (n <= 0) return;
  fibonaci(n - 1);
  var Num = fibonaciNumber(n);
  console.log(Num);
}

function fibonaciNumber(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonaciNumber(n - 1) + fibonaciNumber(n - 2);
}

if (Number.isInteger(n)) {
  fibonaci(n);
} else {
  console.log("Nhập n là số nguyên");
}

// B2
function reverseNumber(number) {
  var reversedNumber = 0;

  while (number !== 0) {
    reversedNumber = reversedNumber * 10 + (number % 10);
    number = Math.floor(number / 10);
  }

  return reversedNumber;
}

var number = 12345;
var reversedNumber = reverseNumber(number);
console.log(reversedNumber);

// B3

function convertNumberToWords(n) {
  if (n === 0) return "không";

  var onesWords = "";
  var tensWords = "";
  var hundredsWords = "";
  var thousandsWords = "";

  var ones = n % 10;
  if (ones > 0) {
    switch (ones) {
      case 1:
        onesWords = "một";
        break;
      case 2:
        onesWords = "hai";
        break;
      case 3:
        onesWords = "ba";
        break;
      case 4:
        onesWords = "bốn";
        break;
      case 5:
        onesWords = "năm";
        break;
      case 6:
        onesWords = "sáu";
        break;
      case 7:
        onesWords = "bảy";
        break;
      case 8:
        onesWords = "tám";
        break;
      case 9:
        onesWords = "chín";
        break;
    }
  }

  var tens = Math.floor((n % 100) / 10);

  if (tens >= 0) {
    switch (tens) {
      case 0:
        tensWords = "linh";
      case 1:
        tensWords = "mười";
        break;
      case 2:
        tensWords = "hai mươi";
        break;
      case 3:
        tensWords = "ba mươi";
        break;
      case 4:
        tensWords = "bốn mươi";
        break;
      case 5:
        tensWords = "năm mươi";
        break;
      case 6:
        tensWords = "sáu mươi";
        break;
      case 7:
        tensWords = "bảy mươi";
        break;
      case 8:
        tensWords = "tám mươi";
        break;
      case 9:
        tensWords = "chín mươi";
        break;
    }
  }

  var hundreds = Math.floor((n % 1000) / 100);

  if (hundreds > 0) {
    switch (hundreds) {
      case 1:
        hundredsWords = "một trăm";
        break;
      case 2:
        hundredsWords = "hai trăm";
        break;
      case 3:
        hundredsWords = "ba trăm";
        break;
      case 4:
        hundredsWords = "bốn trăm";
        break;
      case 5:
        hundredsWords = "năm trăm";
        break;
      case 6:
        hundredsWords = "sáu trăm";
        break;
      case 7:
        hundredsWords = "bảy trăm";
        break;
      case 8:
        hundredsWords = "tám trăm";
        break;
      case 9:
        hundredsWords = "chín trăm";
        break;
    }
  }

  var thousands = Math.floor(n / 1000);

  if (thousands > 0) {
    switch (thousands) {
      case 1:
        thousandsWords = "một nghìn";
        break;
      case 2:
        thousandsWords = "hai nghìn";
        break;
      case 3:
        thousandsWords = "ba nghìn";
        break;
      case 4:
        thousandsWords = "bốn nghìn";
        break;
      case 5:
        thousandsWords = "năm nghìn";
        break;
      case 6:
        thousandsWords = "sáu nghìn";
        break;
      case 7:
        thousandsWords = "bảy nghìn";
        break;
      case 8:
        thousandsWords = "tám nghìn";
        break;
      case 9:
        thousandsWords = "chín nghìn";
        break;
    }
  }

  var words = `${thousandsWords} ${hundredsWords} ${tensWords} ${onesWords}`;
  return words;
}

var n = 6812;
if (Number.isInteger(n)) {
  if (n >= 0 && n <= 9999) {
    console.log(convertNumberToWords(n));
  } else {
    console.log("Vui lòng nhận 0<= n <=9999");
  }
} else {
  console.log("Nhập n là số nguyên");
}
