module my_game
{
    export class myGameMaths
    {
        static gridLength: number = 36;

        previousState: any = 
        {
            win: 0,
            betPerNumber: 1,
            luckyNumber: 0,
            balance: 1000
        }

        currentState: any = 
        {
            win: 0,
            betPerNumber: 1,
            luckyNumber: 0,
            balance: 1000
        }

        constructor()
        {

        }

        public getCurrentState():any
        {
            return this.currentState;
        }
        public getPreviousState():any
        {
            return this.previousState;
        }

        public play(betNumbers:any[]):any
        {
            // set betValue and Update
            //this.setBetPerNumber(_betPerNumber);

             // update previous bet per number
            this.previousState.betPerNumber = this.currentState.betPerNumber;

            // update previous state
            this.previousState.win = this.currentState.win;
            this.previousState.luckyNumber = this.currentState.luckyNumber;

            //Update balance before play
            this.currentState.balance -= ( betNumbers.length * this.currentState.betPerNumber);


            var _luckyNumber = Math.floor( Math.random() * my_game.myGameMaths.gridLength);
            var _currentWin = 0;

            for(var i = 0; i < betNumbers.length; i++)
            {
                if(_luckyNumber == betNumbers[i])
                {
                    _currentWin += this.currentState.betPerNumber * my_game.myGameMaths.gridLength;
                }
            }

            this.currentState.win = _currentWin;
            this.currentState.balance += _currentWin;
            this.currentState.luckyNumber = _luckyNumber;
            
            // update Balance After Play
            this.currentState.balance += this.currentState.win;

            // check deep copy issues, just in case
            var _currentStateTemp = 
            {
                win: 0,
                betPerNumber: 1,
                luckyNumber: 0,
                balance: 1000
            }
            _currentStateTemp.win = this.currentState.win;
            _currentStateTemp.betPerNumber = this.currentState.betPerNumber;
            _currentStateTemp.luckyNumber = this.currentState.luckyNumber;
            _currentStateTemp.balance = this.currentState.balance;

            return _currentStateTemp;
        }

        public setBetPerNumber(_newBetPerNumber:number)
        {
            // update to new value
            this.currentState.betPerNumber = _newBetPerNumber;

        }


        
        
    }
}