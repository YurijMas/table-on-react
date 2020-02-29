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
        const {data} = this.props;
        return data.map((rowData, index) => <Row rowData={rowData} key={`row${index}`}/>);
    }

    render() {
        return (
        <div className={'table_container'}>
            <Row isHeader={true}/>
            {this.renderRows()}
        </div>
        );
    }
}
