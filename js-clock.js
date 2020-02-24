const clock1 = document.querySelector('.clock');
const whatDay = document.querySelector('.day');

function getTime(){
    const TIME_NOW = new Date();
    const hour = TIME_NOW.getHours();
    const min = TIME_NOW.getMinutes();
    const sec = TIME_NOW.getSeconds();
    clock1.innerText = `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
    numToDay();
}

function numToDay(){
    var d = new Date();
    const weekDay = [];
    weekDay[0] = 'SUN'
    weekDay[1] = 'MON'
    weekDay[2] = 'TUE'
    weekDay[3] = 'WED'
    weekDay[4] = 'THR'
    weekDay[5] = 'FRI'
    weekDay[6] = 'SAT'
    const day = weekDay[d.getDay()]
    whatDay.innerText = `${day}`
}

function realTime(){
    getTime();
    setInterval(getTime, 1000);
}


function init(){
    realTime();
}

init();