import { Player } from "./classes/player.js";


const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.style.backgroundColor = 'black';

canvas.width = innerWidth / 2;
canvas.height = innerHeight / 2;


const player = new Player();

const keys = {}; // Object to track pressed keys

// Event listeners to track key presses and releases
document.addEventListener('keydown', (event) => {
    keys[event.key] = true;
    if (event.key === ' ') {
        player.jump();
    }
});

document.addEventListener('keyup', (event) => {
    keys[event.key] = false;
});

function animate() {
    // Clear the canvas before drawing the player
    context.clearRect(0, 0, canvas.width, canvas.height);

    player.updatePosition();
    player.draw();

    requestAnimationFrame(animate);
}

animate();