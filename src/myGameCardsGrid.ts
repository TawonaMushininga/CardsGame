module my_game
{
    export class myGameCardsGrid extends myGameGroup
    {
        cardsGrid:Phaser.Image[];
        cardsSelectionGrid: Phaser.Image[];
        winAnimation:Phaser.Animation;
        winSprite: Phaser.Sprite;
        gfxBox:Phaser.Graphics
        selectBoolean:boolean[];
        
        constructor(_game: any, _parent:any, _attributes:any )
        {
            super(_game, _parent,_attributes); // add to scene keep true

            this.cardsGrid = []; // create empty array
            this.selectBoolean = [];

            for(var i = 0; i < _attributes.children.length-1; i++)
            {
                this.cardsGrid[i] = <Phaser.Image>this.children[i];
                if( i > 35 && i < this.children.length-1)
                {
                    this.cardsGrid[i].alpha = 0;
                    this.cardsGrid[i].inputEnabled = true;
                    this.cardsGrid[i].events.onInputUp.add( this["onCardClick"+ (i-36)], this,null, i);
                    this.selectBoolean[i-36] = false;

                }
            }
            this.winSprite =  <Phaser.Sprite> this.children[ _attributes.children.length-1];
            this.winSprite.alpha = 0;
        }

        onCardClick0(_id:any)
        {
            this.onClick(0);
        }
        onCardClick1(_id:any)
        {
            this.onClick(1);
        }
        onCardClick2(_id:any)
        {
            this.onClick(2);
        }
        onCardClick3(_id:any)
        {
            this.onClick(3);
        }
        onCardClick4(_id:any)
        {
            this.onClick(4);
        }
        onCardClick5(_id:any)
        {
            this.onClick(5);
        }
        onCardClick6(_id:any)
        {
            this.onClick(6);
        }
        onCardClick7(_id:any)
        {
            this.onClick(7);
        }
        onCardClick8(_id:any)
        {
            this.onClick(8);
        }
        onCardClick9(_id:any)
        {
            this.onClick(9);
        }

        ////////////
        onCardClick10(_id:any)
        {
            this.onClick(10);
        }
        onCardClick11(_id:any)
        {
            this.onClick(11);
        }
        onCardClick12(_id:any)
        {
            this.onClick(12);
        }
        onCardClick13(_id:any)
        {
            this.onClick(13);
        }
        onCardClick14(_id:any)
        {
            this.onClick(14);
        }
        onCardClick15(_id:any)
        {
            this.onClick(15);
        }
        onCardClick16(_id:any)
        {
            this.onClick(16);
        }
        onCardClick17(_id:any)
        {
            this.onClick(17);
        }
        onCardClick18(_id:any)
        {
            this.onClick(18);
        }
        onCardClick19(_id:any)
        {
            this.onClick(19);
        }
        /////////////////////////////
        onCardClick20(_id:any)
        {
            this.onClick(20);
        }
        onCardClick21(_id:any)
        {
            this.onClick(21);
        }
        onCardClick22(_id:any)
        {
            this.onClick(22);
        }
        onCardClick23(_id:any)
        {
            this.onClick(23);
        }
        onCardClick24(_id:any)
        {
            this.onClick(24);
        }
        onCardClick25(_id:any)
        {
            this.onClick(25);
        }
        onCardClick26(_id:any)
        {
            this.onClick(26);
        }
        onCardClick27(_id:any)
        {
            this.onClick(27);
        }
        onCardClick28(_id:any)
        {
            this.onClick(28);
        }
        onCardClick29(_id:any)
        {
            this.onClick(29);
        }

        /////////////////////////
        onCardClick30(_id:any)
        {
            this.onClick(30);
        }
        onCardClick31(_id:any)
        {
            this.onClick(31);
        }
        onCardClick32(_id:any)
        {
            this.onClick(32);
        }
        onCardClick33(_id:any)
        {
            this.onClick(33);
        }
        onCardClick34(_id:any)
        {
            this.onClick(34);
        }
        onCardClick35(_id:any)
        {
            this.onClick(35);
        }
        
        onClick(_id:number)
        {
            if(this.cardsGrid[_id+36].alpha > 0) // aleardy selected
            {
                this.cardsGrid[_id+36].alpha = 0;
                this.selectBoolean[_id] = false;
            }
            else if(this.cardsGrid[_id+36].alpha <= 0 && !this.selectBoolean[_id])
            {
                this.cardsGrid[_id+36].alpha = 1;
                this.selectBoolean[_id] = true;
            }
        }

        public getSelectedNumbersArray(): any
        {
            var _selectedNumbers:number[] = [];
            var _idx:number = 0;
            for(var i:number = 0; i < this.selectBoolean.length; i++)
            {
                if(this.selectBoolean[i])
                {
                    _selectedNumbers[_idx] = i;
                    _idx++;
                }
            }
            return _selectedNumbers;
        }

        public resetGrid()
        {
            for(var i:number = 0; i < this.selectBoolean.length; i++)
            {
                this.selectBoolean[i] = false;
                this.cardsGrid[i+36].alpha = 0;
            }
        }

        // function play win animation on wining cards
        public playWinCelebration(cardNumber: number)
        {
            //cardNumber = 8;
            this.winSprite.alpha = 1;
            this.winSprite.x = this.cardsGrid[cardNumber].x-18 ;
            this.winSprite.y = this.cardsGrid[cardNumber].y-22 ;
            this.winSprite.animations.add("winAnim",
                [0,1,2,3,4,5,6,7,8,9,
                0,1,2,3,4,5,6,7,8,9,
                0,1,2,3,4,5,6,7,8,9,
                0,1,2,3,4,5,6,7,8,9,
                ],8,false);
            this.winSprite.animations.getAnimation("winAnim").onComplete.addOnce(this.onCelebrationComplete,this);
            this.winSprite.play("winAnim");

        }

        public showLoss( cardNumbers:number[], _luckyNumber: number)
        {

        }

        public onCelebrationComplete()
        {

        }

        public clearWinAnim()
        {
            this.winSprite.alpha = 0;
        }



    }
}