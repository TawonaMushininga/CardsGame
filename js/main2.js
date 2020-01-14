var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var my_game;
(function (my_game) {
    var assets;
    (function (assets_1) {
        assets_1.assets = {
            load: [
                { type: "image", key: "background", path: "assets/images/background.jpg" },
                // card images
                { type: "image", key: "card0", path: "assets/images/gamecards/2_of_clubs.png" },
                { type: "image", key: "card1", path: "assets/images/gamecards/2_of_diamonds.png" },
                { type: "image", key: "card2", path: "assets/images/gamecards/2_of_hearts.png" },
                { type: "image", key: "card3", path: "assets/images/gamecards/2_of_spades.png" },
                { type: "image", key: "card4", path: "assets/images/gamecards/3_of_clubs.png" },
                { type: "image", key: "card5", path: "assets/images/gamecards/3_of_diamonds.png" },
                { type: "image", key: "card6", path: "assets/images/gamecards/3_of_hearts.png" },
                { type: "image", key: "card7", path: "assets/images/gamecards/3_of_spades.png" },
                // 8
                { type: "image", key: "card8", path: "assets/images/gamecards/4_of_clubs.png" },
                { type: "image", key: "card9", path: "assets/images/gamecards/4_of_diamonds.png" },
                { type: "image", key: "card10", path: "assets/images/gamecards/4_of_hearts.png" },
                { type: "image", key: "card11", path: "assets/images/gamecards/4_of_spades.png" },
                { type: "image", key: "card12", path: "assets/images/gamecards/5_of_clubs.png" },
                { type: "image", key: "card13", path: "assets/images/gamecards/5_of_diamonds.png" },
                { type: "image", key: "card14", path: "assets/images/gamecards/5_of_hearts.png" },
                { type: "image", key: "card15", path: "assets/images/gamecards/5_of_spades.png" },
                // 16
                { type: "image", key: "card16", path: "assets/images/gamecards/6_of_clubs.png" },
                { type: "image", key: "card17", path: "assets/images/gamecards/6_of_diamonds.png" },
                { type: "image", key: "card18", path: "assets/images/gamecards/6_of_hearts.png" },
                { type: "image", key: "card19", path: "assets/images/gamecards/6_of_spades.png" },
                { type: "image", key: "card20", path: "assets/images/gamecards/7_of_clubs.png" },
                { type: "image", key: "card21", path: "assets/images/gamecards/7_of_diamonds.png" },
                { type: "image", key: "card22", path: "assets/images/gamecards/7_of_hearts.png" },
                { type: "image", key: "card23", path: "assets/images/gamecards/7_of_spades.png" },
                //24
                { type: "image", key: "card24", path: "assets/images/gamecards/2_of_clubs.png" },
                { type: "image", key: "card25", path: "assets/images/gamecards/2_of_diamonds.png" },
                { type: "image", key: "card26", path: "assets/images/gamecards/2_of_hearts.png" },
                { type: "image", key: "card27", path: "assets/images/gamecards/2_of_spades.png" },
                { type: "image", key: "card28", path: "assets/images/gamecards/8_of_clubs.png" },
                { type: "image", key: "card29", path: "assets/images/gamecards/8_of_diamonds.png" },
                { type: "image", key: "card30", path: "assets/images/gamecards/8_of_hearts.png" },
                { type: "image", key: "card31", path: "assets/images/gamecards/8_of_spades.png" },
                //32
                { type: "image", key: "card32", path: "assets/images/gamecards/9_of_clubs.png" },
                { type: "image", key: "card33", path: "assets/images/gamecards/9_of_diamonds.png" },
                { type: "image", key: "card34", path: "assets/images/gamecards/9_of_hearts.png" },
                { type: "image", key: "card35", path: "assets/images/gamecards/9_of_spades.png" },
                //36
                { type: "image", key: "select", path: "assets/images/select.png" },
                { type: "image", key: "popupBackground", path: "assets/images/popupBackground.png" },
                // settings menu
                { type: "image", key: "soundOff", path: "assets/images/soundOff.png" },
                { type: "image", key: "soundOn", path: "assets/images/soundOn.png" },
                { type: "image", key: "settingsBtn", path: "assets/images/settings.png" },
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
                    width: 62,
                    height: 62,
                    frames: 34
                },
                //Audio
                {
                    type: "sound", key: "gameLoop", path: "assets/sound/gameLoop.wav"
                },
            ]
        };
    })(assets = my_game.assets || (my_game.assets = {}));
})(my_game || (my_game = {}));
var my_game;
(function (my_game) {
    var myGameGroup = /** @class */ (function (_super) {
        __extends(myGameGroup, _super);
        function myGameGroup(_game, _parent, _attributes) {
            var _this = _super.call(this, _game, _parent, _attributes.id_name, true) || this;
            _this.buildUp(_game, _parent, _attributes);
            // add an initialis
            setTimeout(_this.initialise, 3000);
            return _this;
        }
        myGameGroup.prototype.initialise = function () {
            console.log("init executed");
        };
        myGameGroup.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        myGameGroup.prototype.buildUp = function (_game, _parent, _attributes) {
            // this is the object set its attributes        
            if (_attributes.position) {
                this.x = _attributes.position.x;
                this.y = _attributes.position.y;
            }
            if (_attributes.anchor) {
                this["anchor"].x = _attributes.anchor.x;
                this["anchor"].y = _attributes.anchor.y;
            }
            if (_attributes.id_name) {
                this.name = _attributes.id_name;
            }
            // fix the children
            for (var i = 0; i < _attributes.children.length; i++) {
                var _childAttributes = _attributes.children[i];
                if (_childAttributes.className) // check if its a group of  objects
                 {
                    if (_attributes.className === "String" && _attributes.className == "group") // if a 
                     {
                        // create an object with no class, most likely gonna add to its children
                    }
                    else // there is a controlling class
                     {
                        var _object = Object.create(_childAttributes.className.prototype);
                        _object.constructor.call(_object, _game, this, _childAttributes); //game, parent, attirbutes 
                        this.add(_object);
                    }
                }
                if (_childAttributes.type) // its not a controlling class, just an object
                 {
                    if (_childAttributes.type == "image") {
                        // create an image
                        var _image = new Phaser.Image(_game, // phaser game object
                        _childAttributes.position.x, // y pos
                        _childAttributes.position.y, // x pos
                        _childAttributes.key, // key
                        0); // frame
                        if (_childAttributes.scale) {
                            _image.scale.x = _childAttributes.scale.x;
                            _image.scale.y = _childAttributes.scale.y;
                        }
                        this.add(_image);
                    }
                    if (_childAttributes.type == "sprite") {
                        var _sprite = new Phaser.Sprite(_game, _childAttributes.position.x, // y pos
                        _childAttributes.position.y, _childAttributes.key, // key
                        2);
                        //_sprite.animations.add("start",[0,1,2],10,true);
                        if (_childAttributes.scale) {
                            _sprite.scale.x = _childAttributes.scale.x;
                            _sprite.scale.y = _childAttributes.scale.y;
                        }
                        this.add(_sprite);
                    }
                    if (_childAttributes.type == "button") {
                        var _button = new Phaser.Button(_game, _childAttributes.position.x, _childAttributes.position.y, _childAttributes.key, null, this, _childAttributes.over, _childAttributes.out, _childAttributes.down, _childAttributes.upB);
                        this.add(_button);
                    }
                    if (_childAttributes.type == "text") {
                        var _text = new Phaser.Text(_game, _childAttributes.position.x, _childAttributes.position.y, "");
                        this.add(_text);
                    }
                    /*if(_childAttributes.type == "sound")
                    {
                        var _sound =  new Phaser.Sound(_game,_childAttributes.key,_childAttributes.volue, _attributes.loop);
                            
                        this.add(_sound);
                    }*/
                }
            }
        };
        return myGameGroup;
    }(Phaser.Group));
    my_game.myGameGroup = myGameGroup;
})(my_game || (my_game = {}));
/// <reference path="./myGameGroup.ts"/>
var my_game;
(function (my_game) {
    var myGameMainPanel = /** @class */ (function (_super) {
        __extends(myGameMainPanel, _super);
        function myGameMainPanel(_game, _parent, _attributes) {
            var _this = _super.call(this, _game, _parent, _attributes) || this;
            _this.backgroundImage = _this["children"]["0"];
            console.log("got the image");
            return _this;
        }
        return myGameMainPanel;
    }(my_game.myGameGroup));
    my_game.myGameMainPanel = myGameMainPanel;
})(my_game || (my_game = {}));
var my_game;
(function (my_game) {
    var myGameCardsGrid = /** @class */ (function (_super) {
        __extends(myGameCardsGrid, _super);
        function myGameCardsGrid(_game, _parent, _attributes) {
            var _this = _super.call(this, _game, _parent, _attributes) || this;
            _this.cardsGrid = []; // create empty array
            _this.selectBoolean = [];
            for (var i = 0; i < _attributes.children.length - 1; i++) {
                _this.cardsGrid[i] = _this.children[i];
                if (i > 35 && i < _this.children.length - 1) {
                    _this.cardsGrid[i].alpha = 0;
                    _this.cardsGrid[i].inputEnabled = true;
                    _this.cardsGrid[i].events.onInputUp.add(_this["onCardClick" + (i - 36)], _this, null, i);
                    _this.selectBoolean[i - 36] = false;
                }
            }
            _this.winSprite = _this.children[_attributes.children.length - 1];
            _this.winSprite.alpha = 0;
            return _this;
        }
        myGameCardsGrid.prototype.onCardClick0 = function (_id) {
            this.onClick(0);
        };
        myGameCardsGrid.prototype.onCardClick1 = function (_id) {
            this.onClick(1);
        };
        myGameCardsGrid.prototype.onCardClick2 = function (_id) {
            this.onClick(2);
        };
        myGameCardsGrid.prototype.onCardClick3 = function (_id) {
            this.onClick(3);
        };
        myGameCardsGrid.prototype.onCardClick4 = function (_id) {
            this.onClick(4);
        };
        myGameCardsGrid.prototype.onCardClick5 = function (_id) {
            this.onClick(5);
        };
        myGameCardsGrid.prototype.onCardClick6 = function (_id) {
            this.onClick(6);
        };
        myGameCardsGrid.prototype.onCardClick7 = function (_id) {
            this.onClick(7);
        };
        myGameCardsGrid.prototype.onCardClick8 = function (_id) {
            this.onClick(8);
        };
        myGameCardsGrid.prototype.onCardClick9 = function (_id) {
            this.onClick(9);
        };
        ////////////
        myGameCardsGrid.prototype.onCardClick10 = function (_id) {
            this.onClick(10);
        };
        myGameCardsGrid.prototype.onCardClick11 = function (_id) {
            this.onClick(11);
        };
        myGameCardsGrid.prototype.onCardClick12 = function (_id) {
            this.onClick(12);
        };
        myGameCardsGrid.prototype.onCardClick13 = function (_id) {
            this.onClick(13);
        };
        myGameCardsGrid.prototype.onCardClick14 = function (_id) {
            this.onClick(14);
        };
        myGameCardsGrid.prototype.onCardClick15 = function (_id) {
            this.onClick(15);
        };
        myGameCardsGrid.prototype.onCardClick16 = function (_id) {
            this.onClick(16);
        };
        myGameCardsGrid.prototype.onCardClick17 = function (_id) {
            this.onClick(17);
        };
        myGameCardsGrid.prototype.onCardClick18 = function (_id) {
            this.onClick(18);
        };
        myGameCardsGrid.prototype.onCardClick19 = function (_id) {
            this.onClick(19);
        };
        /////////////////////////////
        myGameCardsGrid.prototype.onCardClick20 = function (_id) {
            this.onClick(20);
        };
        myGameCardsGrid.prototype.onCardClick21 = function (_id) {
            this.onClick(21);
        };
        myGameCardsGrid.prototype.onCardClick22 = function (_id) {
            this.onClick(22);
        };
        myGameCardsGrid.prototype.onCardClick23 = function (_id) {
            this.onClick(23);
        };
        myGameCardsGrid.prototype.onCardClick24 = function (_id) {
            this.onClick(24);
        };
        myGameCardsGrid.prototype.onCardClick25 = function (_id) {
            this.onClick(25);
        };
        myGameCardsGrid.prototype.onCardClick26 = function (_id) {
            this.onClick(26);
        };
        myGameCardsGrid.prototype.onCardClick27 = function (_id) {
            this.onClick(27);
        };
        myGameCardsGrid.prototype.onCardClick28 = function (_id) {
            this.onClick(28);
        };
        myGameCardsGrid.prototype.onCardClick29 = function (_id) {
            this.onClick(29);
        };
        /////////////////////////
        myGameCardsGrid.prototype.onCardClick30 = function (_id) {
            this.onClick(30);
        };
        myGameCardsGrid.prototype.onCardClick31 = function (_id) {
            this.onClick(31);
        };
        myGameCardsGrid.prototype.onCardClick32 = function (_id) {
            this.onClick(32);
        };
        myGameCardsGrid.prototype.onCardClick33 = function (_id) {
            this.onClick(33);
        };
        myGameCardsGrid.prototype.onCardClick34 = function (_id) {
            this.onClick(34);
        };
        myGameCardsGrid.prototype.onCardClick35 = function (_id) {
            this.onClick(35);
        };
        myGameCardsGrid.prototype.onClick = function (_id) {
            if (this.cardsGrid[_id + 36].alpha > 0) // aleardy selected
             {
                this.cardsGrid[_id + 36].alpha = 0;
                this.selectBoolean[_id] = false;
            }
            else if (this.cardsGrid[_id + 36].alpha <= 0 && !this.selectBoolean[_id]) {
                this.cardsGrid[_id + 36].alpha = 1;
                this.selectBoolean[_id] = true;
            }
        };
        myGameCardsGrid.prototype.getSelectedNumbersArray = function () {
            var _selectedNumbers = [];
            var _idx = 0;
            for (var i = 0; i < this.selectBoolean.length; i++) {
                if (this.selectBoolean[i]) {
                    _selectedNumbers[_idx] = i;
                    _idx++;
                }
            }
            return _selectedNumbers;
        };
        myGameCardsGrid.prototype.resetGrid = function () {
            for (var i = 0; i < this.selectBoolean.length; i++) {
                this.selectBoolean[i] = false;
                this.cardsGrid[i + 36].alpha = 0;
            }
        };
        // function play win animation on wining cards
        myGameCardsGrid.prototype.playWinCelebration = function (cardNumber) {
            //cardNumber = 8;
            this.winSprite.alpha = 1;
            this.winSprite.x = this.cardsGrid[cardNumber].x - 18;
            this.winSprite.y = this.cardsGrid[cardNumber].y - 22;
            this.winSprite.animations.add("winAnim", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
            ], 8, false);
            this.winSprite.animations.getAnimation("winAnim").onComplete.addOnce(this.onCelebrationComplete, this);
            this.winSprite.play("winAnim");
        };
        myGameCardsGrid.prototype.showLoss = function (cardNumbers, _luckyNumber) {
        };
        myGameCardsGrid.prototype.onCelebrationComplete = function () {
        };
        myGameCardsGrid.prototype.clearWinAnim = function () {
            this.winSprite.alpha = 0;
        };
        return myGameCardsGrid;
    }(my_game.myGameGroup));
    my_game.myGameCardsGrid = myGameCardsGrid;
})(my_game || (my_game = {}));
var my_game;
(function (my_game) {
    var myGameMaths = /** @class */ (function () {
        function myGameMaths() {
            this.previousState = {
                win: 0,
                betPerNumber: 1,
                luckyNumber: 0,
                balance: 1000
            };
            this.currentState = {
                win: 0,
                betPerNumber: 1,
                luckyNumber: 0,
                balance: 1000
            };
        }
        myGameMaths.prototype.getCurrentState = function () {
            return this.currentState;
        };
        myGameMaths.prototype.getPreviousState = function () {
            return this.previousState;
        };
        myGameMaths.prototype.play = function (betNumbers) {
            // set betValue and Update
            //this.setBetPerNumber(_betPerNumber);
            // update previous bet per number
            this.previousState.betPerNumber = this.currentState.betPerNumber;
            // update previous state
            this.previousState.win = this.currentState.win;
            this.previousState.luckyNumber = this.currentState.luckyNumber;
            //Update balance before play
            this.currentState.balance -= (betNumbers.length * this.currentState.betPerNumber);
            var _luckyNumber = Math.floor(Math.random() * my_game.myGameMaths.gridLength);
            var _currentWin = 0;
            for (var i = 0; i < betNumbers.length; i++) {
                if (_luckyNumber == betNumbers[i]) {
                    _currentWin += this.currentState.betPerNumber * my_game.myGameMaths.gridLength;
                }
            }
            this.currentState.win = _currentWin;
            this.currentState.balance += _currentWin;
            this.currentState.luckyNumber = _luckyNumber;
            // update Balance After Play
            this.currentState.balance += this.currentState.win;
            // check deep copy issues, just in case
            var _currentStateTemp = {
                win: 0,
                betPerNumber: 1,
                luckyNumber: 0,
                balance: 1000
            };
            _currentStateTemp.win = this.currentState.win;
            _currentStateTemp.betPerNumber = this.currentState.betPerNumber;
            _currentStateTemp.luckyNumber = this.currentState.luckyNumber;
            _currentStateTemp.balance = this.currentState.balance;
            return _currentStateTemp;
        };
        myGameMaths.prototype.setBetPerNumber = function (_newBetPerNumber) {
            // update to new value
            this.currentState.betPerNumber = _newBetPerNumber;
        };
        myGameMaths.gridLength = 36;
        return myGameMaths;
    }());
    my_game.myGameMaths = myGameMaths;
})(my_game || (my_game = {}));
/// <reference path="./myGameCardsGrid.ts"/>
/// <reference path="./myGameMaths.ts"/>
var my_game;
(function (my_game) {
    var myGameUserPanel = /** @class */ (function (_super) {
        __extends(myGameUserPanel, _super);
        function myGameUserPanel(_game, _parent, _attributes) {
            var _this = _super.call(this, _game, _parent, _attributes) || this;
            _this.shuffleSprite = _this.children[1];
            //this.playShuffleAnim();
            _this.mainButton = _this.children[2];
            _this.mainButton.onInputDown.add(_this.onInputDown, _this);
            _this.mainButton.onInputUp.add(_this.onInputUp, _this);
            _this.mainButton.onInputOver.add(_this.onInputOver, _this);
            _this.mainButton.onInputOut.add(_this.onInputOut, _this);
            _this.gameGrid = _this.children[0];
            _this.gameMaths = new my_game.myGameMaths();
            _this.balanceTitle = _this.children[3];
            _this.betPerNumberTitle = _this.children[4];
            _this.winTitle = _this.children[5];
            _this.winTitle.setText("WIN", true);
            _this.balanceTitle.setText("BALANCE", true);
            _this.betPerNumberTitle.setText("BET", true);
            // initialise meter values
            _this.balance = _this.children[6];
            _this.betPerNumber = _this.children[7];
            _this.win = _this.children[8];
            var _currentState = _this.gameMaths.getCurrentState();
            _this.balance.setText(_currentState.balance + "");
            _this.betPerNumber.setText(_currentState.betPerNumber + "");
            _this.win.setText(_currentState.win + "");
            _this.finalImage = _this.children[9];
            _this.finalImage.alpha = 1;
            _this.settings = _this.children[10];
            return _this;
            // 
        }
        myGameUserPanel.prototype.onInputDown = function () {
            console.log("mainButton Pressed");
            var _betPositions = this.gameGrid.getSelectedNumbersArray();
            // only play if there is a card selection
            if (_betPositions.length > 0) {
                this.playState = this.gameMaths.play(_betPositions);
                this.playShuffleAnim();
            }
        };
        myGameUserPanel.prototype.onInputUp = function () {
        };
        myGameUserPanel.prototype.onInputOver = function () {
        };
        myGameUserPanel.prototype.onInputOut = function () {
        };
        myGameUserPanel.prototype.initialise = function () {
            _super.prototype.initialise.call(this);
            //this.playShuffleAnim();
        };
        myGameUserPanel.prototype.playShuffleAnim = function () {
            this.gameGrid.resetGrid();
            this.shuffleSprite.animations.add('start', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 12, true);
            this.shuffleSprite.animations.getAnimation("start").onComplete.addOnce(this.onShuffleComplete, this);
            this.shuffleSprite.play("start", 8, false);
            this.finalImage.alpha = 0;
        };
        myGameUserPanel.prototype.onShuffleComplete = function () {
            // on complete
            if (this.playState.win > 0) {
                this.gameGrid.playWinCelebration(this.playState.luckyNumber);
            }
            //this.gameGrid.playWinCelebration(this.playState.luckyNumber);
            // update meters
            this.betPerNumber.setText(this.playState.betPerNumber, true);
            this.win.setText(this.playState.win + "");
            this.balance.setText(this.playState.balance + "");
            var _currentState = this.gameMaths.getCurrentState();
            var _luckyNumber = _currentState.luckyNumber;
            this.finalImage.loadTexture("card" + _luckyNumber, 0); // = "card" + _luckyNumber;
            this.finalImage.alpha = 1;
            // update settings menu
            this.settings.setHighScore(this.playState.win);
            this.settings.setPreviousScore(this.gameMaths.getPreviousState().win);
        };
        /*private addArrayNumbers(array:number[]): number
        {
            var result:number = 0;
            for(var i:number  = 0; i < array.length; i++)
            {
                result += array[i];
            }
            return result;
        }*/
        myGameUserPanel.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return myGameUserPanel;
    }(my_game.myGameGroup));
    my_game.myGameUserPanel = myGameUserPanel;
})(my_game || (my_game = {}));
/// <reference path="./myGameGroup.ts"/>
var my_game;
(function (my_game) {
    var myGamePopup = /** @class */ (function (_super) {
        __extends(myGamePopup, _super);
        function myGamePopup(_game, _parent, _attributes) {
            var _this = _super.call(this, _game, _parent, _attributes) || this;
            _this.visible = true;
            _this.alpha = 1;
            // add button at the end of all the children
            _this.button = new Phaser.Button(_game, _attributes.x, _attributes.y, _attributes.key, _this.onPopupClick, _this, _attributes.over, _attributes.out, _attributes.down, _attributes.up);
            _this.add(_this.button, false, 0);
            return _this;
            /*this.button.onInputDown.add(this.onInputDown,this);
            this.button.onInputUp.add(this.onInputUp,this);
            this.button.onInputOver.add(this.onInputOver,this);
            this.button.onInputOut.add(this.onInputOut,this);*/
        }
        myGamePopup.prototype.onPopupClick = function () {
            if (this.children[1].alpha == 0 || this.children[1].visible == false) {
                for (var i = 1; i < this.children.length; i++) {
                    this.children[i].alpha = 1;
                    this.children[i].visible = true;
                }
            }
            else if (this.children[1].alpha == 1 || this.children[1].visible == true) {
                for (var i = 1; i < this.children.length; i++) {
                    this.children[i].alpha = 0;
                    this.children[i].visible = false;
                }
            }
        };
        return myGamePopup;
    }(my_game.myGameGroup));
    my_game.myGamePopup = myGamePopup;
})(my_game || (my_game = {}));
/// <reference path="./myGamePopup.ts"/>
var my_game;
(function (my_game) {
    var myGameSettingsPopup = /** @class */ (function (_super) {
        __extends(myGameSettingsPopup, _super);
        function myGameSettingsPopup(_game, _parent, _attributes) {
            var _this = _super.call(this, _game, _parent, _attributes) || this;
            _this.currenthighScore = 0;
            // background
            _this.backgroundPanel = _this.children[1];
            // Highscore
            _this.highScoreTitle = _this.children[2];
            _this.highScoreTitle.setText("HIGH SCORE: ");
            _this.highScore = _this.children[3];
            _this.highScore.setText("0");
            //previous score
            _this.previousScoreTitle = _this.children[4];
            _this.previousScoreTitle.setText("PREVIOUS: ");
            _this.previousScore = _this.children[5];
            _this.previousScore.setText("0");
            // sound
            _this.soundButton = _this.children[6];
            _this.soundButton.onInputDown.add(_this.onInputDown, _this);
            _this.soundButton.onInputUp.add(_this.onInputUp, _this);
            _this.soundButton.onInputOver.add(_this.onInputOver, _this);
            _this.soundButton.onInputOut.add(_this.onInputOut, _this);
            _this.soundTitle = _this.children[7];
            _this.soundTitle.setText("SOUND: ");
            // sound, just instatiate in this class
            _this.sound = new Phaser.Sound(_game, "gameLoop", 1, true);
            _this.onPopupClick();
            return _this;
        }
        myGameSettingsPopup.prototype.setHighScore = function (score) {
            if (score > this.currenthighScore) {
                this.currenthighScore = score;
                this.highScore.setText(score + "");
            }
        };
        myGameSettingsPopup.prototype.setPreviousScore = function (score) {
            this.highScore.setText(score + "");
        };
        myGameSettingsPopup.prototype.onInputDown = function () {
            if (this.sound.isPlaying) {
                this.sound.stop();
                this.soundButton.loadTexture("soundOff");
            }
            else if (!this.sound.isPlaying) {
                this.sound.play();
                this.soundButton.loadTexture("soundOn");
            }
        };
        myGameSettingsPopup.prototype.onInputUp = function () {
        };
        myGameSettingsPopup.prototype.onInputOver = function () {
        };
        myGameSettingsPopup.prototype.onInputOut = function () {
        };
        return myGameSettingsPopup;
    }(my_game.myGamePopup));
    my_game.myGameSettingsPopup = myGameSettingsPopup;
})(my_game || (my_game = {}));
/// <reference path="./myGamePopup.ts"/>
var my_game;
(function (my_game) {
    var myGameMainMenu = /** @class */ (function (_super) {
        __extends(myGameMainMenu, _super);
        function myGameMainMenu(_game, _parent, _attributes) {
            var _this = _super.call(this, _game, _parent, _attributes) || this;
            _this.gameRulesTitle = _this.children[2];
            _this.rule1 = _this.children[3];
            _this.rule2 = _this.children[4];
            _this.rule3 = _this.children[5];
            _this.rule4 = _this.children[6];
            _this.gameRulesTitle.setText("GAME RULES:");
            _this.rule1.setText("Select an image to place a bet on it.");
            _this.rule2.setText("Press shuffle button to play.");
            _this.rule2.setText("The probability of a win is 1/36.");
            _this.rule4.setText("Press menu button to close/open menu.");
            return _this;
        }
        return myGameMainMenu;
    }(my_game.myGamePopup));
    my_game.myGameMainMenu = myGameMainMenu;
})(my_game || (my_game = {}));
/// <reference path="../src/myGameMainPanel.ts"/>
/// <reference path="../src/myGameCardsGrid.ts"/>
/// <reference path="../src/myGameUserPanel.ts"/>
/// <reference path="../src/myGameSettingsPopup.ts"/>
/// <reference path="../src/myGameMainMenu.ts"/>
var my_game;
(function (my_game) {
    var layout;
    (function (layout) {
        layout.preloader = {
            preloader: [
                {
                    className: "tawona",
                    position: { x: "x", y: "y" },
                    children: [
                        { id: "name", type: "image", key: "key", position: { x: "x", y: "y" }, anchor: { x: "x", y: "y" } }
                    ]
                }
            ]
        };
        layout.main_panel = {
            main_panel: [
                {
                    id_name: "GameContainer",
                    position: { x: 0, y: 0 },
                    //anchor:{ x: 0, y:0},
                    children: [
                        {
                            id_name: "MainGamePanel",
                            className: my_game.myGameMainPanel,
                            position: { x: 0, y: 0 },
                            //anchor:{ x: 0, y:0},
                            children: [
                                { id_name: "backgroundImage", type: "image", key: "background", position: { x: 0, y: 0 }, anchor: { x: 0, y: 0 } },
                                {
                                    id_name: "UserPanel",
                                    className: my_game.myGameUserPanel,
                                    position: { x: 0, y: 0 },
                                    //anchor:{ x: 0, y:0},
                                    children: [
                                        {
                                            id_name: "cardsGrid",
                                            className: my_game.myGameCardsGrid,
                                            position: { x: 0, y: 0 },
                                            //anchor:{ x: 0, y:0},
                                            children: [
                                                //row 1
                                                { id_name: "card0", type: "image", key: "card0", position: { x: 50, y: 0 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card1", type: "image", key: "card1", position: { x: 150, y: 0 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card2", type: "image", key: "card2", position: { x: 250, y: 0 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card3", type: "image", key: "card3", position: { x: 350, y: 0 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card4", type: "image", key: "card4", position: { x: 450, y: 0 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card5", type: "image", key: "card5", position: { x: 550, y: 0 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card6", type: "image", key: "card6", position: { x: 650, y: 0 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card7", type: "image", key: "card7", position: { x: 750, y: 0 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card8", type: "image", key: "card8", position: { x: 850, y: 0 }, anchor: { x: 0.5, y: 0.5 } },
                                                // row 2
                                                { id_name: "card9", type: "image", key: "card9", position: { x: 50, y: 110 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card10", type: "image", key: "card10", position: { x: 150, y: 110 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card11", type: "image", key: "card11", position: { x: 250, y: 110 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card12", type: "image", key: "card12", position: { x: 350, y: 110 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card13", type: "image", key: "card13", position: { x: 450, y: 110 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card14", type: "image", key: "card14", position: { x: 550, y: 110 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card15", type: "image", key: "card15", position: { x: 650, y: 110 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card16", type: "image", key: "card16", position: { x: 750, y: 110 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card17", type: "image", key: "card7", position: { x: 850, y: 110 }, anchor: { x: 0.5, y: 0.5 } },
                                                // row 3
                                                { id_name: "card18", type: "image", key: "card18", position: { x: 50, y: 220 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card19", type: "image", key: "card19", position: { x: 150, y: 220 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card20", type: "image", key: "card20", position: { x: 250, y: 220 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card21", type: "image", key: "card21", position: { x: 350, y: 220 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card22", type: "image", key: "card22", position: { x: 450, y: 220 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card23", type: "image", key: "card23", position: { x: 550, y: 220 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card24", type: "image", key: "card24", position: { x: 650, y: 220 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card25", type: "image", key: "card25", position: { x: 750, y: 220 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card26", type: "image", key: "card26", position: { x: 850, y: 220 }, anchor: { x: 0.5, y: 0.5 } },
                                                // row 4
                                                { id_name: "card27", type: "image", key: "card27", position: { x: 50, y: 330 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card28", type: "image", key: "card28", position: { x: 150, y: 330 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card29", type: "image", key: "card29", position: { x: 250, y: 330 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card30", type: "image", key: "card30", position: { x: 350, y: 330 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card31", type: "image", key: "card31", position: { x: 450, y: 330 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card32", type: "image", key: "card32", position: { x: 550, y: 330 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card33", type: "image", key: "card33", position: { x: 650, y: 330 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card34", type: "image", key: "card34", position: { x: 750, y: 330 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "card35", type: "image", key: "card35", position: { x: 850, y: 330 }, anchor: { x: 0.5, y: 0.5 } },
                                                // for selection purposes
                                                //row 1
                                                { id_name: "select0", type: "image", key: "select", position: { x: 60, y: 20 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select1", type: "image", key: "select", position: { x: 160, y: 20 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select2", type: "image", key: "select", position: { x: 260, y: 20 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select3", type: "image", key: "select", position: { x: 360, y: 20 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select4", type: "image", key: "select", position: { x: 460, y: 20 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select5", type: "image", key: "select", position: { x: 560, y: 20 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select6", type: "image", key: "select", position: { x: 660, y: 20 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select7", type: "image", key: "select", position: { x: 760, y: 20 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select8", type: "image", key: "select", position: { x: 860, y: 20 }, anchor: { x: 0.5, y: 0.5 } },
                                                // row 2
                                                { id_name: "select9", type: "image", key: "select", position: { x: 60, y: 130 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select10", type: "image", key: "select", position: { x: 160, y: 130 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select11", type: "image", key: "select", position: { x: 260, y: 130 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select12", type: "image", key: "select", position: { x: 360, y: 130 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select13", type: "image", key: "select", position: { x: 460, y: 130 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select14", type: "image", key: "select", position: { x: 560, y: 130 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select15", type: "image", key: "select", position: { x: 660, y: 130 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select16", type: "image", key: "select", position: { x: 760, y: 130 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select17", type: "image", key: "select", position: { x: 860, y: 130 }, anchor: { x: 0.5, y: 0.5 } },
                                                // row 3
                                                { id_name: "select18", type: "image", key: "select", position: { x: 60, y: 240 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select19", type: "image", key: "select", position: { x: 160, y: 240 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select20", type: "image", key: "select", position: { x: 260, y: 240 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select21", type: "image", key: "select", position: { x: 360, y: 240 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select22", type: "image", key: "select", position: { x: 460, y: 240 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select23", type: "image", key: "select", position: { x: 560, y: 240 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select24", type: "image", key: "select", position: { x: 660, y: 240 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select25", type: "image", key: "select", position: { x: 760, y: 240 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select26", type: "image", key: "select", position: { x: 860, y: 240 }, anchor: { x: 0.5, y: 0.5 } },
                                                // row 4
                                                { id_name: "select27", type: "image", key: "select", position: { x: 60, y: 350 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select28", type: "image", key: "select", position: { x: 160, y: 350 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select29", type: "image", key: "select", position: { x: 260, y: 350 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select30", type: "image", key: "select", position: { x: 360, y: 350 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select31", type: "image", key: "select", position: { x: 460, y: 350 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select32", type: "image", key: "select", position: { x: 560, y: 350 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select33", type: "image", key: "select", position: { x: 660, y: 350 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select34", type: "image", key: "select", position: { x: 760, y: 350 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "select35", type: "image", key: "select", position: { x: 860, y: 350 }, anchor: { x: 0.5, y: 0.5 } },
                                                { id_name: "winAnim", type: "sprite", key: "morph", position: { x: 0, y: 0 }, anchor: { x: 0.5, y: 0.5 }, scale: { x: 0.5, y: 0.7 } },
                                            ]
                                        },
                                        { id_name: "shuffleSprite", type: "sprite", key: "shuffleSprite", position: { x: 1000, y: 150 }, anchor: { x: 0.5, y: 0.5 } },
                                        {
                                            id_name: "mainButton",
                                            type: "button",
                                            key: "mainButton" /*"mainbtn"*/,
                                            position: { x: 1000, y: 450 },
                                            anchor: { x: 0.5, y: 0.5 },
                                            over: 3,
                                            down: 3,
                                            up: 3,
                                            out: 3
                                        },
                                        // text objects
                                        {
                                            id_name: "balanceTitle",
                                            type: "text",
                                            position: { x: 50, y: 450 },
                                            anchor: { x: 0.5, y: 0.5 }
                                        },
                                        {
                                            id_name: "betPerNumberTitle",
                                            type: "text",
                                            position: { x: 300, y: 450 },
                                            anchor: { x: 0.5, y: 0.5 }
                                        },
                                        {
                                            id_name: "winAmountTitle",
                                            type: "text",
                                            position: { x: 550, y: 450 },
                                            anchor: { x: 0.5, y: 0.5 }
                                        },
                                        // values
                                        {
                                            id_name: "balance",
                                            type: "text",
                                            position: { x: 50, y: 500 },
                                            anchor: { x: 0.5, y: 0.5 }
                                        },
                                        {
                                            id_name: "betPerNumber",
                                            type: "text",
                                            position: { x: 300, y: 500 },
                                            anchor: { x: 0.5, y: 0.5 }
                                        },
                                        {
                                            id_name: "winAmount",
                                            type: "text",
                                            position: { x: 550, y: 500 },
                                            anchor: { x: 0.5, y: 0.5 }
                                        },
                                        { id_name: "finalImage", type: "image", key: "card25", position: { x: 1000, y: 150 }, anchor: { x: 0.5, y: 0.5 }, scale: { x: 1.2, y: 1.2 } },
                                        {
                                            id_name: "settingsPopup",
                                            className: my_game.myGameSettingsPopup,
                                            key: "settingsBtn",
                                            "in": 0, out: 0, over: 0, up: 0,
                                            position: { x: 800, y: 430 },
                                            //anchor:{ x: 0, y:0},
                                            children: [
                                                /*{
                                                    id_name:"group",
                                                    className: my_game.myGameGenericGroup,
                                                    position: { x: 0, y: 0},
                                                    children:
                                                    [*/
                                                { id_name: "background", type: "image", key: "popupBackground", position: { x: -610, y: -400 }, anchor: { x: 0.5, y: 0.5 } },
                                                // highscore
                                                {
                                                    id_name: "highScoreTitle",
                                                    type: "text",
                                                    position: { x: -350, y: -330 },
                                                    anchor: { x: 0.5, y: 0.5 }
                                                },
                                                {
                                                    id_name: "highScore",
                                                    type: "text",
                                                    position: { x: -150, y: -330 },
                                                    anchor: { x: 0.5, y: 0.5 }
                                                },
                                                // previousScore
                                                {
                                                    id_name: "previousScoreTitle",
                                                    type: "text",
                                                    position: { x: -350, y: -290 },
                                                    anchor: { x: 0.5, y: 0.5 }
                                                },
                                                {
                                                    id_name: "previousScore",
                                                    type: "text",
                                                    position: { x: -150, y: -290 },
                                                    anchor: { x: 0.5, y: 0.5 }
                                                },
                                                //
                                                {
                                                    id_name: "soundButton",
                                                    type: "button",
                                                    key: "soundOff" /*"mainbtn"*/,
                                                    position: { x: -200, y: -270 },
                                                    anchor: { x: 0.5, y: 0.5 },
                                                    over: 3,
                                                    down: 3,
                                                    up: 3,
                                                    out: 3
                                                },
                                                {
                                                    id_name: "soundTitle",
                                                    type: "text",
                                                    position: { x: -350, y: -240 },
                                                    anchor: { x: 0.5, y: 0.5 }
                                                },
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id_name: "MainMenu",
                                    className: my_game.myGameMainMenu,
                                    key: "settingsBtn",
                                    "in": 0, out: 0, over: 0, up: 0,
                                    position: { x: 950, y: 0 },
                                    //anchor:{ x: 0, y:0},
                                    children: [
                                        /*{
                                            id_name:"group",
                                            className: my_game.myGameGenericGroup,
                                            position: { x: 0, y: 0},
                                            children:
                                            [*/
                                        { id_name: "background", type: "image", key: "popupBackground", position: { x: -900, y: 50 }, anchor: { x: 0.5, y: 0.5 }, scale: { x: 1.2, y: 1.2 } },
                                        {
                                            id_name: "gameRulesTitle",
                                            type: "text",
                                            position: { x: -530, y: 110 },
                                            anchor: { x: 0.5, y: 0.5 }
                                        },
                                        {
                                            id_name: "rule1",
                                            type: "text",
                                            position: { x: -630, y: 170 },
                                            anchor: { x: 0.5, y: 0.5 }
                                        },
                                        {
                                            id_name: "rule2",
                                            type: "text",
                                            position: { x: -630, y: 210 },
                                            anchor: { x: 0.5, y: 0.5 }
                                        },
                                        {
                                            id_name: "rule3",
                                            type: "text",
                                            position: { x: -700, y: 240 },
                                            anchor: { x: 0.5, y: 0.5 }
                                        },
                                        {
                                            id_name: "rule4",
                                            type: "text",
                                            position: { x: -680, y: 270 },
                                            anchor: { x: 0.5, y: 0.5 }
                                        },
                                    ]
                                }
                            ]
                        },
                    ]
                },
            ]
        };
    })(layout = my_game.layout || (my_game.layout = {}));
})(my_game || (my_game = {}));
/// <reference path="../game_config/layout_config.ts"/>
var my_game;
(function (my_game) {
    var myGameCreateObjects = /** @class */ (function (_super) {
        __extends(myGameCreateObjects, _super);
        function myGameCreateObjects(_game) {
            var _this = _super.call(this, _game, new PIXI.DisplayObjectContainer(), "MainGame", true) || this;
            _this.phaserCreator = new Phaser.GameObjectCreator(_game);
            _this.game = _game;
            _this.layout = my_game.layout;
            _this.createObjects();
            return _this;
        }
        myGameCreateObjects.prototype.createObjects = function () {
            // create object from back to front / layering really, otherwise hide them
            var _current_layout;
            // create preloader
            _current_layout = my_game.layout.preloader;
            // create  main panel
            _current_layout = my_game.layout.main_panel.main_panel;
            for (var i = 0; i < _current_layout.length; i++) {
                this.createObj(_current_layout[i]);
            }
        };
        myGameCreateObjects.prototype.createObj = function (_attributes) {
            var _object;
            if (_attributes.className) // check if its a group of  objects
             {
                if (_attributes.className === "String" && _attributes.className == "group") // if a 
                 {
                    // create an object with no class, most likely gonna add to its children
                }
                else // there is a controlling class
                 {
                    //( _game:any, _parent:any, _id:string, _addToScene:boolean = true)
                    //_object = new Phaser.Group( this.game, null, _attributes.className,true);
                    _object = this.phaserCreator.group(this, _attributes.id_name, true);
                }
            }
            if (_attributes.type) // its not a controlling class, just an object
             {
                if (_attributes.type == "image") {
                    // create an image // default to zero everything
                    _object = this.phaserCreator.image(0, 0, 0, 0);
                }
            }
            if (_attributes.position) {
                _object.x = _attributes.position.x;
                _object.y = _attributes.position.y;
            }
            if (_attributes.anchor) {
                _object.anchor.x = _attributes.anchor.x;
                _object.anchor.y = _attributes.anchor.y;
            }
            if (_attributes.children) {
                // recall this function, might have to be carefull with recursion here
                this.createChildren(_object, _attributes.children);
            }
        };
        myGameCreateObjects.prototype.createChildren = function (_parent, _children) {
            for (var i = 0; i < _children.length; i++) {
                var _child = _children[i];
                this.createObj(_child);
                //this.addChild()
            }
        };
        return myGameCreateObjects;
    }(Phaser.Group));
    my_game.myGameCreateObjects = myGameCreateObjects;
})(my_game || (my_game = {}));
//// <reference path="../js/phaser.js"/>
///<reference path="../js/phaser/phaser.d.ts"/>
/// <reference path="../game_config/assets_config.ts"/>
/// <reference path="./myGameCreateObjects.ts"/>
var my_game;
(function (my_game) {
    // use a game size, 1000
    var myGameInit = /** @class */ (function () {
        function myGameInit(assets) {
            this.assets = assets;
            //Phaser.Device.
            //1150,610
            this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO); //game;
            window.scrollTo(0, 0);
            this.onComplete = new Phaser.Signal();
            this.start();
        }
        ;
        //var assets_config = my_game.assets.load;
        myGameInit.prototype.initialise = function () {
        };
        myGameInit.prototype.start = function () {
            // use a game size, 1000
            console.log("in start");
            var GameState = {
                preload: function () {
                    // load all assets and images-- preloader
                    var assetsArray = my_game.assets.assets.load;
                    for (var i = 0; i < assetsArray.length; i++) {
                        var _item = assetsArray[i];
                        if (_item.type == "image") {
                            this.game.load.image(_item.key, _item.path);
                        }
                        if (_item.type == "sprite") {
                            this.game.load.spritesheet(_item.key, _item.path, _item.width, _item.height, _item.frames);
                        }
                        if (_item.type == "sound") {
                            this.game.load.audio(_item.key, _item.path);
                        }
                    }
                },
                create: function () {
                    //this.background = this.game.add.sprite(0,0,'background');
                    //var ObjectCreator: my_game.myGameCreateObjects = new my_game.myGameCreateObjects(this.game);
                    //create an empty phaser group
                    this.page = new my_game.myGameGroup(this.game, this.world, my_game.layout.main_panel.main_panel[0]);
                },
                update: function () {
                }
            };
            // add state to game
            this.game.state.add('GameState', GameState);
            this.game.state.start('GameState', false, false);
            //this.page.initialise();
            // add  a signal
            //this.onComplete.dispatch();
            //this.onComplete.
        };
        return myGameInit;
    }());
    my_game.myGameInit = myGameInit;
})(my_game || (my_game = {}));
///<reference path="../js/phaser/phaser.d.ts"/>
/// <reference path="../game_config/assets_config.ts"/>
/// <reference path="./myGameInit.ts"/>
function gameStart() {
    var assets = my_game.assets.assets;
    var game = new Phaser.Game(1500, 610, Phaser.AUTO);
    var init = new my_game.myGameInit(assets); //,game);
}
//# sourceMappingURL=main2.js.map