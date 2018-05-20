$.ajax({
  url:
    'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=dcd9f7f1c57f4238b41c92b2f8523fb7',
  method: "GET",
  error: function() {
    console.log("Something Wents Wrong..!");
  },
  success: function(data) {
    processData(data);
  }
});

function processData(data) {
  var articleItems = [];

  for (var i = 0; i < data.articles.length; i++) {
    var author = data.articles[i].author;
    var title = data.articles[i].title;
    var description = data.articles[i].description;
    var artUrl = data.articles[i].url;

    var $title = $(
      "<a href=" + artUrl + '><div class="title">' + title + "</div ></a>"
    );
    var $description = $(
      "<a href=" +
        artUrl +
        '><div class="description">' +
        description +
        "</div ></a>"
    );
    
     var $author = $('<div class="author">Author: ' + author + "</div >");
     

    $(".wrapper").append($title, $description,$author);
    console.log(artUrl);
  }
}