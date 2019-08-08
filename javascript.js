

$(document).ready(function(){

    wire();
    $(document).on('click','#add-role-btn', function(){
        addRole();
    })
    
    fetchroles();
    
    

});

function wire(){
     guilherme = {id: 'guilherme'};
     filipe = {id: 'filipe'};
     ricardo = {id: 'ricardo'};
     maria = {id: 'maria'};
     felipe = {id: 'felipe'};

     userArray = [guilherme, filipe, ricardo, maria, felipe];

     rolelistArray= [{user: guilherme, role: "batata"}];

     event = {id: 1, rolelist: rolelistArray};

}
function fetchroles(){
    var rolestable = $('#role-table');
    var row;

    event.rolelist.forEach(function (element) {

         row =  "<tr>" +
        "<td>" + element.role +"</td>" +
        "<td>" + element.user.id + "</td>" +
        "</tr>";
 
        $(row).appendTo(rolestable);
 
    });
}


function addRole(){

    userArray.forEach(element => {

        var name = $('#userNameInput').val();
        var roleValue = $('#roleNameInput').val();

        if( name === element.id ){
        console.log("hey")
            var obj = {user: element, role: roleValue};
            console.log(rolelistArray);
            event[1].rolelist.push(obj);
        }
    });
    
//window.location.reload();
}