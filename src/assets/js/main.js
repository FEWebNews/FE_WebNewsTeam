// Cần thêm thư viện x2js vào trang html sử dụng
// <script src="https://cdnjs.cloudflare.com/ajax/libs/x2js/1.2.0/xml2json.min.js"></script>

function getRSS(url) {
  var x2js = new X2JS();
  fetch(url)
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      var jsonObj = x2js.xml_str2json(data);
      let startImg, endImg, startDes, endDes, images, description;
      var tag = document.getElementById("container-content");
      for (let i = 0; i < jsonObj.rss.channel.item.length; i++) {
        startImg = jsonObj.rss.channel.item[i].description.indexOf("<img");
        endImg = jsonObj.rss.channel.item[i].description.indexOf("</a>");
        startDes = jsonObj.rss.channel.item[i].description.indexOf("</a>");
        endDes = jsonObj.rss.channel.item[i].description.indexOf("]]");
        images = jsonObj.rss.channel.item[i].description.slice(startImg, endImg);
        description = jsonObj.rss.channel.item[i].description.slice(startDes, endDes);
        tag.innerHTML += `<a href="testlink/${i}">${jsonObj.rss.channel.item[i].title}</a>`;
        tag.innerHTML += `<div>${images}${description}</div>`;
      }
    });
}

getRSS("https://vnexpress.net/rss/tin-moi-nhat.rss");
