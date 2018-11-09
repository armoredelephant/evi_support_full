import React, { Component } from 'react';

import HomeListItem from './HomeListItems';

class SectionListItems extends Component {
    render() {
        return (
            <section className="main-section-wrapper" id="main-section-wrapper">
                <ul className="flex-container home-list-container">
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

export default SectionListItems