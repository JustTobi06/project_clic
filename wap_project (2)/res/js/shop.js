const coin = document.getElementById("coin");
const stim = document.getElementById("stim");
const abox = document.getElementById("abox");

let coinStorage = parseInt(localStorage.getItem("coin")) || 0;
let medmg = parseInt(localStorage.getItem("medmg")) || 1;
let aboxPrice = 1;
let php = parseInt(localStorage.getItem("php")) ||  1;
let stimPrice = 1;

abox.onclick = () => {
    if (coinStorage >= aboxPrice) {
        coinStorage -= aboxPrice;
        localStorage.setItem("coin", coinStorage);
        coin.innerHTML = `Coins: ${coinStorage}`;
        medmg++;
        localStorage.setItem("medmg", medmg);
    }
}

window.onload = () => {
    coin.innerHTML = `Coins: ${coinStorage}`;
}


stim.onclick = () => {
if (coinStorage >= stimPrice) {
    coinStorage -= stimPrice;
    localStorage.setItem("coin", coinStorage);
    coin.innerHTML = `Coins: ${coinStorage}`;
    php++;
    localStorage.setItem("php", php);
}





}