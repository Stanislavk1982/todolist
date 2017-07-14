var inputBox = document.getElementById("inputbox");
$(document).ready(function () {
    $("#bottonadd").click(function () {
        listToDo[listToDo.length] = $("#inputbox").val();
        list();
    })
});
