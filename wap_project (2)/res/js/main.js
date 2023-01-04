const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const playerHp = document.getElementById("playerHp");
const enemyHp = document.getElementById("enemyHp");
const attack = document.getElementById("attack");
const info = document.getElementById("info");

let php = parseInt(localStorage.getItem("php")) || 20;
let ehp = parseInt(localStorage.getItem("ehp")) || 20;
let medmg = parseInt(localStorage.getItem("medmg")) || 1;
let coinStorage = parseInt(localStorage.getItem("coin")) || 0;

playerHp.innerHTML = php;
enemyHp.innerHTML = ehp;

const dmginterval = setInterval(() => {
  playerHp.innerHTML--;
  if (playerHp.innerHTML <= 0) {
    clearInterval(dmginterval);
    info.innerHTML = "you died";
  }
}, 300);

attack.onclick = () => {
  if (enemyHp.innerHTML > 0 && playerHp.innerHTML > 0) {
    enemyHp.innerHTML -= medmg;
    player.style.right = "400px";
  }
  if (enemyHp.innerHTML <= 0) {
    clearInterval(dmginterval);
    info.innerHTML = "enemy died";

    coinStorage += 1;
    localStorage.setItem("coin", coinStorage);
    coin.innerHTML = `Coins: ${coinStorage}`;
  }
};


