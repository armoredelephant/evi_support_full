import React from 'react';

import LogoLink from './LogoLink';

class HomeHeader extends React.Component {
    render() {
        return (
            <header className="navbar justify-content-between fixed-top navbar-expand-lg navbar-light bg-light">
                <LogoLink />
            </header>
        )
    }
}

export default HomeHeader;