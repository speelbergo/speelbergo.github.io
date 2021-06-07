
//document.getElementById("date").innerHTML = new Date();


const now = new Date();
const fulldate = new
Intl.DateTimeFormat("en-US", {dateStyle: "full" }).format(
    now
    );

 document.querySelector("#date").innerHTML = fulldate;


// datefield.textContent = fulldate ;
