import React from 'react';

function StartMenu(props) {
    const {onStartButtonHandler} = props;
    console.log(onStartButtonHandler);
    return <button onClick={onStartButtonHandler}>Start</button>;
}

export default StartMenu;