
/// <reference path="./myGameCardsGrid.ts"/>
/// <reference path="./myGameMaths.ts"/>


module my_game
{
    export class myGameUserPanel extends myGameGroup
    {
        shuffleSprite: Phaser.Sprite;
        anim: Phaser.Animation;
        mainButton: Phaser.Button;
        gameGrid: my_game.myGameCardsGrid;
        gameMaths: my_game.myGameMaths;
        playState: any;

        balanceTitle: Phaser.Text;
        betPerNumberTitle:Phaser.Text;
        winTitle:Phaser.Text;

        balance: Phaser.Text;
        betPerNumber:Phaser.Text;
        win:Phaser.Text;

        finalImage:Phaser.Image;
        settings: my_game.myGameSettingsPopup;


        constructor(_game: any, _parent:any, _attributes:any )
        {
            super(_game, _parent,_attributes); // add to scene keep true
            this.shuffleSprite = <Phaser.Sprite>this.children[1];
            //this.playShuffleAnim();

            this.mainButton = <Phaser.Button>this.children[2];

            this.mainButton.onInputDown.add(this.onInputDown,this);
            this.mainButton.onInputUp.add(this.onInputUp,this);
            this.mainButton.onInputOver.add(this.onInputOver,this);
            this.mainButton.onInputOut.add(this.onInputOut,this);

            this.gameGrid = <my_game.myGameCardsGrid>this.children[0];
            this.gameMaths = new my_game.myGameMaths();

            this.balanceTitle = <Phaser.Text>this.children[3];
            this.betPerNumberTitle = <Phaser.Text>this.children[4];
            this.winTitle = <Phaser.Text>this.children[5];

            this.winTitle.setText("WIN",true);
            this.balanceTitle.setText("BALANCE",true);
            this.betPerNumberTitle.setText("BET",true);

            // initialise meter values
            this.balance = <Phaser.Text>this.children[6];
            this.betPerNumber = <Phaser.Text>this.children[7];
            this.win = <Phaser.Text>this.children[8];

            var _currentState:any = this.gameMaths.getCurrentState();
            this.balance.setText(_currentState.balance + "");
            this.betPerNumber.setText (_currentState.betPerNumber + "");
            this.win.setText(_currentState.win + "");

            this.finalImage = <Phaser.Image>this.children[9];
            this.finalImage.alpha = 1; 

            this.settings = <my_game.myGameSettingsPopup>this.children[10];
            // 

        }

        onInputDown()
        {
            console.log ("mainButton Pressed");
            var _betPositions:any = this.gameGrid.getSelectedNumbersArray();
            // only play if there is a card selection
            if(_betPositions.length > 0)
            {
                this.playState = this.gameMaths.play(_betPositions);
                this.playShuffleAnim();
            }
            
        }
        onInputUp()
        {

        }
        onInputOver()
        {

        }
        onInputOut()
        {

        }


        initialise()
        {
            super.initialise();
            //this.playShuffleAnim();
        }

        playShuffleAnim()
        {
            this.gameGrid.resetGrid();
            this.shuffleSprite.animations.add('start',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],12,true);
            this.shuffleSprite.animations.getAnimation("start").onComplete.addOnce(this.onShuffleComplete,this);
            this.shuffleSprite.play("start",8, false);
            this.finalImage.alpha = 0;
        }

        onShuffleComplete()
        {
            // on complete
            if(this.playState.win > 0)
            {
                this.gameGrid.playWinCelebration(this.playState.luckyNumber);
            }
            //this.gameGrid.playWinCelebration(this.playState.luckyNumber);
            // update meters
            this.betPerNumber.setText(this.playState.betPerNumber,true);
            this.win.setText(this.playState.win + "");
            this.balance.setText(this.playState.balance + "");

            var _currentState:any = this.gameMaths.getCurrentState();
            var _luckyNumber: number = _currentState.luckyNumber;
            this.finalImage.loadTexture("card" + _luckyNumber,0);// = "card" + _luckyNumber;
            this.finalImage.alpha = 1;

            // update settings menu
            this.settings.setHighScore(this.playState.win);
            this.settings.setPreviousScore(this.gameMaths.getPreviousState().win);

        }

        /*private addArrayNumbers(array:number[]): number
        {
            var result:number = 0; 
            for(var i:number  = 0; i < array.length; i++)
            {
                result += array[i]; 
            }
            return result;
        }*/

        update()
        {
            super.update();
        }
    }
}