//Using local storage, display the amount of time in days (rounded to a whole number) 
//between user visits to this Gallery page by the user's agent (browser). 
//You may elect to display this information where you deem fit on the page.

//save as an instance every time the user clicks as the gallery. Save that as a date 

/*
 If localStorage getItem sessionTime is not null <- i.e. you stored the current session last time

          localStorage setItem 'lastSessionTime' , sessionTime <- move the stored current session from last time into the previous session before you update everything
 
(otherwise this is their first visit and you don't need to do anything )

*/

function getDate() { 

    if (localStorage.getItem( "date") == null) 

//USE LOCAL STORAGE TO STORE *JUST* THE DATE
 localStorage.setItem("date", new Date().getTime() );

 const oldate = parseInt( localStorage.getItem("date") );

 return oldate;
}

//document.getElementById("firstdate").innerHTML = oldate;

function getNumberOfDays() {
    const oldate = getDate();
    const date1 = oldate;
    const date2 = new Date();
    
    const oneDay = 1000 * 60 * 60 * 24;

    const diffInTime = date2.getTime() - date1;


    const diffInDays = Math.round(diffInTime / oneDay);

    document.getElementById("diffInDays").innerHTML = diffInDays;

}

getNumberOfDays();

/*
const lastVisit = getCookie('lastVisitTime');
const now = Date.now();
if (lastVisit) {
   const hoursSinceLastTime = Math.ceil((parseInt(lastVisit) - now) / 3600);
   alert(`It's been ${hoursSinceLastTime} hour(s) since you last visited us.`);
}
setCookie('lastVisitTime', now);

*/