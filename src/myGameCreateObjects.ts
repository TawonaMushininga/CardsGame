
/// <reference path="../game_config/layout_config.ts"/>


module my_game
{
    export class myGameCreateObjects extends Phaser.Group
    {
        game: any;
        layout: any;
        phaserCreator:Phaser.GameObjectCreator;
        constructor(_game: any)
        {
            super(_game,new PIXI.DisplayObjectContainer(),"MainGame",true);
            this.phaserCreator = new Phaser.GameObjectCreator(_game);
            this.game = _game;
            this.layout = my_game.layout;
            this.createObjects()
        }

        createObjects()
        {
            // create object from back to front / layering really, otherwise hide them
            var _current_layout;
            // create preloader
            _current_layout = my_game.layout.preloader;

            // create  main panel
            _current_layout = my_game.layout.main_panel.main_panel;
            for (var i = 0; i < _current_layout.length; i++ )
            {
                this.createObj(_current_layout[i]);
            }
        }

        public createObj(_attributes:any)
        {
            var _object:any;

            if(_attributes.className) // check if its a group of  objects
            {
                if(_attributes.className === "String" && _attributes.className == "group") // if a 
                {
                    // create an object with no class, most likely gonna add to its children
                    
                }
                else // there is a controlling class
                {

                    //( _game:any, _parent:any, _id:string, _addToScene:boolean = true)
                    //_object = new Phaser.Group( this.game, null, _attributes.className,true);
                    _object = this.phaserCreator.group(this,_attributes.id_name,true);
                }
            }

            if(_attributes.type) // its not a controlling class, just an object
            {
                if(_attributes.type == "image")
                {
                    // create an image // default to zero everything
                    _object = this.phaserCreator.image(0,0,0,0);
                }
            }

            if(_attributes.position)
            {
                _object.x = _attributes.position.x;
                _object.y = _attributes.position.y; 
            }

            if(_attributes.anchor)
            {
                _object.anchor.x = _attributes.anchor.x;
                _object.anchor.y = _attributes.anchor.y; 
            }

            if( _attributes.children)
            {
                // recall this function, might have to be carefull with recursion here
                this.createChildren(_object,_attributes.children)
            }
        }

        private createChildren(_parent,_children)
        {
            for ( var i=0; i <_children.length; i++)
            {
                var _child = _children[i];
                this.createObj(_child);
                //this.addChild()
            }
        }


    }
}