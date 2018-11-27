import React, { Component } from 'react';

import SectionListItems from './HomeSectionListItems';

class HomeBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayModal: false
        };
    }

    showModal = () => {
        this.setState(prevState => ({
            displayModal: !prevState.displayModal
        }));
    }

    hideModal = () => {
        this.setState({
            displayModal: false
        });
    }
    
    render() {
        const { displayModal } = this.state;

        return (
            <main role="main">
                <SectionListItems
                    displayModal={displayModal}
                    hideModal={this.hideModal}
                    showModal={this.showModal} 
                />
            </main>
        );
    }
}

export default HomeBody;