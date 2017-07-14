function list() {

    $("#outputbox").html("<p>List to do:</p>");
    var chield;
    for (var i = 0; i < listToDo.length; i++) {
        chield = document.createElement("div");
        chield.innerHTML = listToDo[i];
        chield.setAttribute("index", i);
        chield.onclick = deletedo;
        $("#outputbox").append(chield);
    }
}

function deletedo(event) {
    var viewDetails = event.target;
    var index = viewDetails.getAttribute("index");
    listToDo.splice(index, 1);
    list();
}