var tasks = [];


var defaultTask = {
    content: 'No_content',
    isDone: false
};


$(document).ready(function () {
    var taskInJson = localStorage.getItem("tasks");
    tasks = JSON.parse(taskInJson);
    console.log("tasks1" + tasks);
    if (tasks != null) {
        for (var i = 0; i < tasks.length; i++) {


            if (tasks[i].isDone == undefined || tasks[i].isDone == false) {
                createElement(tasks[i].content, i);
            } else {
                createElement(tasks[i].content, i, false);
            }
        }
    } else {
        tasks = []
    }

    $('#addTask').on('click', function () {
        var taskValue = $('#task').val();
        $('#task').val('');
        var myTask = Object.create(defaultTask);
        myTask.content = taskValue;
        tasks.push(myTask); // add new task to array
        localStorage.setItem("tasks", JSON.stringify(tasks));
        createElement(taskValue, tasks.length - 1);
    })
});


function createElement(value, index, isFalse) {
    var parent = document.createElement("div");
    var myElem = document.createElement('div');
    var button = document.createElement("input")
    var buttontransfer = document.createElement("input")
    myElem.innerHTML = value;
    myElem.setAttribute('data-index', index);
    myElem.classList.add("rowdiv");
    myElem.onclick = isTaskDone;
    console.log("isfalse" + isFalse);
    if (isFalse != undefined) {
        myElem.classList.add("strike");
    }

    button.setAttribute('type', 'button');
    button.setAttribute('value', "Del");
    button.setAttribute('index', index);
    button.setAttribute("class", "rowdiv");
    button.onclick = deleteElement;
    buttontransfer.setAttribute('type', 'button');
    buttontransfer.setAttribute('value', "Send");
    buttontransfer.setAttribute('index', index);
    buttontransfer.setAttribute("class", "rowdiv");
    buttontransfer.onclick = start;

    parent.appendChild(myElem);
    parent.appendChild(button);
    parent.appendChild(buttontransfer);
    parent.setAttribute("class", "inoneline");

    $('#taskContainer').append(parent);
}

function deleteElement(event) {
    var viewUserDetails = event.target;
    var index = viewUserDetails.getAttribute("index");
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    location.reload();
}

function isTaskDone() {
    var index = $(this).data('index');
    if (tasks[index].isDone == undefined) {
        tasks[index].isDone == false;
    }
    if (tasks[index].isDone == true) {
        tasks[index].isDone = false;
        $(this).removeClass('strike');
    } else {
        tasks[index].isDone = true;
        $(this).addClass('strike');
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function sentdatatoserver(msg) {
    document.getElementById("showinfo1").innerHTML="Msg from server: " + msg;
     //document.getElementById("btnConfirmDelete").onclick=$("#modalshow1").modal('hide');
    $(document).ready(function() {
        $("#modalshow1").modal('show');
    });
}