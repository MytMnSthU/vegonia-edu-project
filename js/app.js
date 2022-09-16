// Start jQuery Area
$(function () {

    

});
// End jQuery Area


// Start Counter
const countNums = document.querySelectorAll(".vgn-header__counter-number");

countNums.forEach((countNum, idx) => {  
    let final = countNum.dataset.count;
    counter(countNum, final);
});

function counter(start,end) {
    let intervalId;
    let count = 0;
    let rate = end/50;
    let startVal = Number(start.textContent);

    intervalId = setInterval(function () { 
        if (startVal < end) {
            count += rate;
            start.textContent = count;
            startVal = count;
        } else {
            clearInterval(intervalId);
        }
     },30);
}
// End Counter


// Start Chart
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["Task", "Hours per Day"],
        ["Myanmar", 8],
        ["Singapore", 6],
        ["Thailand", 4],
        ["Indonesia", 4],
        ["Malaysia", 4],
    ]);

    var options = {
        title: "International Students",
        width: 400,
        height:300
    };

    var chart = new google.visualization.PieChart(
        document.getElementById("chart")
    );

    chart.draw(data, options);
}

// End Chart
