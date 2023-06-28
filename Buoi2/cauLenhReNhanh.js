// Cau lệnh rẽ nhánh if else

var age = 18;
if (age >= 18) {
  console.log(`Đã đủ tuổi`);
}

var a = 5;
if (a < 5) {
  console.log(`Số âm`);
} else if ((a = 0)) {
  console.log(`a = 0`);
} else {
  console.log(`a > 0`);
}

// Bài Tập Tính Lương :
var LuongCoBan = 5000000,
  thue;
var LuongThucNhan;

if (typeof LuongCoBan === "undefined") {
  console.log(`Vui long nhap luong co ban`);
} else if (LuongCoBan <= 0) {
  console.log(`Lương Cơ Bản > 0 , Vui lòng nhập lại`);
} else if (LuongCoBan <= 5000000) {
  console.log(`Thuế = 5% `);
  thue = 0.05;
} else if (LuongCoBan <= 10000000) {
  console.log(`Thuế = 7% `);
  thue = 0.07;
} else {
  console.log(`Thuế = 10% `);
  thue = 0.1;
}
console.log(`Luong Thuc Nhan = ${LuongCoBan - thue * LuongCoBan}`);

// Cau Lenh Switch Case
/*
 - Chi ap dung bieu thuc logic ===
*/

var action = "kien";
if (action === "create" || action === "add" || action === "insert") {
  console.log(`Them`);
} else if (action === "update" || action === "edit") {
  console.log(`Sua`);
} else if (action === "delete" || action === "destroy" || action === "remove") {
  console.log(`Xoa`);
} else {
  console.log(`xem`);
}

// Bai Tap cho 1 thang > thang do co bao nhiau ngay

var thang = 2.5;
var nam = 2023;
// if (thang % 1 != 0 || nam % 1 != 0) {
//   console.log(`So nam va thang phai la so nguyen . Vui long nhap lai`);
// } else if (thang < 1 && thang > 12) {
//   console.log(`1<= Thang <= 12`);
if (Number.isInteger(thang, nam)) {
  console.log(`So nguyen`);
  switch (thang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
    case 11:
      console.log(`Thang co 31 ngay`);
      break;
    case 4:
    case 6:
    case 8:
    case 10:
    case 12:
      console.log(`Thang nay co 30 ngay`);
      break;
    case 2:
      if (nam % 4 === 0) {
        thang = 29;
      } else {
        thang = 28;
      }
      console.log(`Thang nay co ${thang} ngay`);
      break;
  }
} else {
  console.log("Du lieu khong hop le");
}
