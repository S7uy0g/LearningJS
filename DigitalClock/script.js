
function clock() {
    let ampmText=document.getElementById("ampm");
    let timeText=document.getElementById("time");
    function Time(){
        const Time=new Date();
        let hours=Time.getHours();
        let ampm=hours >= 12 ? "PM" : "AM";
        hours=hours%12||12;
        hours=hours.toString().padStart(2,0)
        let minute=Time.getMinutes().toString().padStart(2,0);
        let seconds=Time.getSeconds().toString().padStart(2,0);
        let ans=`${hours}:${minute}:${seconds}`;
        timeText.textContent=ans;
        ampmText.textContent=ampm;
    }
    setInterval(Time,1000);
}


function stopwatch(){
    let timeText=document.getElementById("time");
    let ms;
    let sec;
    let min;
    let hour;
    function Time(){
        ms=ms+1;
        if(ms==60){
            sec+=1;
        }
    }
    setInterval(Time,1);
}