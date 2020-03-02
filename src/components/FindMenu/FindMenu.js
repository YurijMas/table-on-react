import React from 'react';
import './FindMenu.css';

export default class FindMenu extends React.Component {
    constructor(props) {
        super(props);
        this.onFindMenuClickHandler = this.onFindMenuClickHandler.bind(this);
        this.onClickFindDataHandler = this.onClickFindDataHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            rowText: '',
        }
    }

    onFindMenuClickHandler() {
        document.querySelector('.finder_input_container').classList.toggle('finder_input_container_visible');
    }

    onClickFindDataHandler() {
        const onFindDataHandler = this.props.onFindDataHandler;
        onFindDataHandler(this.state.rowText);
        this.setState({
            rowText: '',
        });
    }

    handleChange(e) {
        this.setState({
            rowText: e.target.value,
        });
    }

    render() {
        return (
            <div className={'findmenu_container'}>
                <button className={'standart_button'} onClick={this.onFindMenuClickHandler}>Open finder menu</button>
                <div className={'finder_input_container'}>
                    <span className={'field_name finder_field_name'}>Текст для поиска:</span>
                    <input type="text" onChange={this.handleChange} value={this.state.rowText}/>
                    <button onClick={this.onClickFindDataHandler}>Find</button>
                </div>
            </div>
        );
    }
}