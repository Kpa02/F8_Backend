// Bai 1 : Tinh tien taxi.
var tien,
  soKm = 200;
if (soKm <= 0) {
  console.log(`Só km phải > 0`);
} else if (soKm <= 1) {
  tien = soKm * 15000;
} else if (soKm <= 5) {
  tien = soKm * 13500;
} else if (soKm <= 120) {
  tien = soKm * 11000;
} else {
  tien = soKm * 11000 - 0.1 * (soKm * 11000);
}
console.log(`So tien taxi = ${tien.toFixed(2)} VNĐ`);

// Bai 2: Tinh tien điện ;

var kWh = 66.3,
  TienDien;
if (kWh <= 0) {
  console.log(`Số kw điện phải > 0`);
} else if (kWh <= 50) {
  TienDien = kWh * 1.678;
} else if (kWh <= 100) {
  TienDien = (kWh - 50) * 1.734 + kWh * 1.678;
} else if (kWh <= 200) {
  TienDien = (kWh - 100) * 2.014 + 50 * (1.734 + 1.678);
} else if (kWh <= 300) {
  TienDien = kWh * 2.536;
} else if (kWh <= 400) {
  TienDien = kWh * 2.834;
} else {
  TienDien = kWh * 2.927;
}
console.log(`Số tiền điện phải trả = ${TienDien.toFixed(2)} VNĐ`);

// Tính gia thừa của 1 số nguyên N .

var n = 3;
gthua = 1;
if (Number.isInteger(n) && n > 0) {
  for (var i = 1; i <= n; i++) {
    gthua *= i;
  }
  console.log(`${n}! = ${gthua}`);
} else {
  console.log(`Nhập lại n là số nguyên > 0`);
}

// Kiểm tra số nguyên tố.

var n = 8,
  cout = 0;
if (Number.isInteger(n) && n > 0) {
  for (var i = 1; i <= n; i++) {
    if (n % i == 0) {
      cout += 1;
    }
  }
  if (dem == 2) {
    console.log(`${n} là số nguyên tố`);
  } else {
    console.log(`${n} không là nguyên tố`);
  }
} else {
  console.log(`Mời nhập lại n là số nguyên > 0`);
}
