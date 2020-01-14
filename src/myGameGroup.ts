module my_game
{
    export class myGameGroup extends Phaser.Group
    {
        constructor(_game: any, _parent:any, _attributes:any )
        {
            super(_game,_parent,_attributes.id_name,true); // add to scene keep true

            this.buildUp(_game,_parent,_attributes);

            // add an initialis
            setTimeout(this.initialise,3000);
        }

        initialise()
        {
            console.log("init executed");
        }

        update()
        {
            super.update();
        }

        buildUp(_game:any, _parent:any, _attributes:any)
        {
            // this is the object set its attributes        

            if(_attributes.position)
            {
                this.x = _attributes.position.x;
                this.y = _attributes.position.y; 
            }

            if(_attributes.anchor)
            {
                this["anchor"].x = _attributes.anchor.x;
                this["anchor"].y = _attributes.anchor.y; 
            }
            if(_attributes.id_name)
            {
                this.name = _attributes.id_name;
            }


            // fix the children

            for(var i= 0; i < _attributes.children.length; i++)
            {
                var _childAttributes = _attributes.children[i];

                if(_childAttributes.className) // check if its a group of  objects
                {
                    if(_attributes.className === "String" && _attributes.className == "group") // if a 
                    {
                        // create an object with no class, most likely gonna add to its children
                        
                    }
                    else // there is a controlling class
                    {
                        var _object = Object.create( _childAttributes.className.prototype );
                        _object.constructor.call(_object, _game, this, _childAttributes); //game, parent, attirbutes 
                        this.add(_object);
                    }
                }

                if(_childAttributes.type) // its not a controlling class, just an object
                {
                    if(_childAttributes.type == "image")
                    {
                        // create an image
                        var _image =  new Phaser.Image(
                            _game, // phaser game object
                            _childAttributes.position.x, // y pos
                            _childAttributes.position.y, // x pos
                            _childAttributes.key, // key
                            0); // frame
                            if(_childAttributes.scale)
                            {
                                _image.scale.x = _childAttributes.scale.x;
                                _image.scale.y = _childAttributes.scale.y;
                            }
    
                            

                        this.add(_image);
                    }

                    if(_childAttributes.type == "sprite")
                    {
                        var _sprite =  new Phaser.Sprite(
                            _game,
                            _childAttributes.position.x, // y pos
                            _childAttributes.position.y,
                            _childAttributes.key, // key
                            2, // x pos,
                            );
                            //_sprite.animations.add("start",[0,1,2],10,true);
                        if(_childAttributes.scale)
                        {
                            _sprite.scale.x = _childAttributes.scale.x;
                            _sprite.scale.y = _childAttributes.scale.y;
                        }

                        this.add(_sprite);
                    }

                    if(_childAttributes.type == "button")
                    {
                        var _button =  new Phaser.Button(
                            _game,
                            _childAttributes.position.x,
                            _childAttributes.position.y,
                            _childAttributes.key,
                            null,
                            this,
                            _childAttributes.over,
                            _childAttributes.out,
                            _childAttributes.down,
                            _childAttributes.upB
                            );
                        this.add(_button);
                    }

                    if(_childAttributes.type == "text")
                    {
                        var _text =  new Phaser.Text(
                            _game,
                            _childAttributes.position.x,
                            _childAttributes.position.y,
                            "");
                        this.add(_text);
                    }

                    /*if(_childAttributes.type == "sound")
                    {
                        var _sound =  new Phaser.Sound(_game,_childAttributes.key,_childAttributes.volue, _attributes.loop);
                            
                        this.add(_sound);
                    }*/


                }

            }
        }
    }
}