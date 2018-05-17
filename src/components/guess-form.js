import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    return (
        <form>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required 
                onChange={(e) => props.onGuessNumber(e.target.value)} 
                value={props.guess}/>
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"
                onClick={(e) =>{
                    e.preventDefault();
                    props.onGuessClick(props.currentGuess);
                    props.hotOrCold(props.currentGuess);
                }}/>
        </form>
    );
};

