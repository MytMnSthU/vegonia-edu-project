// Start jQuery Area
$(function () {

    

});
// End jQuery Area


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