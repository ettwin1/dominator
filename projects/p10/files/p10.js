
const inputs = document.querySelectorAll("input"); //Creates an array of input objects in document
let parent;


function create_Ele(){
    let element = document.createElement(inputs[0].value);
    for (var i=1; i<inputs.length; i++){
        let attribute = inputs[i].getAttribute('placeholder');
        let value = inputs[i].value

        if (value){
            element[attribute]=value;
        }
        if (attribute == 'parent id' && value){
            document.getElementById(value).appendChild(element);
        }else{
            document.getElementById("page").appendChild(element);
        }
    }
    parent = element.parentNode;

    console.log(element);
}

function remove_Ele(){
    let last_child = parent.lastChild;
    last_child.remove();
}

function reset(){
    for (var i=0; i<inputs.length; i++){
        inputs[i].value = "";
    }
}

function hide_Ele(){
    document.getElementById("wrap").className="d-none";
    let show_btn = document.createElement("span");
    show_btn.innerHTML = "Show Panel";
    show_btn.id = "sBtn";
    show_btn.className = "btn btn-primary float-right mt-5";
    show_btn.setAttribute("onclick", "show_Ele()");
    document.getElementById("page").appendChild(show_btn);
}

function show_Ele(){
    document.getElementById("wrap").className="d-block";
    let btn = document.getElementById("sBtn");
    btn.parentNode.removeChild(btn);
}