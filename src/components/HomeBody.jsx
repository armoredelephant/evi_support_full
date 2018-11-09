import React, { Component } from 'react';

import SectionListItems from './HomeSectionListItems';
import SectionArticles from './HomeSectionArticles';

/*
    The purpose of this component is to build the list items for the category links
*/

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