import React, { Component } from 'react';

import EviLogo from './StaticEviLogo';

class Header extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <EviLogo />
                <h1 className="page-title">Help Center</h1>
            </div>
        )
    }
}

export default Header;