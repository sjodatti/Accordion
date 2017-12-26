$(document).ready(function(){
    $("ul li p").hide();

    $("ul li a").on("click", function(){
        if($(this).parent().find("p").is(":visible") !== true){
            $("ul li p").slideUp();
            $(this).parent().find("p").eq(0).slideDown();
        }
        return false;
    });

    $("#button").on("click", function(){
        var dataTop = parseInt($(this).attr('data-top'))+200;
        $(this).attr('data-top',dataTop);
        $(this).css("margin-top", dataTop+'px');
    });

})