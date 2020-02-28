import React from 'react';

export default class Paginator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBackActive: false,
            isForwardActive: false,
        }
    }

    render() {
        return (
            <div>
                <button>Back</button>
                <button>Forward</button>
            </div>
        );
    }
}
