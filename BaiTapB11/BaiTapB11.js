var shortenUrl = async function (link) {
  var url = `https://api.shrtco.de/v2/shorten?url=${link}`;
  var res = await fetch(url);
  var posts = await res.json();
  if (posts.ok) {
    return posts.result.short_link;
  } else {
    return Promise.reject(posts.error);
  }
};

var link = "https://www.youtube.com/";
console.log("Link goc: " + link);

shortenUrl(link)
  .then((res) => console.log("Link rut gon: " + res))
  .catch((error) => console.log(error));
