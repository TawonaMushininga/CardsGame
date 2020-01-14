///<reference path="../js/phaser/phaser.d.ts"/>
/// <reference path="../game_config/assets_config.ts"/>
/// <reference path="./myGameInit.ts"/>


function gameStart()
{
    var assets = my_game.assets.assets;
    var game:Phaser.Game = new Phaser.Game(1500, 610, Phaser.AUTO);
    var init: my_game.myGameInit = new my_game.myGameInit(assets)//,game);
}