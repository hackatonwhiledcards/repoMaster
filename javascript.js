$(document).ready(function(){
    console.log(event)

    fetchRoles();
    $(document).on('click','#add-event-btn', function(){
        
        addEvent();
    })

    $(document).on('click','#add-role-btn', function(){
        
        addRole();
    })

    $(document).on('click', '#add-item-btn', function(){
        addItem();
    })
    
    
});

 function fetchRoles(){
    $.ajax({
        url: 'http://192.168.248.200:3000/roles',
        type: 'GET',
        data: JSON.parse(response),
        async: true,
        sucess: function(data){ 
            populateTable(data);
        },
        error: function(){
            console.log('you are dumb');
        }

    })
 }

function populateTable(data){

    var itemtable = $('#role-table');
    var row;
    data.forEach(function(element){

        alert("hey")
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
        sucess: function(){ window.location.reload();
        },
        error: function(){
            console.log('you are dumb');
        }

    })


}





function addRole(){

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
        sucess: function(){ fetchRoles();
        },
        error: function(){
            console.log('you are dumb');
        }

    })
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
