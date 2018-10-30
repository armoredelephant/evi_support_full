import React from 'react';

import SectionListItems from './HomeSectionListItems';
import SectionArticles from './HomeSectionArticles';

/*
    The purpose of this component is to build the list items for the category links
*/

class HomeBody extends React.Component {
    render() {
        return (
            <main role="main">
                <SectionListItems />
                <SectionArticles />
            </main>
        );
    }
}

export default HomeBody;

// basically:

/**
 * <div id="main-body">
 *  <a>
 *     <i><i>
 *      words
 *  <a> x4
 *  <a>
 *  <a>
 *  <a>
 * <div>
 */