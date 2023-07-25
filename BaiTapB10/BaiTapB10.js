//Bai 1
var Sum = function (...args) {
  var result = 0;
  for (var i = 0; i < args.length; i++) {
    if (typeof args[i] !== "number") {
      throw new Error("Invalid input data!!");
    } else {
      result += args[i];
    }
  }

  return result;
};

try {
  var result = Sum(1, 2, 3, 4, 5, 6, 7);
  console.log(result);
} catch (error) {
  console.log(error.message);
}

//Bai 2
function getFile() {
  return new Promise(function (res) {
    setTimeout(() => {
      res("File đã được mở");
    }, 2000);
  });
}
function getReadfile() {
  return new Promise(function (res) {
    setTimeout(() => {
      res("F8 - Học lập trình để đi làm");
    }, 1000);
  });
}
function getClosefile() {
  return new Promise(function (res) {
    setTimeout(() => {
      res("File đã đóng");
    }, 1000);
  });
}
getFile()
  .then(function (response) {
    console.log(response);
    return getReadfile();
  })
  .then(function (response) {
    console.log(response);
    return getClosefile();
  })
  .then(function (response) {
    console.log(response);
  });
