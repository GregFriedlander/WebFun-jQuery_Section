$(document).ready(function(){
    $(".submit").click(function(){
        $("table").append("<tr><td>" + $("#firstname").val() + "</td>, <td>" + $("#lastname").val() + "</td>, <td>" + $("#email").val() + "</td>, <td>" + $("#contact").val() + "</td></tr>");
        $("#firstname").val("");
        $("#lastname").val("");
        $("#email").val("");
        $("#contact").val("");
        return false;
    });

});