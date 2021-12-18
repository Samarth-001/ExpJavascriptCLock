const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const second = now.getSeconds();
    const sd = ((second/60)*360)+90;
    secondHand.style.transform = `rotate(${sd}deg)`;   

    const hour = now.getHours();
    const hd = ((hour/12)*360)+90;
    hourHand.style.transform = `rotate(${hd}deg)`;
    
    const minute = now.getMinutes();
    const md = ((minute/60)*360)+90;
    hourHand.style.transform = `rotate(${md}deg)`;
    console.log(second);
    console.log(minute);
    console.log(hour);
}
setInterval(setDate, 1000);