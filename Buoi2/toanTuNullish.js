// var a;
// a = null;
// console.log(a);

// null , underfined trong tt 3 ngôi
// var a;
// var b = a !== undefined && a !== null ? a : "ko có gì";
// console.log(b);

// toán tử && ( khi đk đúng sẽ thực hiện đến sau dấu &&).

var a = 1;
//var show = a >= 1 && "F8 ";
var show = a && "F8 "; //(trường hợp này áp dụng truthy và falsy).

console.log(show);

// truthy: Các trường hợp khác falsy.
// falsy : false , 0 , "" ,NaN , underfined , null. (sẽ hiển thị khi gán giá trị trong Toán Tử &&);
