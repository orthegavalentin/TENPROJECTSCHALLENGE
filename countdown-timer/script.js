const daysel =document.getElementById('days')
const hoursel =document.getElementById('hours')
const minsel =document.getElementById('mins')
const secsel =document.getElementById('secs')

const days=document.getElementById("days")



const newYear ="1 jan 2022"


function countDown(){

    var diff=(new Date(newYear))-new Date();
    
    const days=Math.floor(diff/(1000*3600*24));
    diff-=days*(1000*3600*24);
    const hours=Math.floor(diff/(1000*3600));
    diff-=hours*(1000*3600);
    const mins=Math.floor(diff/(1000*60));
    diff-=mins*(1000*60);
    const seconds=Math.floor(diff/1000);

    daysel.innerHTML=format(days);
    hoursel.innerHTML=format(hours);
    minsel.innerHTML=format(mins);
    secsel.innerHTML=format(seconds);
    
   

    console.log(seconds);
}

function format(value){
    return value<10 ?`0${value}`:value;
}




countDown();
setInterval(countDown,1000);