import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            guess: '',
            guessHistory: [],
            randomNumber: '',
            message: 'Make your Guess!'
        };
    }

    guessNumber(number){
        this.setState({
            guess: number,
        }); 
    }

    onGuessClick(number){
        if(number === '') return;
        if(parseInt(number,10) < 0) {
            this.numError();
            return;
        }
        this.setState({
            guessHistory: [...this.state.guessHistory, number]
        });
    }

    GameReset(){
        const num = this.getRandomInt(100);
        this.setState({
            guess: '',
            guessHistory: [],
            randomNumber: num
        })
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    randomNumber(){
        const num = this.getRandomInt(100)
        if(this.state.randomNumber === '') {
            this.setState({
                randomNumber: num
            });
        }
        
    }

    componentWillMount(){
        this.randomNumber();
    }

    lessThanZero(){
        this.setState({message: 'number has to be bigger than zero'});
    }

    numError(number){
        if(number < 0){
            this.lessThanZero();
        }
    }

    correct(){
        this.setState({message: 'Correct Guess'});
    }

    cold(){
        this.setState({message: 'cold'});
    }

    hot(){
        this.setState({message: 'hot'});
    }

    hotOrCold(guess){
        if(this.state.randomNumber === parseInt(this.state.guess,10)) {
            this.correct();
            return;
        }
         if(this.state.randomNumber - parseInt(this.state.guess,10) >= 10){
            this.cold();
            return;
         } 
        if(this.state.randomNumber - this.state.guess <= 5){
            this.hot();
            return;
        } 
        console.log(this.state.randomNumber - guess);
    }

    render(){ 
        // this.hotOrCold(this.state.randomNumber)
        return (
            <div>
                <Header onGameReset={() => this.GameReset()}/>
                <GuessSection feedback={this.state.message}
                 onGuessNumber={(number => this.guessNumber(number))}
                 onGuessClick={(number) => this.onGuessClick(number)}
                 currentGuess={this.state.guess}
                 guess={this.state.guess}
                 hotOrCold={(guess => this.hotOrCold(guess))} />
                <GuessCount count={this.state.guessHistory.length} />
                <GuessList guesses={this.state.guessHistory} />
            </div>
        );
    }
}

