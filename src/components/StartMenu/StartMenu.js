import React from 'react';
import './StartMenu.css';

function StartMenu(props) {
    const {onStartButtonHandler} = props;
    return (
        <div className={'start_container'}>
            <button onClick={onStartButtonHandler}>Start</button>
        </div>
    );
}

export default StartMenu;