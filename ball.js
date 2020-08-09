export default class Ball{
    constructor(x, y, size, widthScreen, heightScreen) {
        this.x = x;
        this.y = y;
        this.size = size;

        this.gravity = .7;
        this.speed = 0;
        this.velX = 10;
        this.velY = 5;
        this.friction = .96;
        
        this.widthScreen = widthScreen;
        this.heightScreen = heightScreen;

        this.red_ball = document.getElementById('red_ball');
    }

    moveLeft(){
        this.speed = -this.velX;
    }

    moveRight() {
        this.speed = this.velX;
    }

    draw(ctx){
        ctx.drawImage(this.red_ball, this.x, this.y, this.size, this.size);
    }

    bounce(){
        if (this.y + this.size > this.heightScreen) {
            this.velY *= -1;
        } else {
            this.velY += this.gravity;
        }
        this.y += this.velY;
    }


    update(){
        this.bounce();
        
        this.speed *= this.friction;
        this.x += this.speed;

    }
}