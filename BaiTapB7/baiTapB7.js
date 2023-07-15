//Bai1
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
var arrC = arrA.reduce(function (prev, curr) {
  if (arrB.includes(curr)) {
    prev.push(curr);
  }
  return prev;
}, []);
console.log(arrC);

// Bai 2
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
function GetFlatten(array) {
  return array.reduce(function (prev, cur) {
    return prev.concat(Array.isArray(cur) ? GetFlatten(cur) : cur);
  }, []);
}
console.log(GetFlatten(arr));

// Bai 3

var arr = [
  ["a", 1, true],
  ["b", 2, false],
];

function getElement(arr) {
  var result = [];
  var typeMap = {};
  flattenArr = GetFlatten(arr);
  flattenArr.forEach(function (value) {
    var type = typeof value;

    if (typeMap[type] !== undefined) {
      result[typeMap[type]].push(value);
    } else {
      var arr1 = [value];
      result.push(arr1);
      typeMap[type] = result.length - 1;
    }
  });
  return result;
}
console.log(getElement(arr));
