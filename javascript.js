$(document).ready(function(){
    console.log(event)

    fetchRoles();
    $(document).on('click','#add-event-btn', function(){
        
        addEvent();
    })

    addRole();

    $(document).on('click', '#add-item-btn', function(){
        addItem();
    })
});

    var money = 0;

function fetchRoles(){

    $.ajax({
        
        url: 'http://192.168.248.200:3000/roles',
        type: 'GET',
        async: true,
        success: function(response){ 
            populateTable(response);
        },
        error: function(){
            console.log('you are dumb');
        }
    })
}

function populateTable(data){
    var itemtable = $('#roleTableBody');
    var row;
    data.forEach(function(element){

         row =  "<tr>" + 
         "<td>" + element.name +"</td>" +
         "<td>" + element.user + "</td>" +
        "</tr>";

        $(row).appendTo(itemtable);
    })
}

function addEvent(){
    var event = {
        name: $('#eventName').val(),
        place: $('#eventLocation').val(),
        guests: $('#guestsnumber').val()
    }

    $.ajax({
        url: 'http://192.168.248.200:3000/events',
        type: 'POST',
        data: JSON.stringify(event),
        async: true,
        contentType: 'application/json',
        success: function(){ window.location.reload();
        },
        error: function(){
            console.log('you are dumb');
        }

    })


}





function addRole(){

    $('#add-role-btn').click(function(event){
        

    var role = {
        event: $('#eventName').val(),
        name: $('#roleNameInput').val(),
        user: $('#userNameInput').val()
    }

    $.ajax({
        url: 'http://192.168.248.200:3000/roles',
        type: 'POST',
        data: JSON.stringify(role),
        async: true,
        contentType: 'application/json',
        success: function(){
            emptyTable();
        fetchRoles();
        },
        error: function(){
            console.log('you are dumb');
        }

    })
});
}


        function emptyTable() {
    $('#roleTableBody').empty();
 }
    
        function addItem(){

            var itemTable = $('#shopping-list-items');
            var row;

            row =  "<tr>" + 
         "<td>" + 'Filipe' +"</td>" +
         "<td>" + 'Party Master' + "</td>" +
         "<td>" + $('#addItem').val() +"</td>" +
         "<td>" + $('#addPrice').val() + " €</td>" +
         "<td>" + $('#notesInput').val() +"</td>" +
        "</tr>";
        $(row).appendTo(itemTable);

        var tempmoney = parseInt($('#addPrice').val());
        var anothertempmoney = money + tempmoney;
        
        var moneyTable = $('#totalMoney');
        moneyTable.empty();
        var moneyRow ='<tr> <td> Total:</td><td>' +  anothertempmoney + '</td> </tr>';
        $(moneyRow).appendTo(moneyTable);

        money = anothertempmoney;

        }





    /*var name = $('#userNameInput').val();
        var roleValue = $('#roleNameInput').val();

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

    }*/
