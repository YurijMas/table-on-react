import React from 'react';
import Cell from '../Cell/Cell';
import './Row.css';

const ASCEND_SYMBOL = 8593;
const DESCEND_SYMBOL = 8595;

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
        const {sortedBy, onClickHeaderCellHandler} = this.props;
        const sortingDirection = sortedBy.ascend ? String.fromCharCode(ASCEND_SYMBOL) : String.fromCharCode(DESCEND_SYMBOL);
        return (
            <div className='row_container'>
                <Cell onClickHeaderCellHandler={onClickHeaderCellHandler} headerCellName = 'id' isHeader={true} content={sortedBy.column === 'id' ? 'id ' + sortingDirection : 'id'}></Cell>
                <Cell onClickHeaderCellHandler={onClickHeaderCellHandler} headerCellName = 'firstName' isHeader={true} content={sortedBy.column === 'firstName' ? 'firstName ' + sortingDirection : 'firstName'}></Cell>
                <Cell onClickHeaderCellHandler={onClickHeaderCellHandler} headerCellName = 'lastName' isHeader={true} content={sortedBy.column === 'lastName' ? 'lastName ' + sortingDirection : 'lastName'}></Cell>
                <Cell onClickHeaderCellHandler={onClickHeaderCellHandler} headerCellName = 'email' isHeader={true} content={sortedBy.column === 'email' ? 'email ' + sortingDirection : 'email'}></Cell>
                <Cell onClickHeaderCellHandler={onClickHeaderCellHandler} headerCellName = 'phone' isHeader={true} content={sortedBy.column === 'phone' ? 'phone ' + sortingDirection : 'phone'}></Cell>
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
