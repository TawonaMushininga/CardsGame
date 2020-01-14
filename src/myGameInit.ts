
//// <reference path="../js/phaser.js"/>
///<reference path="../js/phaser/phaser.d.ts"/>
/// <reference path="../game_config/assets_config.ts"/>
/// <reference path="./myGameCreateObjects.ts"/>


module my_game
{
    // use a game size, 1000
    export class myGameInit
    {
        //let message:string = 'hello world';

        game:any;
        assets:any;
        page:any;
        onComplete: Phaser.Signal;
        onCompeleListener: Phaser.Events
        constructor(assets:any)//, game: any)
        {

            this.assets = assets;
            //Phaser.Device.
            //1150,610
            this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO);//game;
            window.scrollTo(0,0);
            this.onComplete = new Phaser.Signal();
            this.start();


        };

        //var assets_config = my_game.assets.load;
        initialise()
        {
            
        }
    
        public start()
        {
            // use a game size, 1000
            console.log("in start");
            var GameState = {

                preload:function(){
                    // load all assets and images-- preloader
                    var assetsArray:any = my_game.assets.assets.load;
                    for( var i = 0; i < assetsArray.length  ; i ++ )
                    {
                        var _item:any = assetsArray[i];

                        if( _item.type == "image" )
                        {
                            this.game.load.image(_item.key , _item.path);
                        }

                        if(_item.type == "sprite")
                        {
                            this.game.load.spritesheet(
                                _item.key,
                                _item.path,
                                _item.width,
                                _item.height,
                                _item.frames

                            );
                        }

                        if(_item.type == "sound")
                        {
                            this.game.load.audio(
                                _item.key,
                                _item.path
                            );
                        }
                    }
                    
                },
            
                create: function(){
                    //this.background = this.game.add.sprite(0,0,'background');
                    //var ObjectCreator: my_game.myGameCreateObjects = new my_game.myGameCreateObjects(this.game);

                    //create an empty phaser group
                    this.page = new my_game.myGameGroup( this.game, this.world, my_game.layout.main_panel.main_panel[0]);

                },
                update: function()
                {
            
                }
            };
            // add state to game
            this.game.state.add('GameState',GameState);
            this.game.state.start('GameState',false,false);
            //this.page.initialise();

            // add  a signal
            //this.onComplete.dispatch();

            //this.onComplete.

        }
    }
}