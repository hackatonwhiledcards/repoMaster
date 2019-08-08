$(document).ready(function(){
    fetchroles();
    console.log(event)
    $(document).on('click','#add-role-btn', function(){
        
        addRole();
    })
    
    
});
function fetchroles(){
    var listtoiterate = JSON.parse(window.localStorage.getItem('event'));
    listtoiterate.rolelist.forEach(function (element) {
    
 
    });
}
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
            /*var obj = {user: element, role: roleValue};
            console.log(obj);
            var addtoevent = JSON.parse(window.localStorage.getItem('event'));
            event.rolelist.push(obj);
            window.localStorage.removeItem('event')
            window.localStorage.setItem('event', JSON.stringify(addtoevent))
            console.log(event.rolelist);     */     
        }
   // });
    
    //window.location.reload();
//}
