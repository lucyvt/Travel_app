/*calculate the day difference between now and the entered date*/

function daysCount (tripDate) {
    // get the time from jan2001 like with the input date
    const now = new Date().getTime();
    const t = tripDate - now;
    // convert this back into days NB: 1000 is due to it calculating in milliseconds.
    const days = Math.floor(t / (1000 * 60 * 60 * 24)) + 1;
    return days;
}

export{daysCount};