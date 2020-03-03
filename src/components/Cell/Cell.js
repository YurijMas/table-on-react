import React from 'react';
import './Cell.css';

export default class Cell extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {content, isHeader, onClickHeaderCellHandler, headerCellName} = this.props;
        const additionalStyle = isHeader ? 'header' : '';
        const styles = 'cell_container ' + additionalStyle;
        return <div onClick={onClickHeaderCellHandler} name={headerCellName} className={styles}>{content}</div>;
    }
}
