eventHandler = function( event ) {
    var monthVal = href.attr();  
    document.getElementById('selectMonth').style.display = 'table-column-group';
}

// Change of Display when Dropdown Clicked
$(function() {
    $("#selectMonth").click(eventHander); 
});