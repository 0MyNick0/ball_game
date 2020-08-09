import Ball from '/src/ball.js';
import Controller from '/src/controller.js';

let canvas = document.getElementById('main');
let ctx = canvas.getContext('2d');

const WIDTH_SCREEN = 800;
const HEIGTH_SCREEN = 600;

let ball = new Ball(300, 200, 48, WIDTH_SCREEN, HEIGTH_SCREEN);

new Controller(ball);

let lastTime = 0;

function loop(timestamp) {
    let delta = timestamp - lastTime;

    lastTime = timestamp;

    ctx.clearRect(0, 0, WIDTH_SCREEN, HEIGTH_SCREEN);

    ball.draw(ctx);
    ball.update(delta);

    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);