let daynames = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"

];
let months = [
    "January", 
    "February", 
    "March", 
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYEar();
let fulldate = `dayName, monthName, d.getDate(), year`;

document.getElementById("currentdate").textContent = fulldate;

try {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    document.getElementById( 
        "currentdate2"
    ).textContent = new Date().toLocaleDateString("en-US", options);
} catch (e) {
    alert("Error with your code or your bowser doesn't support Locale");
}