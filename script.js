const hrsEl = document.querySelector('.hrs');
const minsEl = document.querySelector('.mins');
const secEl = document.querySelector('.sec');


//console.log(hrsEl, milEl, minsEl, secEl);

function updatetime() {
    let hrs = String(new Date().getHours()).padStart(2, "0");
    let mins = String(new Date().getMinutes()).padStart(2, "0");
    let sec = String(new Date().getSeconds()).padStart(2, "0");

    hrsEl.textContent = hrs + ":";
    minsEl.textContent = mins + ":";
    secEl.textContent = sec;

}
setInterval(updatetime, 1000);
//updatetime();