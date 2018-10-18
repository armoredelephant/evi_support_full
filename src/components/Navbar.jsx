import React from 'react';

import LogoLink from './LogoLink';

class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <LogoLink />
            </nav>
        )
    }
}

export default Navbar