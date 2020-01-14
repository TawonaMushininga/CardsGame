/// <reference path="./myGameGroup.ts"/>

module my_game
{
    export class myGameMainPanel extends myGameGroup
    {
        backgroundImage:Phaser.Image;
        
        constructor(_game:any, _parent:any,_attributes:any )
        {
            super(_game, _parent, _attributes);

            this.backgroundImage = this["children"]["0"];


            console.log("got the image");
        }
    }
}