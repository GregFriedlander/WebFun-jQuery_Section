$(document).ready(function(){
    var pAdded = false;
    $("#firstdiv button").click(function(){
        $("#firstdiv P").css("color","red");
    });
    $("#seconddiv button").hover(function(){
        $("#seconddiv img").hide("slow");
        $("#seconddiv img").show("fast");
    });
    $("#thirddiv button").click(function(){
        $("#thirddiv img").toggle("picture");
    });
    $("#fourthdiv button").click(function(){
        $("#fourthdiv img").slideDown();
    });
    $("#fifthdiv button").click(function(){
        $("#fifthdiv img").slideUp();
    });
    $("#sixthdiv button").click(function(){
        $("#sixthdiv img").fadeIn();
    });
    $("#seventhdiv button").click(function(){
        $("#seventhdiv h2").addClass("big")
    });
    $("#samson a").hover(function(){
        if(!pAdded){
            $("#samson a").before("Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.");
            pAdded = true;
        } 
    });
    $("#hodor button").click(function(){
        $("#hodor p").append("   What?!?!");
    });
    $("#pizza h1").click(function(){
        $("#pizza h1").html("Pizza");
    });
    $("#hats button").click(function(){
        var test= $("#hats img").attr("alt");
        $("#hats img").attr("src",test);

    });
    $("#input input").click(function(){
        $("input input").val("Test")
    })
})