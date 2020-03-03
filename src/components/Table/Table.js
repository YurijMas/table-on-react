import React from 'react';
import Row from '../Row/Row';
import './Table.css';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rowsNumber: 0,
        }
        this.renderRows = this.renderRows.bind(this);
    }

    renderRows() {
        const {data, selectedNewRowHandler, selectedRowIndex} = this.props;
        return data
            .map((rowData, index) => <Row rowNumber={index} selectedRowIndex={selectedRowIndex} rowData={rowData} key={`row${index}`} selectedNewRowHandler={selectedNewRowHandler}/>);
    }

    render() {
        const {sortedBy, onClickHeaderCellHandler} = this.props;
        return (
        <div className={'table_container'}>
            <Row onClickHeaderCellHandler={onClickHeaderCellHandler} sortedBy={sortedBy} isHeader={true}/>
            {this.renderRows()}
        </div>
        );
    }
}
