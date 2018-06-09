// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function() {
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
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){   //.parent gives us the li
        $(this).remove();  
    });    
    event.stopPropagation();    //prevents it from bubbling up to parent's elements(jquery method)
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");    //clear the inputbox after enter
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")  //append will take li and add to ul
    }
});  