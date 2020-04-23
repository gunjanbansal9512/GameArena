var data=[];
$(document).ready(function() {
    data = $.getJSON("http://starlord.hackerearth.com/gamesext", function(data) {
        //  console.log(data);
        //$('#gameData').append(renderData);
        for (var i = 0; i < data.length; i++) {
            var gameObj = getCardRender(data[i]);
            $('#gameData').append(gameObj);
        }

    });



});
// Search
function getCardRender(gameObj)
{
    var row = '  <div class="col-sm-3" id="cards" style="margin-top:8px " ><div class="card card-body h-100" style="width: 18rem;">';
    row += ' <img class="card-img-top" src="image.jpg" alt="Card image cap">';
    row += '<div class="card-body">';
    row += '<h5 class="card-title" id="title">Title : ' +gameObj["title"] + '</h5>';
    row +='<p class="card-subtitle mb-2">Platform : ' +gameObj["platform"] + '</p>';
    row+='<p class="card-text">Score : ' + gameObj["score"] + '</p>';
    row+='<p class="card-text">Genre : ' + gameObj["genre"] + '</p>';
    row+='<p class="card-text">Editiors Choice : ' + gameObj["editors_choice"] + '</p>';
    row+='<p class="card-text">Release Year : ' +gameObj["release_year"] + '</p>';
    row += '<a class="card-link" href="#">URL : ' + gameObj["url"] + '</p>';
    row+='</div></div></div>';
   
    return row;

   // $('#gameData').append(renderData);
}
$("#searchBtn").on("click", function() {
    $('#gameData').empty(); //clean
    var searchText = $("#search").val().trim();
   
    let restJsondata = data.responseJSON;
    var filteredData = [];
    for (var i = 0; i < restJsondata.length; i++) {
        var title = restJsondata[i]['title'];
        if (title) {
            if (title.toString().toLowerCase().search(searchText.toLowerCase())==0) {
               // console.log(restJsondata[i]);
               var gameObj = getCardRender(restJsondata[i]);
               $('#gameData').append(gameObj);
            }
        }

    }
});
// Low to high
$("#sortD").on("click", function() {
    $('#gameData').empty();
    let restJsondata = data.responseJSON;
   
    restJsondata.sort((a, b) => Number(a.score) - Number(b.score));
// console.log("ascending", restJsondata);
for (var i = 0; i < restJsondata.length; i++) {
    var gameObj = getCardRender(restJsondata[i]);
    $('#gameData').append(gameObj);
}
}
);
// High to low
$("#sortA").on("click", function() {
    $('#gameData').empty();
    let restJsondata = data.responseJSON;
   
    restJsondata.sort((a, b) => Number(b.score) - Number(a.score));
// console.log("desc", restJsondata);
for (var i = 0; i < restJsondata.length; i++) {
    var gameObj = getCardRender(restJsondata[i]);
    $('#gameData').append(gameObj);
}
}
);
