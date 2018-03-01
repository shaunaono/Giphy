var topic = ['baby goats', 'Goldbergs', 'weightlifting'];



$("button").on("click",function(){
    var giphy = $(this).attr("data-giphy");

    var queryURL = https://api.giphy.com/v1/gifs/search?api_key=nVJYo50IWxcARwdaRX8Vg2TObE1mCXsw&q=Goldbergs&limit=10&offset=0&rating=G&lang=en

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
        console.log(queryURL);

        console.log(response);
        var results = response.data;

        for (var i = 0; i < results.length; i++){

            var giphyDiv = $("<div>");
            var p = $("<p>").text("Rating: "+ results[i].rating);
            var giphyImage = $("<img>");

            giphyImage.attr("src", results[i].images.fixed_height.url);

            giphyDiv.append(p);
            giphyDiv.append(giphyImage);

            $("#gis-appear-here").prepend(giphyDiv);
        }
   
    });

});








