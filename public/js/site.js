
$(document).ready(function(){
    $.getJSON("/data",function(d){
        alert(JSON.stringify);
        $("#name".text(d.name));
    })
})