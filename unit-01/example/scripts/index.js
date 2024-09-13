const DOM = {
    btn1 : document.getElementById("btn1"),
    btn2 : document.getElementById("btn2"),
    btn3 : document.getElementById("btn3"),
    btn4 : document.getElementById("btn4")
}


DOM.btn1.onclick = function (){
    alert("On Click")
};


DOM.btn2.ondblclick = function (){
    alert("On Double Click")
};


DOM.btn3.onmousemove = function (){
    alert("On Mouse Move")
};


DOM.btn4.oncontextmenu = function (){
    alert("On Context Menu")
};
