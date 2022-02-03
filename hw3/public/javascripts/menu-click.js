//CS 341 Anna Yrjanson
$(function(){
    $("#selectMonth").hover(function() {
        $(this).attr('size', 4);
    },
    
    function() {
        $(this).attr('size', 1);
    });
});