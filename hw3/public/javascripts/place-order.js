 //CS 341 Anna Yrjanson
 eventHandler = function( event ) {
    if($ ("#instructions").val().toLowerCase().indexOf("vegan") != -1) {
        alert("WARNING! ALL CHEESECAKES CONTAIN DAIRY PRODUCTS! ");
      }
      else {
        $.post("neworder", {
          QUANTITY: $("#quantity option:selected").val(),
          TOPPING: $("input[name=topping]:checked").val(),
          NOTES:$("#instructions").val()
      });   
        
        $ ("#order").hide(); //Original: $ ("#order").removeAttr("style").hide();
        $ ("#stats").hide(); //Recent addition
        $ ("#lastOrder").hide();
        // Original: $ ("#stats").removeArrr("style").hide();
        $ ("#thanksScreen").show();
        $ ("#theTopping").html("Topping: " + $ ("input[name='topping']:checked").val());
        $ ("#theQuantity").html("Quantity: " + $ ("#quantity").val());
        $ ("#theInstructions").html("Notes: " + $ ("#instructions").val());
      }
}

$(function() {
    $("#orderButton").click(eventHandler);
});