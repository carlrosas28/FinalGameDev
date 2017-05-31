menuGame={
	create:function(){
    

	},
	update:function(){
		    game.state.start("playGame");

	},

}
var laro = function(){
    "use_strict";
    return {

            actionOnClick:function(){
            titlepage.visible =! startButton.visible;
            startButton.visible = false;
            game._paused = false;
            startButton.destroy();
            
            setTimeout(function(){
                button.frame=0;
            },0)
               
        }, 


            killLine:function(pipo, line){
            if (line.kill()){
            a += 2;
            score.play();
            scoreText.text = "Score: "+a;
            }
        },

            killLine2:function(pipo, line2){
            if (line2.kill()){
                 a += 2;
            score.play();
            scoreText.text = "Score: "+a;
            }
        },
            killLine3:function(pipo, line3){
            if (line3.kill()){
                  a += 2;
            score.play();
            scoreText.text = "Score: "+a;
        }
    },
  
        pushLeft:function(){
            pipo.body.velocity.x= -1000;
            pipo.animations.play('walk-left');
        },
        pushRight:function(){
            pipo.body.velocity.x= 1000;
            pipo.animations.play('walk-right');                  
        },
        pushWalk:function(){
                pipo.body.velocity.y= -1000;
                pipo.animations.play('jump');
            
        },        
        killPipo:function(pipo,tagger,tagger2,tagger3){
            pipo.kill();
            bgm.stop();            
            game._paused = true;

            GameOverText.text = 'Game Over';
            restart=game.add.button(380,350,"restart",laro.restart);

            if (laro.retrievehiScore()<=a){
                localStorage.setItem("gameStorage",a);
            }
        },
            restart:function(){
                window.location.href=window.location.href;
            },

                retrievehiScore:function(){
            return ((localStorage.getItem("gameStorage") != null) || (localStorage.getItem("gameStorage") != ""))?localStorage.getItem("gameStorage"):0;
        } 
    }
}();