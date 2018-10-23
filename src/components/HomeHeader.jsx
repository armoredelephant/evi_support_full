import React from 'react';

import LogoLink from './LogoLink';
import SideNavBar from './SideNavBar';

class HomeHeader extends React.Component {
    render() {
        return (
            <header className="main-header">
                <LogoLink />
            </header>
        )
    }
}

export default HomeHeader;