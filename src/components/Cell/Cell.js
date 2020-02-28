import React from 'react';
import styles from './Cell.css';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {content} = this.props;
        return <div className={styles.root}></div>;
    }
}
