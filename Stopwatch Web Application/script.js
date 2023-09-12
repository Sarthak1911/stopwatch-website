let hr = min = sec = ms = "0" + 0, startTimer;

let laps = null;
let lapNow = null;

const startBtn = document.querySelector(".start");
pauseBtn = document.querySelector(".pause");
resetBtn = document.querySelector(".reset");
lapBtn = document.querySelector(".lap");

startBtn.addEventListener("click",start);
pauseBtn.addEventListener("click",pause);
resetBtn.addEventListener("click",reset);
lapBtn.addEventListener("click",lap);

function start(){
    startBtn.classList.add("active");
    pauseBtn.classList.remove("stopActive")

    startTimer = setInterval(()=>{
        ms++
        ms = ms < 10 ? "0" + ms : ms;

        if(ms == 100)
        {
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            ms = "0" + 0;
        }
        if(sec == 60)
        {
            min++;
            min = min < 10 ? "0" + min : min;
            sec = "0" + 0;
        }
        if(min == 60)
        {
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            min = "0" + 0;
        }
        putValue();
    },10);
}

function pause(){
    startBtn.classList.remove("active");
    pauseBtn.classList.add("stopActive");
    clearInterval(startTimer);
}

function reset(){
    startBtn.classList.remove("active");
    pauseBtn.classList.remove("stopActive");
    clearInterval(startTimer);
    hr = min = sec = ms = "0" + 0;
    // window.clearInterval(laps);
    putValue();

}
function lap(){
    lapNow = hr + ":" + min + ":" + sec + ":" + ms;
    laps = document.getElementById('lapRecord').innerHTML + lapNow;
    document.getElementById('lapRecord').innerHTML = laps + '<br>';
    
}

function putValue()
{
    document.querySelector(".milliseconds").innerHTML = ms; 
    document.querySelector(".seconds").innerHTML = sec; 
    document.querySelector(".minutes").innerHTML = min; 
    document.querySelector(".hour").innerHTML = hr; 
}

function clearContent(){
    document.getElementById('lapRecord').innerHTML = ' ';
}