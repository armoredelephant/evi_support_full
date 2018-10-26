import React from 'react';

import LogoLink from './LogoLink';
import HomeSearchBar from './HomeSearchBar';

class HomeHeader extends React.Component {
    render() {
        return (
            <section className="header-wrapper">
                <LogoLink />
                <h1 className="page-title">Help Center</h1>
                <HomeSearchBar />
            </section>
        )
    }
}

export default HomeHeader;