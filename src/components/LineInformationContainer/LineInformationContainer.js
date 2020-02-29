import React from 'react';
import './LineInformationContainer.css';

export default class LineInformationContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {data} = this.props;
        const {firstName, lastName} = data;
        const description = data.hasOwnProperty('description') ? data.description : null;
        const streetAddress = data.hasOwnProperty('address') ? data.address.streetAddress : null;
        const city = data.hasOwnProperty('address') ? data.address.city : null;
        const state = data.hasOwnProperty('address') ? data.address.state : null;
        const zip = data.hasOwnProperty('address') ? data.address.zip : null;
        return (
            <div className={'line_information_container'}>
                <div className={'detail_information_row'}>
                    <div className={'detail_information_cell'}>Выбран пользователь:</div>
                    <div className={'detail_information_cell'}>{`${firstName} ${lastName}`}</div>
                </div>
                <div className={'detail_information_row'}>
                    <div className={'detail_information_cell'}>Описание:</div>
                    <div className={'detail_information_cell'}>{description}</div>
                </div>
                <div className={'detail_information_row'}>
                    <div className={'detail_information_cell'}>Адрес проживания:</div>
                    <div className={'detail_information_cell'}>{streetAddress}</div>
                </div>
                <div className={'detail_information_row'}>
                    <div className={'detail_information_cell'}>Город:</div>
                    <div className={'detail_information_cell'}>{city}</div>
                </div>
                <div className={'detail_information_row'}>
                    <div className={'detail_information_cell'}>Провинция / штат:</div>
                    <div className={'detail_information_cell'}>{state}</div>
                </div>
                <div className={'detail_information_row'}>
                    <div className={'detail_information_cell'}>Индекс:</div>
                    <div className={'detail_information_cell'}>{zip}</div>
                </div>
            </div>
        );
    }
}