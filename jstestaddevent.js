var users = [{name: "guilherme"}, {name: "filipe"}, {name: "ricardo"}];
var roles = [{role: "comida", user: users[0]}];

var JSONusers = JSON.stringify(users);
var JSONroles = JSON.stringify(roles);
 
localStorage.setItem('users', JSONusers);
localStorage.setItem('roles', JSONroles)

$(document).ready(function (){

    populateRoleTable();
    addRole();
})

function populateRoleTable(){

    var deserializedRoles = JSON.parse(localStorage.getItem('roles'));

    var table = $('#role-table');

    var row;

    deserializedRoles.forEach( function(element){

        row = "<tr>" +
            "<td>" + element.role + "</td>" + 
            "<td>" + element.user.name + "</td>" + 
            "</tr>";

        $(row).appendTo(table);
    })
}

function addRole(){

    var deserializedRoles = JSON.parse(localStorage.getItem('roles'));
    var deserializedUsers = JSON.parse(localStorage.getItem('users'));

    $(document).on('click', '#add-role-btn', function(){

        deserializedRoles.push({role: "bebida", user: deserializedUsers[1]})

        localStorage.setItem('roles', JSON.stringify(deserializedRoles));

        window.location.reload();
    })
    

}