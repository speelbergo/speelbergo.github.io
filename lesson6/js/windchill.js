let t = document.getElementById("temph").innerHTML;
let s = document.getElementById("wendy").innerHTML;


let windChill =  (35.74 + (.6215 * t) - (35.75 * (Math.pow(s, .16))) + (.4275 * t * (Math.pow(s, .16)) ) )

document.getElementById("wchill").innerHTML = windChill;

// The "windchill.js" script should get the two input values of temperature and wind speed,
// check to make sure they meet the required values allowed to officially calculate the wind chill, 
//and then either calculate and display the windchill factor value or display "N/A" (not applicable) 
//if the input values did not meet the requirements.