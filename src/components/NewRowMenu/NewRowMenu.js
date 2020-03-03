import React from 'react';
import './NewRowMenu.css';

export default class NewRowMenu extends React.Component {
    constructor(props) {
        super(props);
        this.onShowMenuClickHandler = this.onShowMenuClickHandler.bind(this);
        this.onClickAddDataHandler = this.onClickAddDataHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            inputsData: {
                id: '',
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
            },
        }
    }

    onShowMenuClickHandler() {
        document.querySelector('.inputs_container').classList.toggle('inputs_container_visible');
    }

    onClickAddDataHandler() {
        const onNewDataHandler = this.props.onNewDataHandler;
        onNewDataHandler(this.state.inputsData);
        this.setState({
            inputsData: {
                id: '',
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
            },
        });
    }

    handleChange(e) {
        const {value, name} = e.target;
        const inputsData = {...this.state.inputsData};
        inputsData[name] = value;
        this.setState({
            inputsData,
        });
    }

    render() {
        const {id, firstName, lastName, email, phone} = this.state.inputsData;
        return (
            <div className={'new_row_menu_container'}>
                <button onClick={this.onShowMenuClickHandler} className={'standart_button'}>Show menu</button>
                <div className={'inputs_container'}>
                    <span className={'field_name'}>ID:</span>
                    <input type="text" name="id" onChange={this.handleChange} value={id}/><br/>
                    <span className={'field_name'}>First name:</span>
                    <input type="text" name="firstName" onChange={this.handleChange} value={firstName}/><br/>
                    <span className={'field_name'}>Last name:</span>
                    <input type="text" name="lastName" onChange={this.handleChange} value={lastName}/><br/>
                    <span className={'field_name'}>Email:</span>
                    <input type="text" name="email" onChange={this.handleChange} value={email}/><br/>
                    <span className={'field_name'}>Phone:</span>
                    <input type= "text" name="phone" onChange={this.handleChange} value={phone}/><br/>
                    <button onClick={this.onClickAddDataHandler}>Add new line</button>
                </div>
            </div>
        );
    }
}