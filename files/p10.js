const inputs = document.querySelectorAll("input"); //Creates an array of input objects in document



function create_Ele(){
    let element = document.createElement(inputs[0].value);
    console.log(element);
}