import React from 'react';
import './Cell.css';

export default class Cell extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {content, type, isHeader} = this.props;
        const additionalStyle = isHeader ? 'header' : '';
        const styles = 'cell_container ' + additionalStyle;
        return <div className={styles} style={{width: '200px'}}>{content}</div>;
    }
}
