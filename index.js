$(document).ready( function () {
    var data = $.getJSON("http://starlord.hackerearth.com/gamesext", function(data) {
     //  console.log(data);
       for(var i=0;i<data.length;i++){
        // console.log(data[i]);
        var row = ' <div class="card" style="width: 18rem; display:inline-block;  margin:auto;  ">';
        row+=' <img class="card-img-top" src="image.jpg" alt="Card image cap">';
        row+='<div class="card-body">';
        row+=  '<h5 class="card-title" id="title">Title : '+data[i]["title"]+'</h5>';
       row+= '<p class="card-text">URL : '+data[i]["url"]+'</p><p class="card-text">Platform : '+data[i]["platform"]+'</p><p class="card-text">Score : '+data[i]["score"]+'</p><p class="card-text">Genre : '+data[i]["genre"]+'</p><p class="card-text">Editiors Choice : '+data[i][ "editors_choice"]+'</p><p class="card-text">Release Year : '+data[i][ "release_year"]+'</p>';
  $('#game-data').append(row);
    }
    
    });

    
});