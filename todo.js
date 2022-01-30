var Todo,Level,Limit_d,Limit_t;
var num=0;
$(function() {
    $("#decision").click(make_list);
    $("#cancel").click(cancel_input);
    $("#complete").click(complete_list);

    function get_document(){
        Todo=document.getElementById("todo");
        Limit_d=document.getElementById("limit");
        Limit_t=document.getElementById("limit_time");
        Level=document.getElementById("level");
    }

    function make_list(){
        get_document();
        num++;
        $("#list_frame").append("<div class='level"+Level.value+"' id='list"+num+"'><span class='list_todo'>"+Todo.value+"</span>"+Limit_d.value+"/"+Limit_t.value+"<button id='complete' class='complete' onclick='complete_list("+num+","+Level.value+")'>完了</button></div>");
        cancel_input();
    }

    function cancel_input(){
        get_document();
        Todo.value=''; Limit_d.value=''; Limit_t.value=''; Level.value=1;
    }
});

window.onload =function(){
    const inputElement = document.getElementById("fil");
    inputElement.addEventListener("change", handleFiles, false);
    function handleFiles() {
        const fileList = this.files; /* ファイルリストを処理するコードがここに入る */
        const image = new Image;
        image.src = URL.createObjectURL(fileList[0]);
        document.getElementById("body").style.backgroundImage='url('+image.src+')';
    }
}


function complete_list(li_num,lv){
    let parent=document.getElementById("list"+li_num);
    parent.remove();
    modalOpen(lv);
}



//ボタンがクリックされた時
function modalOpen(lv) {
    const modal = document.getElementById("easyModal"+lv);
    modal.style.display = 'block';
};

//バツ印がクリックされた時

function modalClose(lv) {
    const modal = document.getElementById('easyModal'+lv);
    modal.style.display = 'none';
};

//モーダルコンテンツ以外がクリックされた時
addEventListener('click', outsideClose);
function outsideClose(e) {
    const modal = document.getElementsByName('Modal');
    for(var i=0; i<modal.length; i++){
        if (e.target == modal[i]) {
    modal[i].style.display = 'none';
    };
    }  
};

