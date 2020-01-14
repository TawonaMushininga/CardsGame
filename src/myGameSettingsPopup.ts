/// <reference path="./myGamePopup.ts"/>

module my_game
{
    export class myGameSettingsPopup extends myGamePopup
    {

        backgroundPanel: Phaser.Image;
        soundButton: Phaser.Button;
        sound: Phaser.Sound;

        previousScoreTitle: Phaser.Text;
        previousScore: Phaser.Text;

        highScoreTitle: Phaser.Text;
        highScore: Phaser.Text;

        soundTitle: Phaser.Text;
        currenthighScore: number = 0;

        constructor(_game: any, _parent:any, _attributes:any )
        {
            super(_game,_parent,_attributes);
            // background
            this.backgroundPanel = <Phaser.Image>this.children[1];
            // Highscore
            this.highScoreTitle = <Phaser.Text> this.children[2];
            this.highScoreTitle.setText("HIGH SCORE: ");

            this.highScore = <Phaser.Text> this.children[3];
            this.highScore.setText("0");

            //previous score
            this.previousScoreTitle = <Phaser.Text> this.children[4];
            this.previousScoreTitle.setText("PREVIOUS: ");

            this.previousScore = <Phaser.Text> this.children[5];
            this.previousScore.setText("0");


            // sound
            this.soundButton = <Phaser.Button> this.children[6];
            this.soundButton.onInputDown.add(this.onInputDown,this);
            this.soundButton.onInputUp.add(this.onInputUp,this);
            this.soundButton.onInputOver.add(this.onInputOver,this);
            this.soundButton.onInputOut.add(this.onInputOut,this);

            this.soundTitle = <Phaser.Text> this.children[7];
            this.soundTitle.setText("SOUND: ");
            // sound, just instatiate in this class

            this.sound = new Phaser.Sound(_game,"gameLoop",1,true);
            this.onPopupClick();

        }

        setHighScore( score:number)
        {
            if(score > this.currenthighScore)
            {
                this.currenthighScore = score;
                this.highScore.setText(score + "");
            }

        }

        setPreviousScore( score:number)
        {
            this.highScore.setText(score + "");
        }

        private onInputDown()
        {
            if(this.sound.isPlaying)
            {
                this.sound.stop();
                this.soundButton.loadTexture("soundOff");
            }
            else if(!this.sound.isPlaying)
            {
                this.sound.play();
                this.soundButton.loadTexture("soundOn");
            }
        }
        private onInputUp()
        {
            
        }
        private onInputOver()
        {
            
        }
        private onInputOut()
        {
            
        }


    }
}
 