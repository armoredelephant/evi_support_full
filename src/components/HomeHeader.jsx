import React, { Component } from 'react';

import LogoLink from './HomeLogoLink';
import HomeSearchBar from './HomeSearchBar';

class HomeHeader extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <LogoLink />
                <h1 className="page-title">Help Center</h1>
                <HomeSearchBar />
            </div>
        )
    }
}

export default HomeHeader;