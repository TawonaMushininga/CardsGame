/// <reference path="./myGamePopup.ts"/>


module my_game
{
    export class myGameMainMenu extends myGamePopup
    {

        backgroundPanel: Phaser.Image;

        gameRulesTitle: Phaser.Text;
        rule1: Phaser.Text;
        rule2: Phaser.Text;
        rule3: Phaser.Text;
        rule4: Phaser.Text;


        constructor(_game: any, _parent:any, _attributes:any )
        {
            super(_game,_parent,_attributes);

            this.gameRulesTitle = <Phaser.Text>this.children[2];
            this.rule1 = <Phaser.Text>this.children[3];
            this.rule2 = <Phaser.Text>this.children[4];
            this.rule3 = <Phaser.Text>this.children[5];
            this.rule4 = <Phaser.Text>this.children[6];


            this.gameRulesTitle.setText("GAME RULES:");
            this.rule1.setText("Select an image to place a bet on it.");
            this.rule2.setText("Press shuffle button to play.");
            this.rule2.setText("The probability of a win is 1/36.");
            this.rule4.setText ("Press menu button to close/open menu.");
        }
    }
}