module my_game
{
    export module assets
    {
        export var assets:any = 
        {
            load:
            [
                { type: "image", key: "background", path: "assets/images/background.jpg"},

                // card images
                { type: "image", key: "card0", path: "assets/images/gamecards/2_of_clubs.png"},
                { type: "image", key: "card1", path: "assets/images/gamecards/2_of_diamonds.png"},
                { type: "image", key: "card2", path: "assets/images/gamecards/2_of_hearts.png"},
                { type: "image", key: "card3", path: "assets/images/gamecards/2_of_spades.png"},

                { type: "image", key: "card4", path: "assets/images/gamecards/3_of_clubs.png"},
                { type: "image", key: "card5", path: "assets/images/gamecards/3_of_diamonds.png"},
                { type: "image", key: "card6", path: "assets/images/gamecards/3_of_hearts.png"},
                { type: "image", key: "card7", path: "assets/images/gamecards/3_of_spades.png"},
                // 8
                { type: "image", key: "card8", path: "assets/images/gamecards/4_of_clubs.png"},
                { type: "image", key: "card9", path: "assets/images/gamecards/4_of_diamonds.png"},
                { type: "image", key: "card10", path: "assets/images/gamecards/4_of_hearts.png"},
                { type: "image", key: "card11", path: "assets/images/gamecards/4_of_spades.png"},

                { type: "image", key: "card12", path: "assets/images/gamecards/5_of_clubs.png"},
                { type: "image", key: "card13", path: "assets/images/gamecards/5_of_diamonds.png"},
                { type: "image", key: "card14", path: "assets/images/gamecards/5_of_hearts.png"},
                { type: "image", key: "card15", path: "assets/images/gamecards/5_of_spades.png"},
                // 16
                { type: "image", key: "card16", path: "assets/images/gamecards/6_of_clubs.png"},
                { type: "image", key: "card17", path: "assets/images/gamecards/6_of_diamonds.png"},
                { type: "image", key: "card18", path: "assets/images/gamecards/6_of_hearts.png"},
                { type: "image", key: "card19", path: "assets/images/gamecards/6_of_spades.png"},

                { type: "image", key: "card20", path: "assets/images/gamecards/7_of_clubs.png"},
                { type: "image", key: "card21", path: "assets/images/gamecards/7_of_diamonds.png"},
                { type: "image", key: "card22", path: "assets/images/gamecards/7_of_hearts.png"},
                { type: "image", key: "card23", path: "assets/images/gamecards/7_of_spades.png"},
                //24
                { type: "image", key: "card24", path: "assets/images/gamecards/2_of_clubs.png"},
                { type: "image", key: "card25", path: "assets/images/gamecards/2_of_diamonds.png"},
                { type: "image", key: "card26", path: "assets/images/gamecards/2_of_hearts.png"},
                { type: "image", key: "card27", path: "assets/images/gamecards/2_of_spades.png"},

                { type: "image", key: "card28", path: "assets/images/gamecards/8_of_clubs.png"},
                { type: "image", key: "card29", path: "assets/images/gamecards/8_of_diamonds.png"},
                { type: "image", key: "card30", path: "assets/images/gamecards/8_of_hearts.png"},
                { type: "image", key: "card31", path: "assets/images/gamecards/8_of_spades.png"},
                //32
                { type: "image", key: "card32", path: "assets/images/gamecards/9_of_clubs.png"},
                { type: "image", key: "card33", path: "assets/images/gamecards/9_of_diamonds.png"},
                { type: "image", key: "card34", path: "assets/images/gamecards/9_of_hearts.png"},
                { type: "image", key: "card35", path: "assets/images/gamecards/9_of_spades.png"},
                //36
                { type: "image", key: "select", path: "assets/images/select.png"},
                { type: "image", key: "popupBackground", path: "assets/images/popupBackground.png"},


                // settings menu

                { type: "image", key: "soundOff", path: "assets/images/soundOff.png"},
                { type: "image", key: "soundOn", path: "assets/images/soundOn.png"},
                { type: "image", key: "settingsBtn", path: "assets/images/settings.png"},



                // sprites
                {   
                    type: "sprite", key: "shuffleSprite", path: "assets/sprites/shuffleSprite.png",
                    width: 83,
                    height: 120,
                    frames: 36
                },
                // sprites
                {   
                    type: "sprite", key: "morph", path: "assets/sprites/symbol_highlight.png",
                    width: 214,
                    height: 230,
                    frames: 10
                },
                {   
                    type: "sprite", key: "mainButton", path: "assets/sprites/main_buttons.png",
                    width:62,
                    height: 62,
                    frames: 34
                },

                //Audio
                {   
                    type: "sound", key: "gameLoop", path: "assets/sound/gameLoop.wav",
                },


                

            ]
        }

    }
    
}
