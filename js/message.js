
function loadMessage(){
    let getBody = document.body;

    let newElement = document.createElement("h1");

    let d = new Date();
    let currentHour = d.getHours();
    let currentMinutes = d.getMinutes();


    let createTxtMsg;

    if (currentHour <= 6){

    }
    else if (currentHour == 7){
        if (currentMinutes >= 45){
            createTextMsg = "I am in Period 1";
        }else{
            createTextMsg = "I am at home";
        }
    }else if (currentHour == 8){
        createTextMsg = "I am in Period 1";
    }else if (currentHour == 9){
        if (currentMinutes >= 15){
            createTextMsg = "I am in Period 2";
        }else{
            createTextMsg = "I am in Period 1";
        }
    }else if (currentHour == 10){
        if (currentMinutes >= 52){
            createTextMsg = "I am at Lunch";
        }else{
            createTextMsg = "I am in Period 2";
        }   
    }else if (currentHour == 11){
        if (currentMinutes >= 36){
            createTextMsg = "I am in Period 3";
        }else{
            createTextMsg = "I am at Lunch";
        }
    }else if (currentHour == 12){
        createTextMsg = "I am in Period 3";
    }else if (currentHour == 13){
        if (currentMinutes >= 7){
            createTextMsg = "I am in Period 4";
        }else{
            createTextMsg = "I am in Period 3";
        }
    }else if (currentHour == 14){
        if (currentMinutes >= 42){
            createTextMsg = "I am at Home";
        }else{
            createTextMsg = "I am in Period 4";
        }
    }else if (currentHour > 14){
        createTxtMsg = "I am at Home";
    }
    else{
        createTextMsg = "Are you from a different planet?";
    }

    let createEleTxt = document.createTextNode(createTextMsg);

    newElement.appendChild(createEleTxt);

    document.getElementById("part1").appendChild(newElement);

    newElement.setAttribute("class", "welcome");
    newElement.style.cssText = "text-align: center; font-size: 60px; font-family: arial";
}
