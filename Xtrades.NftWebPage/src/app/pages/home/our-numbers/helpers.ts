export const countdown = (endDate: Date) => setInterval(function() {

    let now = new Date().getTime();
    let t = endDate.getTime() - now;

    if (t >= 0) {
    
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
    
        document.querySelector(".timer-days")!.innerHTML = days.toString();
    
        document.querySelector(".timer-hours")!.innerHTML = ("0"+hours).slice(-2).toString();
    
        document.querySelector(".timer-mins")!.innerHTML = ("0"+mins).slice(-2).toString();
    
        document.querySelector(".timer-secs")!.innerHTML = ("0"+secs).slice(-2).toString();
    
    } else {

        // document.getElementById("timer")!.innerHTML = "The countdown is over!";

    }
    
}, 1000);