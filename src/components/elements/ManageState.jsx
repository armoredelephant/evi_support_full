import React, { Component, Fragment } from 'react';

class ManageState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openCategories: []
        }
    }

    pushToCategories = event => {
        const target = event.target
        const openCategories = this.state.openCategories

        // if (openCategories.includes(target.dataset.trigger)) {
        //     const tempIndex = openCategories.findIndex( 
        //         category => category === target.dataset.trigger
        //     )
        //     openCategories.splice(tempIndex, 1)
        // } else {
        //     openCategories.push(target.dataset.trigger)
        // }
        if (openCategories.length != 0) {
            openCategories.pop()
        }

        openCategories.push(target.dataset.trigger)        

        this.setState({ openCategories })
    }
    
    render() {
        return (
            <Fragment>
                {this.props.render({ 
                    openCategories: this.state.openCategories,
                    actions: {
                        pushToCategories: this.pushToCategories
                    }
                })}
            </Fragment>
        );
    }
}

export default ManageState