var h=600, w=800;
var bounds=1500;
var GameOverText, hiScore,scoreText,score, pipo, button, laland;
var lines,restart,startButton,titlepage,pause;
var bgm,play,score;
var a = 0;
var bw=600, tween;

var game = new Phaser.Game(w, h, Phaser.CANVAS, '');


game.state.add('bootGame', bootGame);
game.state.add('preloadGame', preloadGame);
game.state.add('menuGame', menuGame);
game.state.add('playGame', playGame);
game.state.add('winGame', winGame);

game.state.start("bootGame");