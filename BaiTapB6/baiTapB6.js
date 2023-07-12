//Bài 01

var Num = [6, 9, -10, 12, 0, 14, 20, -100];

var findMax = function (arr) {
  var max = arr[0],
    index;
  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] >= max) {
      max = arr[i];
      index = i;
    }
  }
  return `Số lớn nhất là ${max} tại vị trí thứ ${index}`;
};

var findMin = function (arr) {
  var min = arr[0],
    index;
  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < min) {
      min = arr[i];
      index = i;
    }
  }
  return `Số nhỏ nhất là ${min} tại vị trí thứ${index}`;
};

console.log(findMax(Num));
console.log(findMin(Num));

//Bài 02
var Num1 = [3, -3, 8, 7];

var isPrime = function (number) {
  if (number < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

var averagePrimeNum = function (arr) {
  var sum = 0,
    count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      count++;
      sum += arr[i];
    }
  }

  if (count === 0) {
    return "Không có số nguyên tố";
  }
  return sum / count;
};

console.log(averagePrimeNum(Num1));

//Bài 03

var arr = [-1, 1, 8, 6, 8];

var remove = function (arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) newArr[newArr.length] = arr[i];
  }
  return newArr;
};

console.log(remove(arr));

//Bài 04

var arr1 = [3, -14, 1, 9, -8, 10];
var num = 4;
var insertIndex = 2;

var sortArr = function (arr) {
  return arr.sort((a, b) => a - b);
};

var insertNum = function (arr, num, index) {
  if (index === 0) {
    arr.unshift(num);
  } else if (index >= arr.length) {
    arr.push(num);
  } else {
    var leftSliceArr = arr.slice(0, index);
    var rightSliceArr = arr.slice(index);
    arr = [];
    arr = arr.concat(leftSliceArr, num, rightSliceArr);
  }
  return sortArr(arr);
};

console.log(arr1);
console.log(insertNum(arr1, num, insertIndex));
