$(document).ready(function () {
    
    $("img").hover(function(){
        $(this).attr("temp", $(this).attr("src"));
        $(this).attr("src", $(this).attr("other-src"));
        $(this).attr("other-src", $(this).attr("temp"));
        $(this).removeAttr("temp")
    }, function(){
        $(this).attr("temp", $(this).attr("src"));
        $(this).attr("src", $(this).attr("other-src"));
        $(this).attr("other-src", $(this).attr("temp"));
        $(this).removeAttr("temp")
    })

    $("img").hover(function(){}, function(){})


});