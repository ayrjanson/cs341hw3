$(function(){
    $("#dropdown").hover(function() {
        $(this).attr('size', 4);
    },
    function() {
        $(this).attr('size', 1);
    });
});