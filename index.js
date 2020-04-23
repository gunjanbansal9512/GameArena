var data;
$(document).ready(function() {
    data = $.getJSON("http://starlord.hackerearth.com/gamesext", function(data) {
        //  console.log(data);
        for (var i = 0; i < data.length; i++) {
            // console.log(data[i]);
            var row = '  <div class="col-sm-4 py-2" id="cards" ><div class="card card-body h-100" style="width: 20rem; display:inline-block;  margin:auto;  ">';
            row += ' <img class="card-img-top" src="image.jpg" alt="Card image cap">';
            row += '<div class="card-body">';
            row += '<h5 class="card-title" id="title">Title : ' + data[i]["title"] + '</h5>';
            row += '<p class="card-text">URL : ' + data[i]["url"] + '</p><p class="card-text">Platform : ' + data[i]["platform"] + '</p><p class="card-text">Score : ' + data[i]["score"] + '</p><p class="card-text">Genre : ' + data[i]["genre"] + '</p><p class="card-text">Editiors Choice : ' + data[i]["editors_choice"] + '</p><p class="card-text">Release Year : ' + data[i]["release_year"] + '</p></div></div></div>';
            $('#gameData').append(row);
        }

    });



});


$("#searchBtn").on("click", function() {
    $('#gameData').empty(); //clean
    var searchText = $("#search").val().trim();
   
    let restJsondata = data.responseJSON;
    var filteredData = [];
    for (var i = 0; i < restJsondata.length; i++) {
        var title = restJsondata[i]['title'];
        if (title) {
            if (title.toString().toLowerCase().search(searchText.toLowerCase())==0) {
                console.log(restJsondata[i]);
                var row = '  <div class="col-sm-4 py-2" id="cards" ><div class="card card-body h-100" style="width: 20rem; display:inline-block;  margin:auto;  ">';
                row += ' <img class="card-img-top" src="image.jpg" alt="Card image cap">';
                row += '<div class="card-body">';
                row += '<h5 class="card-title" id="title">Title : ' + restJsondata[i]["title"] + '</h5>';
                row += '<p class="card-text">URL : ' + restJsondata[i]["url"] + '</p><p class="card-text">Platform : ' + restJsondata[i]["platform"] + '</p><p class="card-text">Score : ' + restJsondata[i]["score"] + '</p><p class="card-text">Genre : ' + restJsondata[i]["genre"] + '</p><p class="card-text">Editiors Choice : ' + restJsondata[i]["editors_choice"] + '</p><p class="card-text">Release Year : ' + restJsondata[i]["release_year"] + '</p></div></div></div>';
                $('#gameData').append(row);
            }
        }

    }
});
