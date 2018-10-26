import React from 'react';

import HomeListItem from './HomeListItems';

/*
    The purpose of this component is to build the list items for the category links
*/

class HomeBody extends React.Component {
    render() {
        return (
            <section className="main-body-wrapper" id="main-body-wrapper">
                <ul className="flex-container">
                    <HomeListItem 
                        category="Videos" 
                        iconName="fa-video"
                        categoryID="category-videos"
                        categoryDescription="Helpful videos for connecting equipment."
                    />
                    <HomeListItem 
                        category="Articles" 
                        iconName="fa-book"
                        categoryID="category-articles"
                        categoryDescription="Browse through our articles."
                    />
                    <HomeListItem 
                        category="Outages"
                        iconName="fa-wifi"
                        categoryID="category-outages"
                        categoryDescription="View network outages."
                    />
                    <HomeListItem 
                        category="Request"
                        iconName="fa-file"
                        categoryID="category-request"
                        categoryDescription="Submit a request."
                    />
                </ul>
            </section>
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