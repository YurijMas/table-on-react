import React from 'react';
import Cell from '../Cell/Cell';
import './Row.css';

export default class Row extends React.Component {
    constructor(props) {
        super(props);
        const rowNumber = props.rowNumber;
        this.state = {
            rowNumber,
        };
        this.renderHeader = this.renderHeader.bind(this);
        this.renderContentRows = this.renderContentRows.bind(this);
        this.onSelectedRowHandler = this.onSelectedRowHandler.bind(this);
    }

    onSelectedRowHandler() {
        const {rowNumber, selectedNewRowHandler, selectedRowIndex} = this.props;
        const newSelectedRowIndex = selectedRowIndex === rowNumber ? null : rowNumber;
        selectedNewRowHandler(newSelectedRowIndex);
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
        const {rowData, selectedRowIndex, rowNumber} = this.props;
        const rowClasses = selectedRowIndex === rowNumber ? 'row_container selected_row' : 'row_container';
        return (
            <div className={rowClasses} onClick={this.onSelectedRowHandler}>
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
