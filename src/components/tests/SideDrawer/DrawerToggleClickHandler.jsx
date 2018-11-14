import React, { Component, Fragment } from 'react';

class DrawerToggleClickHander extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideDrawerOpen: false
        }
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        })
    }
    
    render() {
        let sideDrawer
            backdrop

        if (this.state.sideDrawerOpen) {
            sideDrawer = <SideDrawer />
            backdrop = <Backdrop />
        }

        return (
            <Fragment>
                {sideDrawer}
                {backdrop}
            </Fragment>
        )

    }
}

export default DrawerToggleClickHander