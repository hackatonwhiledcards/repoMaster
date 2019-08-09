$(document).ready(function(){
   
    $(document).on('click', '#add-item-btn', function(){
        addItem();
    })
    
    

});

function addItem(){
    var item = $('#addItem').val();
    var price = $('#addPrice').val();
    

      var itemtable = $('#shopping-list');
var row;

     row =  "<tr>" + "<td>" + 'guilherme' +"</td>" +
     "<td>" + 'shopper' + "</td>" +
    "<td>" + item +"</td>" +
    "<td>" + price+ "</td>" +
    "</tr>";

    $(row).appendTo(itemtable);

}