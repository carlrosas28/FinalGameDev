preloadGame={
  preload:function() {
        game.load.image('laland','img/land22.png',800,600);
        game.load.spritesheet('runner','img/pipo.png',100,80);
        game.load.image('line','img/line.png');
        game.load.spritesheet('tagger', 'img/tagger.png',100,80);
        game.load.spritesheet('tagger2', 'img/tagger.png',100,80);   
        game.load.spritesheet('tagger3', 'img/tagger.png',100,80);
        game.load.spritesheet('jump', 'img/btn-walk.png',50,50); 
        game.load.spritesheet('left', 'img/btn-left.png',50,50);
        game.load.spritesheet('right', 'img/btn-right.png',50,50);
        game.load.image("pause","img/pause.png");
        game.load.image('restart', 'img/restart.png');
        game.load.image('title', 'img/title.png');
        game.load.spritesheet('start', 'img/button.png',87,48); 
        game.load.audio('bgm', 'audio/bg-music.mp3');        
        game.load.audio('score', 'audio/score.mp3');

        },
  create:function() {
    game.state.start("menuGame");
  },
}