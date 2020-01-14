/// <reference path="../src/myGameMainPanel.ts"/>
/// <reference path="../src/myGameCardsGrid.ts"/>
/// <reference path="../src/myGameUserPanel.ts"/>
/// <reference path="../src/myGameSettingsPopup.ts"/>
/// <reference path="../src/myGameMainMenu.ts"/>






module my_game
{
    export module layout
    {

        export var preloader = 
        {
            preloader:
            [
               {
                    className: "tawona",
                    position: { x: "x", y:"y"},
                    children:
                    [
                        { id:"name", type:"image", key:"key", position:{ x: "x", y:"y"}, anchor:{ x: "x", y:"y"}}
                    ]
                }
            ],
        }

        export var main_panel =
        {    
            main_panel:
            [
                
                {
                    id_name:"GameContainer",
                    position: { x: 0, y:0},
                    //anchor:{ x: 0, y:0},
                    children:
                    [
                        {
                            id_name:"MainGamePanel",
                            className: my_game.myGameMainPanel,
                            position: { x: 0, y:0},
                            //anchor:{ x: 0, y:0},
                            children:
                            [
                                { id_name:"backgroundImage", type:"image", key:"background", position:{ x:0, y:0}, anchor:{ x: 0, y:0}},
                                {
                                    id_name:"UserPanel",
                                    className: my_game.myGameUserPanel,
                                    position: { x: 0, y: 0},
                                    //anchor:{ x: 0, y:0},
                                    children:
                                    [
                                        {
                                            id_name:"cardsGrid",
                                            className: my_game.myGameCardsGrid,
                                            position: { x: 0, y: 0},
                                            //anchor:{ x: 0, y:0},
                                            children:
                                            [
                                                //row 1
                                                { id_name:"card0", type:"image", key:"card0", position:{ x:50, y:0}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card1", type:"image", key:"card1", position:{ x:150, y:0}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card2", type:"image", key:"card2", position:{ x:250, y:0}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card3", type:"image", key:"card3", position:{ x:350, y:0}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card4", type:"image", key:"card4", position:{ x:450, y:0}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card5", type:"image", key:"card5", position:{ x:550, y:0}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card6", type:"image", key:"card6", position:{ x:650, y:0}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card7", type:"image", key:"card7", position:{ x:750, y:0}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card8", type:"image", key:"card8", position:{ x:850, y:0}, anchor:{ x: 0.5, y:0.5}},

                                                // row 2
                                                { id_name:"card9", type:"image", key:"card9", position:{ x:50, y:110}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card10", type:"image", key:"card10", position:{ x:150, y:110}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card11", type:"image", key:"card11", position:{ x:250, y:110}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card12", type:"image", key:"card12", position:{ x:350, y:110}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card13", type:"image", key:"card13", position:{ x:450, y:110}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card14", type:"image", key:"card14", position:{ x:550, y:110}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card15", type:"image", key:"card15", position:{ x:650, y:110}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card16", type:"image", key:"card16", position:{ x:750, y:110}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card17", type:"image", key:"card7", position:{ x:850, y:110}, anchor:{ x: 0.5, y:0.5}},
                                                // row 3

                                                
                                                { id_name:"card18", type:"image", key:"card18", position:{ x:50, y:220}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card19", type:"image", key:"card19", position:{ x:150, y:220}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card20", type:"image", key:"card20", position:{ x:250, y:220}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card21", type:"image", key:"card21", position:{ x:350, y:220}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card22", type:"image", key:"card22", position:{ x:450, y:220}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card23", type:"image", key:"card23", position:{ x:550, y:220}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card24", type:"image", key:"card24", position:{ x:650, y:220}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card25", type:"image", key:"card25", position:{ x:750, y:220}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card26", type:"image", key:"card26", position:{ x:850, y:220}, anchor:{ x: 0.5, y:0.5}},
                                                // row 4
                                                { id_name:"card27", type:"image", key:"card27", position:{ x:50, y:330}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card28", type:"image", key:"card28", position:{ x:150, y:330}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card29", type:"image", key:"card29", position:{ x:250, y:330}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card30", type:"image", key:"card30", position:{ x:350, y:330}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card31", type:"image", key:"card31", position:{ x:450, y:330}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card32", type:"image", key:"card32", position:{ x:550, y:330}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card33", type:"image", key:"card33", position:{ x:650, y:330}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card34", type:"image", key:"card34", position:{ x:750, y:330}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"card35", type:"image", key:"card35", position:{ x:850, y:330}, anchor:{ x: 0.5, y:0.5}},

                                                // for selection purposes

                                                //row 1
                                                { id_name:"select0", type:"image", key:"select", position:{ x:60, y:20}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select1", type:"image", key:"select", position:{ x:160, y:20}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select2", type:"image", key:"select", position:{ x:260, y:20}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select3", type:"image", key:"select", position:{ x:360, y:20}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select4", type:"image", key:"select", position:{ x:460, y:20}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select5", type:"image", key:"select", position:{ x:560, y:20}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select6", type:"image", key:"select", position:{ x:660, y:20}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select7", type:"image", key:"select", position:{ x:760, y:20}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select8", type:"image", key:"select", position:{ x:860, y:20}, anchor:{ x: 0.5, y:0.5}},

                                                // row 2
                                                { id_name:"select9", type:"image", key:"select", position:{ x:60, y:130}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select10", type:"image", key:"select", position:{ x:160, y:130}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select11", type:"image", key:"select", position:{ x:260, y:130}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select12", type:"image", key:"select", position:{ x:360, y:130}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select13", type:"image", key:"select", position:{ x:460, y:130}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select14", type:"image", key:"select", position:{ x:560, y:130}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select15", type:"image", key:"select", position:{ x:660, y:130}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select16", type:"image", key:"select", position:{ x:760, y:130}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select17", type:"image", key:"select", position:{ x:860, y:130}, anchor:{ x: 0.5, y:0.5}},
                                                // row 3

                                                { id_name:"select18", type:"image", key:"select", position:{ x:60, y:240}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select19", type:"image", key:"select", position:{ x:160, y:240}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select20", type:"image", key:"select", position:{ x:260, y:240}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select21", type:"image", key:"select", position:{ x:360, y:240}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select22", type:"image", key:"select", position:{ x:460, y:240}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select23", type:"image", key:"select", position:{ x:560, y:240}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select24", type:"image", key:"select", position:{ x:660, y:240}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select25", type:"image", key:"select", position:{ x:760, y:240}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select26", type:"image", key:"select", position:{ x:860, y:240}, anchor:{ x: 0.5, y:0.5}},
                                                
                                                // row 4
                                                { id_name:"select27", type:"image", key:"select", position:{ x:60, y:350}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select28", type:"image", key:"select", position:{ x:160, y:350}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select29", type:"image", key:"select", position:{ x:260, y:350}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select30", type:"image", key:"select", position:{ x:360, y:350}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select31", type:"image", key:"select", position:{ x:460, y:350}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select32", type:"image", key:"select", position:{ x:560, y:350}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select33", type:"image", key:"select", position:{ x:660, y:350}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select34", type:"image", key:"select", position:{ x:760, y:350}, anchor:{ x: 0.5, y:0.5}},
                                                { id_name:"select35", type:"image", key:"select", position:{ x:860, y:350}, anchor:{ x: 0.5, y:0.5}},


                                                { id_name:"winAnim", type:"sprite", key:"morph", position:{ x:0, y:0}, anchor:{ x: 0.5, y:0.5},scale:{x:0.5, y:0.7}},
                                            ]
                                        },
                                        { id_name:"shuffleSprite", type:"sprite", key:"shuffleSprite", position:{ x:1000, y:150}, anchor:{ x: 0.5, y:0.5}},
                                        {
                                            id_name:"mainButton", 
                                            type:"button",
                                            key:"mainButton"/*"mainbtn"*/, 
                                            position:{ x:1000, y:450}, 
                                            anchor:{ x: 0.5, y:0.5},
                                            over:3,
                                            down: 3,
                                            up: 3,
                                            out: 3
                                        },
                                        // text objects
                                        {
                                            id_name:"balanceTitle", 
                                            type:"text",
                                            position:{ x:50, y:450}, 
                                            anchor:{ x: 0.5, y:0.5}
                                        },
                                        {
                                            id_name:"betPerNumberTitle", 
                                            type:"text",
                                            position:{ x:300, y:450}, 
                                            anchor:{ x: 0.5, y:0.5},
                                        },
                                        {
                                            id_name:"winAmountTitle", 
                                            type:"text",
                                            position:{ x:550, y:450}, 
                                            anchor:{ x: 0.5, y:0.5},
                                        },


                                        // values
                                        {
                                            id_name:"balance", 
                                            type:"text",
                                            position:{ x:50, y:500}, 
                                            anchor:{ x: 0.5, y:0.5}
                                        },
                                        {
                                            id_name:"betPerNumber", 
                                            type:"text",
                                            position:{ x:300, y:500}, 
                                            anchor:{ x: 0.5, y:0.5},
                                        },
                                        {
                                            id_name:"winAmount", 
                                            type:"text",
                                            position:{ x:550, y:500}, 
                                            anchor:{ x: 0.5, y:0.5},
                                        },
                                        { id_name:"finalImage", type:"image", key:"card25", position:{ x:1000, y:150}, anchor:{ x: 0.5, y:0.5}, scale:{x:1.2,y: 1.2}},
                                        {
                                            id_name:"settingsPopup",
                                            className: my_game.myGameSettingsPopup,
                                            key:"settingsBtn", 
                                            in: 0, out:0, over:0, up: 0,
                                            position: { x: 800, y: 430},
                                            //anchor:{ x: 0, y:0},
                                            children:
                                            [
                                                /*{
                                                    id_name:"group",
                                                    className: my_game.myGameGenericGroup,
                                                    position: { x: 0, y: 0},
                                                    children:
                                                    [*/
                                                        { id_name:"background", type:"image", key:"popupBackground", position:{ x:-610 , y:-400}, anchor:{ x: 0.5, y:0.5}},
        
                                                        // highscore
                                                        {
                                                            id_name:"highScoreTitle", 
                                                            type:"text",
                                                            position:{ x:-350, y:-330}, 
                                                            anchor:{ x: 0.5, y:0.5},
                                                        },
                                                        {
                                                            id_name:"highScore", 
                                                            type:"text",
                                                            position:{ x:-150, y:-330}, 
                                                            anchor:{ x: 0.5, y:0.5}
                                                        },
                                                        
        
                                                        // previousScore
                                                        {
                                                            id_name:"previousScoreTitle", 
                                                            type:"text",
                                                            position:{ x:-350, y:-290}, 
                                                            anchor:{ x: 0.5, y:0.5}
                                                        },
                                                        {
                                                            id_name:"previousScore", 
                                                            type:"text",
                                                            position:{ x:-150, y:-290}, 
                                                            anchor:{ x: 0.5, y:0.5},
                                                        },
                                                        //
                                                        {
                                                            id_name:"soundButton", 
                                                            type:"button",
                                                            key:"soundOff"/*"mainbtn"*/, 
                                                            position:{ x:-200, y:-270},            
                                                            anchor:{ x: 0.5, y:0.5},
                                                            over:3,
                                                            down: 3,
                                                            up: 3,
                                                            out: 3
                                                        },
                                                        {
                                                            id_name:"soundTitle", 
                                                            type:"text",
                                                            position:{ x:-350, y:-240}, 
                                                            anchor:{ x: 0.5, y:0.5},
                                                        },
                                                /*    ]
                                                }*/
                                                
                                            ]
                                        }
                                        

                                    ]
                                },
                                {
                                    id_name:"MainMenu",
                                    className: my_game.myGameMainMenu,
                                    key:"settingsBtn", 
                                    in: 0, out:0, over:0, up: 0,
                                    position: { x: 950, y: 0},
                                    //anchor:{ x: 0, y:0},
                                    children:
                                    [
                                        /*{
                                            id_name:"group",
                                            className: my_game.myGameGenericGroup,
                                            position: { x: 0, y: 0},
                                            children:
                                            [*/
                                                { id_name:"background", type:"image", key:"popupBackground", position:{ x:-900 , y:50}, anchor:{ x: 0.5, y:0.5}, scale:{x:1.2,y:1.2}},

                                                
                                                {
                                                    id_name:"gameRulesTitle", 
                                                    type:"text",
                                                    position:{ x:-530, y:110}, 
                                                    anchor:{ x: 0.5, y:0.5},
                                                },
                                                
                                                {
                                                    id_name:"rule1", 
                                                    type:"text",
                                                    position:{ x:-630, y:170}, 
                                                    anchor:{ x: 0.5, y:0.5}
                                                },
                                                {
                                                    id_name:"rule2", 
                                                    type:"text",
                                                    position:{ x:-630, y:210}, 
                                                    anchor:{ x: 0.5, y:0.5},
                                                },
                                                {
                                                    id_name:"rule3", 
                                                    type:"text",
                                                    position:{ x:-700, y:240}, 
                                                    anchor:{ x: 0.5, y:0.5},
                                                },
                                                {
                                                    id_name:"rule4", 
                                                    type:"text",
                                                    position:{ x:-680, y:270}, 
                                                    anchor:{ x: 0.5, y:0.5},
                                                },
                                        /*    ]
                                        }*/
                                        
                                    ]
                                }
                                

                            ]
                        },
                    ]
                },
                /*{
                    className: my_game.myGameMainPanel,
                    position: { x: 0, y:0},
                    anchor:{ x: 0, y:0},
                    children:
                    [
                        { id:"backgroundImage", type:"image", key:"background", position:{ x:0, y:0}, anchor:{ x: 0, y:0}}
                    ]
                },*/
                
                 
            ]
        }
    }
}