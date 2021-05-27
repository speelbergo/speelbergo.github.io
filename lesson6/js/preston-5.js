const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);

document.getElementById("date").innerHTML=fulldate;

let thedate = new Date ();

if (thedayt.getDay() == 5) {
    document.querySelector('#banner').style.display = "block";
}

else {
    document.querySelector('#banner').style.display = 'none';
}