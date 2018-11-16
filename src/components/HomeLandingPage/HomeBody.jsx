import React, { Component } from 'react';

import SectionListItems from './HomeSectionListItems';
// import SectionArticles from './HomeSectionArticles';

class HomeBody extends Component {
    render() {
        return (
            <main role="main">
                <SectionListItems />
                {/* <SectionArticles /> */}
            </main>
        );
    }
}

export default HomeBody;