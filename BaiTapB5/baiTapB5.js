var content =
  "Giữa mênh mang đồi hoa cỏ lau chỉ tiếc anh luôn là người đến sau . Một cuộc tình anh vẫn cố giấu giữ riêng anh nỗi sầu";
var keyword = content.split(" ");
var color = function (n) {
  if (n === keyword.length) {
    n = 0;
  }
  keyword[n] = "<span>" + keyword[n] + "</span>";
  if (n >= 1) {
    keyword[n - 1] = keyword[n - 1].replace("<span></span>", "");
  }
  if (n === 0) {
    keyword[keyword.length - 1] = keyword[keyword.length - 1].replace(
      "<span></span>",
      ""
    );
  }
  document.getElementById("id").innerHTML = keyword.join(" ");
  console.log(keyword);
  setTimeout(() => {
    color(n + 1);
  }, 500);
};
color(0);
