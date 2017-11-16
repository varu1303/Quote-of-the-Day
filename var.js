$(document).ready(function(){
    
    $.get( "https://quotes.rest/qod?category=inspire", function( data ) {
            $(".quote").text(data.contents.quotes[0].quote);
        });
});