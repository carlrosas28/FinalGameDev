bootGame={
   create:function(){
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.world.setBounds(0,0,bounds,0);
    game.stage.backgroundColor = "#ddd";
   	
    game.input.maxPointers = 2;    
    game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    game.scale.forceLandscape = true;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.setScreenSize =true;

    game.state.start("preloadGame");
    


   },
	
}
