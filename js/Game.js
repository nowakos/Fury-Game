import {Furry} from "./Furry";
import {Coin} from "./Coin";


export class Game {
    constructor() {
        this.board = $("#board>div");
        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;

    }

    index(x, y) {
        return x + (y * 10);
    }

    showFurry() {
        this.board[this.index(this.furry.x, this.furry.y)].classList.add("furry");
    }

    showCoin() {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add("coin");
    }

    startGame() {
        const self = this;

        setInterval(function () {
            self.moveFurry()
        }, 250);
    }


    moveFurry() {
        const self = this;
        this.hideVisibleFurry();
        let direction = this.furry.direction;
        
        switch (direction) {
            case "right" :
                this.furry.x += 1;
                break
            case "left":
                this.furry.x -= 1;
                break
            case "up" :
                this.furry.y -= 1;
                break
            case "down":
                this.furry.y += 1;
        }
        this.gameOver();
        this.showFurry();

        this.checkCoinCollision();

        $(document).on("keydown", () => {
            self.turnFurry(event);
        });

    }

    hideVisibleFurry() {
        const doubledFurry = $(".furry");
        if (doubledFurry) {
            doubledFurry.removeClass("furry");
        }

    }


    turnFurry(event) {
        switch (event.which) {
            case 37:
                this.furry.direction = "left";
                break;
            case 38:
                this.furry.direction = "up";
                break;
            case 39:
                this.furry.direction = "right";
                break;
            case 40:
                this.furry.direction = "down";
                break;
        }
    }

    checkCoinCollision() {
        if (this.coin.x === this.furry.x && this.coin.y === this.furry.y) {
            this.board[this.index(this.coin.x, this.coin.y)].classList.remove("coin");
            this.score++;
            let scoreCounter = $("#score strong");
            scoreCounter.text(this.score)
            this.coin = new Coin();
            this.showCoin();
        }

    }

    gameOver() {
        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
            clearInterval(this.startGame);
            this.hideVisibleFurry();
            const gameOver = $("#gameOver");
            this.board.hide()
            gameOver.show()
            const button = $('.btn.tryAgain')
            button.on("click", ()=> {
                location.reload();
            })


        }
    }

}

