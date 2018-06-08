// Check Off Specific Todos By Clicking
$("li").click(function() {
    $(this).toggleClass("completed");

        // //if li is grey
        // if ($(this).css("color") === "rgb(128, 128, 128)") {
        //     //turn it black
        //     $(this).css({
        //         color: "black",
        //         textDecoration: "none"
        //     });
        // }
        // //else
        // else {
        //      //turn it grey
        //     $(this).css({
        //         color: "grey",
        //         textDecoration: "line-through"
        //     });
        // }
});

//Click on X to delete Todo
$("span").click(function(event){
    $(this).parent().fadeOut(500,function(){   //.parent gives us the li
        $(this).remove();  
    });    
    event.stopPropagation();    //prevents it from bubbling up to parent's elements(jquery method)
});

