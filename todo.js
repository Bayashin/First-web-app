var Todo,Level,Limit_d,Limit_t;
var num=0;
$(function() {
    $("#decision").click(make_list);
    $("#cancel").click(cancel_input);

function get_document(){
    Todo=document.getElementById("todo");
    Limit_d=document.getElementById("limit");
    Limit_t=document.getElementById("limit_time");
    Level=document.getElementById("level");
}

        function make_list(){
        get_document();
        num++;
        $("#list_frame").append("<div class='list"+Level.value+"' id='list"+num+"'><span class='list_todo'>"+Todo.value+"</span>"+Limit_d.value+"/"+Limit_t.value+"<button id='complete' class='complete'>完了</button></div>");
        cancel_input();
    }

    function cancel_input(){
        get_document();
        Todo.value=''; Limit_d.value=''; Limit_t.value=''; Level.value=1;
    }
});