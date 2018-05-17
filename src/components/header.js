import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
    return (
        <header>
            <TopNav onGameReset={props.onGameReset} 
                onShowModal={props.onShowModal}/>
            <InfoModal showModal={props.showModal} 
            onShowModal={props.onShowModal}/>
            <h1>HOT or COLD</h1>
        </header>
    );
};
