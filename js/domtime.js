

function renderTime() {
    var mydate = new Date();
    var year = mydate.getYear();
    if (year < 1000){
        year += 1900;
    }
    var month = mydate.getMonth();
    var day = mydate.getDay();
    var daym = mydate.getDate();
    var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var montharray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var period;

    var h = mydate.getHours();
    var m = mydate.getMinutes();
    var s = mydate.getSeconds();
    if (h>12){
        h -= 12;
        period = "p.m."
    }else{
        period = "a.m."
    }

    if (m < 10){
        m = "0"+m;
    }
    
    if (s < 10){
        s = "0"+s;
    }

    var myClock = document.getElementById("clockDisplay");
    myClock.textContent = " " + dayarray[day] + " " + montharray[month] + " " + daym + ", " + year + " - " + h + ":" + m + " " + period;

    myClock.innerText = myClock.textContent;
    
    
}
setInterval(renderTime, 1000);












