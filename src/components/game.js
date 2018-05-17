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
        console.log();
        if(parseInt(this.state.guess,10) < 0 || !Number.isInteger(parseInt(this.state.guess,10))){
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
            randomNumber: num,
            message: 'Make your Guess!'
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

    hotOrCold(guess){
        if(!Number.isInteger(parseInt(this.state.guess,10))){
            this.setState({message: 'It needs to be a number'});
            return;
        }
        if(parseInt(this.state.guess,10) < 0){
            this.setState({message: 'number cannot be less than zero'});
            return;
        }
        if(this.state.randomNumber === parseInt(this.state.guess,10)) {
            this.setState({message: 'Correct Guess'});
            return;
        }
         if(Math.abs(this.state.randomNumber - parseInt(this.state.guess, 10)) >= 10){
            this.setState({message: 'cold'});
            return;
         } 
        if(Math.abs(this.state.randomNumber - parseInt(this.state.guess, 10)) <= 5){
            this.setState({message: 'hot'});
            return;
        } 
    }

    componentWillMount(){
        this.randomNumber();
    }

    render(){ 
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

