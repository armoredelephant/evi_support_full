import React, { Component, Fragment } from 'react';

class ManageLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedLink: []
        }
    }

    pushToClickedLink = ( event ) => {
        const target = event.target
        const clickedLink = this.state.clickedLink

        if (clickedLink.length != 0) {
            clickedLink.pop()
        }

        clickedLink.push(target.dataset.trigger)
        
        this.setState({ clickedLink })
    }
    
    render() {
        return (
            <Fragment>
                {this.props.render({ 
                    clickedLink: this.state.clickedLink,
                    actions: {
                        pushToClickedLink: this.pushToClickedLink
                    }
                })}
            </Fragment>
        );
    }
}

export default ManageLinks
