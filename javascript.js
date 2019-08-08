var guilherme = {id: 'guilherme'};
var filipe = {id: 'filipe'};
var ricardo = {id: 'ricardo'};
var maria = {id: 'maria'};
var felipe = {id: 'felipe'};

var userArray = [guilherme, filipe, ricardo, maria, felipe];
var event = {id: 1, rolelist: [{user: maria, role: "comida"}]};
window.localStorage.setItem('event', JSON.stringify(event) );

$(document).ready(function(){
    fetchroles();
    console.log(event)
    $(document).on('click','#add-role-btn', function(){
        
        addRole();
    })
    
    
});

function fetchroles(){
    var rolestable = $('#role-table');
    var row;
    var listtoiterate = JSON.parse(window.localStorage.getItem('event'));
    listtoiterate.rolelist.forEach(function (element) {

         row =  "<tr>" +
        "<td>" + element.role +"</td>" +
        "<td>" + element.user.id + "</td>" +
        "</tr>";
 
        $(row).appendTo(rolestable);
 
    });
}


function addRole(){

    

        var name = $('#userNameInput').val();
        var roleValue = $('#roleNameInput').val();
        userArray.forEach(element => {
        if( name === element.id ){
          
            var obj = {user: element, role: roleValue};
            console.log(obj);
            var addtoevent = JSON.parse(window.localStorage.getItem('event'));
            event.rolelist.push(obj);
            window.localStorage.removeItem('event')

            window.localStorage.setItem('event', JSON.stringify(addtoevent))
            console.log(event.rolelist);          
        }
    });
    
    //window.location.reload();
}