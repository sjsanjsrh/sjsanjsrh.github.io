document.addEventListener("DOMContentLoaded", function() {
    function changeTime() {
        let today = new Date();
        let end = new Date("2023-04-01 00:00:00 +0900");

        let second = ((end - today) / 1000).toFixed();
        let minute = (second / 60).toFixed();
        let hour = (minute / 60).toFixed();
        let date = (hour / 24).toFixed();

        second %= 60;
        minute %= 60;
        hour %= 24;

        second = second.toString().padStart(2,'0');
        minute = minute.toString().padStart(2,'0');
        hour = hour.toString().padStart(2,'0');
        date = date.toString().padStart(3,'0');

        document.getElementById("ddd-1").setAttribute("class", "num-" + date.substr(0, 1));
        document.getElementById("ddd-2").setAttribute("class", "num-" + date.substr(1, 1));
        document.getElementById("ddd-3").setAttribute("class", "num-" + date.substr(2, 1));
        document.getElementById("hh-1").setAttribute("class", "num-" + hour.substr(0, 1));
        document.getElementById("hh-2").setAttribute("class", "num-" + hour.substr(1, 1));
        document.getElementById("mm-1").setAttribute("class", "num-" + minute.substr(0, 1));
        document.getElementById("mm-2").setAttribute("class", "num-" + minute.substr(1, 1));
        document.getElementById("ss-1").setAttribute("class", "num-" + second.substr(0, 1));
        document.getElementById("ss-2").setAttribute("class", "num-" + second.substr(1, 1));

        setTimeout(changeTime, 1000);
    }

    changeTime();
});