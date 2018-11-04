import React from 'react';

import LogoLink from './HomeLogoLink';
import HomeSearchBar from './HomeSearchBar';

class HomeHeader extends React.Component {
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