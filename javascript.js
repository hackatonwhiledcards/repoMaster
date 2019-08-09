$(document).ready(function(){
    console.log(event)
    $(document).on('click','#add-role-btn', function(){
        
        addRole();
    })
    $(document).on('click', '#add-item-btn', function(){
        addItem();
    })
    
    
});

function addRole(){
    
        var name = $('#userNameInput').val();
        var roleValue = $('#roleNameInput').val();
        /*userArray.forEach(element => {
        if( name === element.id ){|*/
          var rolestable = $('#role-table');
    var row;
    
         row =  "<tr>" +
        "<td>" + roleValue +"</td>" +
        "<td>" + name+ "</td>" +
        "</tr>";
 
        $(row).appendTo(rolestable);
       
        }
 

    function addItem(){
            var item = $('#addItem').val();
            var price = $('#addPrice').val();
            var notes = $('#notesInput').val();

            

              var itemtable = $('#shopping-list-items');
        var row;
        
             row =  "<tr>" + "<td>" + 'guilherme' +"</td>" +
             "<td>" + 'shopper' + "</td>" +
            "<td>" + item +"</td>" +
            "<td>" + price + "</td>" +
            "<td>" + notes + "</td>" +
            "</tr>";
     
            $(row).appendTo(itemtable);

        }
