 eventHandler = function( event ) {
    if($ ("#instructions").val().toLowerCase().indexOf("vegan") != -1) {
        alert("WARNING! ALL CHEESECAKES CONTAIN DAIRY PRODUCTS! ");
      }
      else {
        $ ("#bigform").removeAttr("style").hide();
        $ ("#thanksScreen").show();
        $ ("#topping").html("Topping: " + $ ("input[name='Topping']:checked").val());
        $ ("#quantity").html("Quantity: " + $ ("#theQuantity").val());
        $ ("#instructions").html("Notes: " + $ ("#notes").val());
      }
}

$(function() {
    $("#orderButton").click(eventHandler);
});