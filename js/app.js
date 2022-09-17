// Start jQuery Area
$(function () {});
// End jQuery Area

// Start Counter
const countNums = document.querySelectorAll(".vgn-header__counter-number");

countNums.forEach((countNum, idx) => {
   let final = countNum.dataset.count;
   counter(countNum, final);
});

function counter(start, end) {
   let intervalId;
   let count = 0;
   let rate = end / 50;
   let startVal = Number(start.textContent);

   intervalId = setInterval(function () {
      if (startVal < end) {
         count += rate;
         start.textContent = count;
         startVal = count;
      } else {
         clearInterval(intervalId);
      }
   }, 30);
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
      height: 300,
   };

   var chart = new google.visualization.PieChart(
      document.getElementById("chart")
   );

   chart.draw(data, options);
}
// End Chart

// Start Scroll Animation
window.addEventListener("scroll", function () {
   let scrolltop = this.document.documentElement.scrollTop;
   // console.log(scrolltop);

   let aboutcontent = this.document.getElementById("aboutcontent");
   let aboutimg = this.document.getElementById("aboutimg");
   let feature = this.document.getElementById("feature");
   let member = this.document.getElementById("member");
   let pricing = this.document.getElementById("pricing");
   let location = this.document.getElementById("location");
   let accordion = this.document.getElementById("accordion");
   let accordionimg = this.document.getElementById("accordionimg");
   let chart = this.document.getElementById("chart");
   let progress = this.document.getElementById("progress");
   let subscribe = this.document.getElementById("subscribe");

   if (scrolltop >= 520) {
      aboutcontent.classList.add("fade-left");
      aboutimg.classList.add("fade-right");
    }
    
    if (scrolltop >= 950) {
        feature.classList.add('fade-up');
    }

    if (scrolltop >= 1600) {
        member.classList.add('fade-up');
    }

    if (scrolltop >= 2150) {
        pricing.classList.add('fade-up');
    }

    if (scrolltop >= 2790) {
        location.classList.add('fade-up');
    }

    if (scrolltop >= 3245) {
        accordion.classList.add('fade-left')
        accordionimg.classList.add('fade-right')
    }

    if (scrolltop >= 3850) {
        chart.classList.add('fade-left')
        progress.classList.add('fade-right')
    }
    
    if (scrolltop >= 4270) {
        subscribe.classList.add('fade-up');
    }
});
// End Scroll Animation
