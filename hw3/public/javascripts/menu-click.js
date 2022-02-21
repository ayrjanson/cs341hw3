//CS 341 Anna Yrjanson
$(document).ready(function() {
    $(".monthOption").click(function() {
        $.post("orders", {"month":$(this).html()}, function(data,status) {
            $("#cherryNumber").html(data.cherry+" cherry");
            $("#chocolateNumber").html(data.chocolate+" chocolate");
            $("#plainNumber").html(data.plain+" plain");
        });
    $(this).attr('size', 4);
    });
});