let countDownDate = new Date("Oct 16, 2022 00:00:00").getTime();
let x = setInterval(function(){
    let now = new Date().getTime();
    let distance = countDownDate - now; //distance is the difference between the stop time and the start time

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);


    //assigning the values created as the values on the page

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    //adding what will display after the coundown is over 

    if (distance < 0) {
        document.getElementById('days').innerHTML = "00";
        document.getElementById('hours').innerHTML = "00";
        document.getElementById('minutes').innerHTML = "00";
        document.getElementById('seconds').innerHTML = "00";
    }
},1000); //the 1000 milliseconds represents 1 second