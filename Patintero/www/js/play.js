playGame={
	 create:function() {
        line = game.add.sprite(70,505,"line");
        line.scale.y = 0.2;
        line.scale.x = 1.12;
       
        line2 = game.add.sprite(120,275,"line");
        line2.scale.y = 0.2;
        line2.scale.x = 0.95; 

        line3 = game.add.sprite(160,85,"line");
        line3.scale.y = 0.2;
        line3.scale.x = 0.8;

        game.add.image(0,0,"laland");

        pause_label = game.add.image(700, 30, 'pause');


        bgm = game.add.audio('bgm');
        score = game.add.audio('score');

        pipo=game.add.sprite(150,600,'runner');
        pipo.animations.add('walk-right',[0,1],10,true);
        pipo.animations.add('walk-left',[0,1],10,true);
        pipo.scale.x = .5;

        tagger=game.add.sprite((game.width/2)-300,220,'tagger');        
        tagger.scale.x = .5; 
        tagger.scale.y = .7;        
        tagger2=game.add.sprite((game.width/2)-340,450,'tagger2');
        tagger2.scale.x = .5;
        tagger2.scale.y = .7;
        tagger3=game.add.sprite((game.width/2)+200,30,'tagger3');
        tagger3.scale.x = .5;
        tagger3.scale.y = .7;



        tween = game.add.tween(tagger).to({x:100,x:h+50},3000,Phaser.Easing.Linear.None,true,300,1000000,true);
        tween = game.add.tween(tagger2).to({x:100,x:h+100},3000,Phaser.Easing.Linear.None,true,300,1000000,true);
        tween = game.add.tween(tagger3).to({x:100,x:h-450},3000,Phaser.Easing.Linear.None,true,300,1000000,true);

        keyboard = game.input.keyboard.createCursorKeys();
       
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.enable(pipo);
        game.physics.arcade.enable(line);
        game.physics.arcade.enable(line2);       
        game.physics.arcade.enable(line3);  
        game.physics.arcade.enable(tagger);
        game.physics.arcade.enable(tagger2);
        game.physics.arcade.enable(tagger3);

        pipo.body.collideWorldBounds = true;

        button = game.add.button(10,550,'left',laro.pushLeft, this, 1, 0, 1, 0);
        button.frame = 0;
        button.scale.x = .5;

        button = game.add.button(80,550,'right',laro.pushRight, this, 0, 1, 0, 1);
        button.frame = 1;
        button.scale.x = .5;

        button = game.add.button(600,540,'jump',laro.pushWalk, this, 1, 0, 1, 0);
        button.scale.x = 1;
        button.scale.y = 1;


        scoreText = game.add.text(550,20,'Score: 0',{font:"25px",fill:"red"});
        scoreText.fixedToCamera = true;
        GameOverText = game.add.text(310,300,'',{font:"40px",fill:"red"});
        GameOverText.fixedToCamera = true;
        hiScore = game.add.text(65,20,'High Score: '+ laro.retrievehiScore(),{font:"25px",fill:"red"});
        hiScore.fixedToCamera = true;

        titlepage = game.add.sprite(0,0, "title");
        game._paused = true;
        startButton = game.add.button(380, 300, 'start', laro.actionOnClick, this, 2, 1, 0);

        
     

            pause_label.inputEnabled = true;
            pause_label.events.onInputUp.add(function () {
            game._paused = true;
            });

            game.input.onDown.add(unpause, self);
            function unpause(event){
            if(game._paused){ 

                bgm.play();
                game._paused = false;
            }
        };


},
update:function() {
        game.physics.arcade.overlap(pipo,tagger,laro.killPipo);
        game.physics.arcade.overlap(pipo,tagger2,laro.killPipo);
        game.physics.arcade.overlap(pipo,tagger3,laro.killPipo);
        game.physics.arcade.collide(pipo,line,laro.killLine);
        game.physics.arcade.collide(pipo,line2,laro.killLine2);
        game.physics.arcade.collide(pipo,line3,laro.killLine3);

       

        if(keyboard.left.isDown){
            pipo.animations.play("walk-left");
            pipo.body.velocity.x = -400;
        }
        else if(keyboard.right.isDown){
            pipo.animations.play("walk-right");
            pipo.body.velocity.x = 400;
        }
        else if(keyboard.up.isDown){
            pipo.animations.play("jump");
            pipo.body.velocity.y = -400;
        }
        else if(keyboard.down.isDown){
            pipo.body.velocity.y = 400;
        }        
        else{
            pipo.body.velocity.x = 0;
            pipo.body.velocity.y = 0;
            pipo.animations.stop();
            pipo.frame = 0;
        }
    }

}

