eventHandler = function( event ) {
    if ($ ("#instructions").val().toLowerCase().indexOf("vegan") != -1) {
        //Notes contain the word vegan
        alert("Cheesecake contains dairy");
    }
    else {
        //Notes don't contain vegan
        $ ("#bigform").removeAttr("style").hide();
        $ ("#thanksScreen").show();
        $ ("#theTopping").html("Topping: " + $("input[name='topping']:checked").val());
        $ ("#theQuantity").html("Quantity: " + $("#quantity").val());
        $ ("#theInstructions").html("Notes: " + $ ("#instructions").val());
    }
}

$(function() {
    $ ("#orderButton").click(eventHandler);
});    