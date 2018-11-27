import React from 'react';

import HomeListItem from './HomeListItems';
import HomeOutageLinks from './HomeOutageLinks';

const SectionListItems = props => {
    return (
        <section className="main-section-wrapper" id="main-section-wrapper">
            <ul className="flex-container home-list-container">
                <HomeListItem 
                    category="Videos" 
                    iconName="fa-video"
                    categoryID="category-videos"
                    categoryDescription="Helpful videos for connecting equipment."
                    disabled="true"
                />
                <HomeListItem 
                    category="Articles" 
                    iconName="fa-book"
                    categoryID="category-articles"
                    categoryDescription="Browse through our articles."
                    disabled="false"
                />
                <HomeOutageLinks
                    {...props} 
                    category="Outages"
                    categoryDescription="View network outages"
                    categoryID="category-outages"
                    iconName="fa-wifi"
                />
                <HomeListItem 
                    category="Request"
                    iconName="fa-file"
                    categoryID="category-request"
                    categoryDescription="Submit a request."
                    disabled="true"
                />
            </ul>
        </section>
    );
}

export default SectionListItems