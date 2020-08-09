export default class Controller{
    constructor(ball){
        document.addEventListener('keydown', event => {
            switch(event.keyCode){
                case 37:
                    ball.moveLeft();
                    break;
                case 39:
                    ball.moveRight();
                    break;
            }
        })
    }
}