/// <reference path="./myGameGroup.ts"/>


module my_game
{
    export class myGamePopup extends my_game.myGameGroup
    {
    
    
        button: Phaser.Button

        constructor(_game: any, _parent:any, _attributes:any )
        {
            super(_game, _parent, _attributes );
            this.visible  = true;
            this.alpha = 1;

            // add button at the end of all the children
            this.button = new Phaser.Button(_game,_attributes.x,_attributes.y,_attributes.key,
                                            this.onPopupClick,this, _attributes.over,_attributes.out,
                                            _attributes.down, _attributes.up) ;
            this.add(this.button,false,0);

            /*this.button.onInputDown.add(this.onInputDown,this);
            this.button.onInputUp.add(this.onInputUp,this);
            this.button.onInputOver.add(this.onInputOver,this);
            this.button.onInputOut.add(this.onInputOut,this);*/
        }

        public onPopupClick()
        {
            if(this.children[1].alpha == 0 || this.children[1].visible == false)
            {
                for(var i = 1; i < this.children.length; i++)
                {
                    this.children[i].alpha = 1;
                    this.children[i].visible = true;
                }  
                
            }
            else if(this.children[1].alpha == 1 || this.children[1].visible == true)
            {
                for(var i = 1; i < this.children.length; i++)
                {
                    this.children[i].alpha = 0;
                    this.children[i].visible =false;
                }
            }
            
        }

        /*private onInputDown()
        {
            this.child
        }
        private onInputUp()
        {
            
        }
        private onInputOver()
        {
            
        }
        private onInputOut()
        {
            
        }*/


    }

}