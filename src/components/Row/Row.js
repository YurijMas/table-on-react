import React from 'react';
import Cell from '../Cell/Cell';
import './Row.css';

export default class Row extends React.Component {
    constructor(props) {
        super(props);
        this.renderHeader = this.renderHeader.bind(this);
        this.renderContentRows = this.renderContentRows.bind(this);
    }

    renderHeader() {
        return (
            <div className='row_container'>
                <Cell cellType = 'id' isHeader={true} content='id'></Cell>
                <Cell cellType = 'firstName' isHeader={true} content='firstName'></Cell>
                <Cell cellType = 'lastName' isHeader={true} content='lastName'></Cell>
                <Cell cellType = 'email' isHeader={true} content='email'></Cell>
                <Cell cellType = 'phone' isHeader={true} content='phone'></Cell>
            </div>
            )
    }

    renderContentRows() {
        const {rowData} = this.props;
        return (
            <div className='row_container'>
                <Cell cellType = 'rowDataid' content={rowData.id}></Cell>
                <Cell cellType = 'firstName' content={rowData.firstName}></Cell>
                <Cell cellType = 'lastName' content={rowData.lastName}></Cell>
                <Cell cellType = 'email' content={rowData.email}></Cell>
                <Cell cellType = 'phone' content={rowData.phone}></Cell>
            </div>
            )
    }

    render() {
        const {isHeader} = this.props;
        let rows;
        if (isHeader) {
            rows = this.renderHeader();
        } else {
            rows = this.renderContentRows();
        }

        return rows;
    }
}
