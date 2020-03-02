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
        const {pageQuantity, onSelectedPage, selectedPage} = this.props;
        if (selectedPage >= 5 && selectedPage <= pageQuantity - 4) {
            return (
                <span>
                    <button className={'page_button'} onClick={onSelectedPage}>1</button>
                    <span>...</span>
                    <button className={'page_button'} onClick={onSelectedPage}>{selectedPage - 2}</button>
                    <button className={'page_button'} onClick={onSelectedPage}>{selectedPage - 1}</button>
                    <button className={'page_button'} onClick={onSelectedPage}>{selectedPage}</button>
                    <button className={'page_button'} onClick={onSelectedPage}>{selectedPage + 1}</button>
                    <button className={'page_button'} onClick={onSelectedPage}>{selectedPage + 2}</button>
                    <span>...</span>
                    <button className={'page_button'} onClick={onSelectedPage}>{pageQuantity}</button>
                </span>
            );
        } else if (selectedPage > 5 && selectedPage >= pageQuantity - 4) {
            return (
                <span>
                    <button className={'page_button'} onClick={onSelectedPage}>1</button>
                    <span>...</span>
                    <button className={'page_button'} onClick={onSelectedPage}>{pageQuantity - 4}</button>
                    <button className={'page_button'} onClick={onSelectedPage}>{pageQuantity - 3}</button>
                    <button className={'page_button'} onClick={onSelectedPage}>{pageQuantity - 2}</button>
                    <button className={'page_button'} onClick={onSelectedPage}>{pageQuantity - 1}</button>
                    <button className={'page_button'} onClick={onSelectedPage}>{pageQuantity}</button>
                </span>
            );
        } else if (selectedPage <= 5 && selectedPage < pageQuantity - 4) {
            return (
                <span>
                    <button className={'page_button'} onClick={onSelectedPage}>1</button>
                    <button className={'page_button'} onClick={onSelectedPage}>2</button>
                    <button className={'page_button'} onClick={onSelectedPage}>3</button>
                    <button className={'page_button'} onClick={onSelectedPage}>4</button>
                    <button className={'page_button'} onClick={onSelectedPage}>5</button>
                    <span>...</span>
                    <button className={'page_button'} onClick={onSelectedPage}>{pageQuantity}</button>
                </span>
            );
        }
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
