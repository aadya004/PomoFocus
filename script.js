let progress=document.querySelector(".clock");
let focusv= document.getElementById('focus');
let breakv= document.getElementById('break');
const sound = new Audio('bell.mp3');  
let fTime=25;
let bTime=5;
let sec="00";
let fmin=fTime;
let bmin=bTime;
let interval;
let bCount=0;
let focust=25*60;
let time=0;

window.onload=()=>{
    document.getElementById("min").innerHTML=fTime;
    document.getElementById("sec").innerHTML=sec;
    focusv.classList.add('active')
}

function start()
{
    document.getElementById('start').style.display="none";
    document.getElementById('pause').style.display="inline";
    document.getElementById('restart').style.display="inline";
    let timerFunction=()=>{
       progress.style.background=`conic-gradient(#ee7276 ${time * (360 / focust)}deg, #ffffffe6 0deg)`;
        time=time+1;
        document.getElementById("min").innerHTML=fmin;
        document.getElementById("sec").innerHTML=sec;
        sec=sec-1;
        if(sec<=0)  
        {
            if(fmin>0)
            {
                fmin=fmin-1;
            }
            else if(fmin==0)
            {
                if(bCount%2==0)
                {
                    fmin=bmin;
                    focust=5*60;
                    bCount++;
                    time=0;
                    sound.play();
                    focusv.classList.remove('active');
                    breakv.classList.add('active');
                }
                else
                {
                    fmin=fTime;
                    bCount++;
                    focust=25*60;
                    time=0;
                    sound.play();
                    breakv.classList.remove('active');
                    focusv.classList.add('active');
                }
            }
            sec=59;
        }
    }
    interval=setInterval(timerFunction,1000);
}

function pause()
{
    clearInterval(interval);
    progress.style.background=`conic-gradient(#ee7276 ${time * (360 / focust)}deg, #ffffffe6 0deg)`;
    document.getElementById('pause').style.display="none";
    document.getElementById('start').style.display="inline";
    document.getElementById('restart').style.display="inline";
    document.getElementById("min").innerHTML=fmin;
    document.getElementById("sec").innerHTML=sec;
}

function restart()
{
    progress.style.background=`conic-gradient(#ee7276 ${focust * (360 / focust)}deg, #ffffffe6 0deg)`;
    clearInterval(interval);
    document.getElementById('pause').style.display="none";
    document.getElementById('start').style.display="inline";
    document.getElementById('restart').style.display="inline";
    fmin=25;
    sec="00";
    time=0;
    bCount=0;
    document.getElementById("min").innerHTML=fmin;
    document.getElementById("sec").innerHTML=sec;
}
