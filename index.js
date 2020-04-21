$(document).ready( function () {
    var data = $.getJSON("http://starlord.hackerearth.com/gamesext", function(data) {
       console.log(data);
    });
});