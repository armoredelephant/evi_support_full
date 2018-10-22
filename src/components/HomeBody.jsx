import React from 'react';

import HomeListItem from './HomeListItems';

/*
    The purpose of this component is to build the list items for the category links
*/

class HomeBody extends React.Component {
    render() {
        return (
            <div className="row"id="main-body">
                <HomeListItem category="Setup Videos" iconName="fa-video"/>
                <HomeListItem category="Troubleshooting Guides" iconName="fa-file" />
                <HomeListItem category="Down Detector" />
                <HomeListItem category="Submit Cherwell Request" />
            </div>
        );
    }
}

export default HomeBody;