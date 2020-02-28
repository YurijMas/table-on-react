import React from 'react';

export default class Paginator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBackActive: false,
            isForwardActive: false,
        }
        this.renderButtons = this.renderButtons.bind(this);
    }

    renderButtons() {
        const {pageQuantity} = this.props;
        console.log(pageQuantity);
        let buttonsArray = [];
        for (let i = 0; i < pageQuantity; i++) {
            buttonsArray.push(<button key={`ButtonId${i}`}>{i + 1}</button>);
        }
        return buttonsArray;
    }

    render() {
        const {onSelectNextPage, onSelectPrevPage} = this.props;
        return (
            <div>
                <button onClick={onSelectPrevPage}>Back</button>
                {this.renderButtons()}
                <button onClick={onSelectNextPage}>Forward</button>
            </div>
        );
    }
}
