import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm 
            onGuessNumber={(number) => props.onGuessNumber(number)}
            onGuessClick={(number) => props.onGuessClick(number)}
            currentGuess={props.currentGuess}
            guess={props.guess}
            hotOrCold={(guess) => props.hotOrCold(guess)} />
        </section>
    );
}

