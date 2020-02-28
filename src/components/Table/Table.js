import React from 'react';
import Row from '../Row/Row';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rowsNumber: 0,
        }
    }

    render() {
        return <Row/>;
    }
}
