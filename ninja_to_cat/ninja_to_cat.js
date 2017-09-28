$(document).ready(function(){
    $("img").click(function(){
        var x = $(this).attr("alt");
        var y = $(this).attr("src");
        $(this).attr("src", x);
        $(this).attr("alt", y);
    });
})