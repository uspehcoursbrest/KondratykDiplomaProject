window.onload = function () {
    function clock() {
        var date = new Date(),
            day = date.getDate(),
            month = date.getMonth(),
            monthArr = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
            year = date.getFullYear(),
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds();

        if (day < 10) day = "0" + day;
        if (hour < 10) hour = "0" + hour;
        if (min < 10) min = "0" + min;
        if (sec < 10) sec = "0" + sec;

        document.getElementById("date").innerHTML = day + "/" + monthArr[month];
        document.getElementById("year").innerHTML = year;
        document.getElementById("time2").innerHTML = hour + " " + ":" + " " + min + " " + ":" + " " + sec;

    }

    var timer;

    function clockStart() {
        timer = setInterval(clock, 1000);
        clock();
    }
clockStart();
}