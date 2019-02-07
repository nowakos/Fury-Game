import {Game} from './Game'


$(document).ready(function() {

    const startButton = $('.btn.start');

    startButton.on("click", function () {
        $("#startGame").addClass("invisible");
        $("#score").removeClass("invisible");
        $("#board").removeClass("invisible");
        const startGame = new Game();
        startGame.showFurry();
        startGame.showCoin();
        startGame.startGame();

    });



})


