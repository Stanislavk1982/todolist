var wsUri = "ws://echo.websocket.org/"; // just free WS-server for tests
var output;
var websocket;
//var msgfromuser = "Test1";

function init(msgfromuser) {
    output = document.getElementById("output");
    testWebSocket(msgfromuser);
}

function testWebSocket(msgfromuser) {
    websocket = new WebSocket(wsUri);
    websocket.onopen = function (evt) {
        onOpen(evt,msgfromuser)
    };
    websocket.onclose = function (evt) {
        onClose(evt)
    };
    websocket.onmessage = function (evt) {
        onMessage(evt);
        sentdatatoserver(evt.data);
    };
    websocket.onerror = function (evt) {
        onError(evt)
    };
}

function onOpen(evt, msgfromuser) {
    writeToScreen("CONNECTED");
    doSend(msgfromuser);
}

function onClose() {
    writeToScreen("DISCONNECTED");
}

function onMessage(evt) {
    writeToScreen('RESPONSE: ' + evt.data);
    websocket.close();
}

function onError(evt) {
    writeToScreen('ERROR: ' + evt.data);
}

function doSend(message) {
    writeToScreen("SENT: " + message);
    websocket.send(message);
}

function writeToScreen(message) {
    console.log(message);
}

function start(event) {
    var viewUserDetails = event.target;
    var index = viewUserDetails.getAttribute("index");
    //window.addEventListener("load", init, false);
    console.log("init, task: " + tasks[index].content);
    init(tasks[index].content);
}
//window.addEventListener("load", init, false);

/*
function connectajax(msg){
$.ajax({
    type:"POST",
    url:"connct.php",
    data:msg
}).done(sentdatatoserver(msg)).fail()
}*/
