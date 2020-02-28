import React from 'react';
import './Paginator.css';

export default class Paginator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBackActive: false,
            isForwardActive: false,
        }
        this.renderButtons = this.renderButtons.bind(this);
        this.onChangePageHandler = this.onChangePageHandler.bind(this);
    }

    onChangePageHandler() {

    }

    renderButtons() {
        const {pageQuantity, onSelectedPage} = this.props;
        let buttonsArray = [];
        for (let i = 0; i < pageQuantity; i++) {
            buttonsArray.push(<button className={'page_button'} key={`ButtonId${i}`} onClick={onSelectedPage}>{i + 1}</button>);
        }
        return buttonsArray;
    }

    render() {
        const {onSelectNextPage, onSelectPrevPage, pageQuantity, selectedPage} = this.props;
        return (
            <div className={'paginator_container'}>
                <button onClick={onSelectPrevPage} disabled={selectedPage === 1}>Back</button>
                {this.renderButtons()}
                <button onClick={onSelectNextPage} disabled={selectedPage === pageQuantity}>Back</button>
            </div>
        );
    }
}
