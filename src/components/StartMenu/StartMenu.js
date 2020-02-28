import React from 'react';

function StartMenu(props) {
    const {onStartButtonHandler} = props;
    return <button onClick={onStartButtonHandler}>Start</button>;
}

export default StartMenu;