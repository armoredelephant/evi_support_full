import React from 'react';

import HomeListItem from './HomeListItems';

/*
    The purpose of this component is to build the list items for the category links
*/

class HomeBody extends React.Component {
    render() {
        // here is your problem
        // render is a function and without anything returned, you get nothing.
        return (
            <div className="row justify-content-around">
                <HomeListItem category="Setup Videos" />
                <HomeListItem category="Troubleshooting Guides" />
                <HomeListItem category="Down Detector" />
                <HomeListItem category="Submit Cherwell Request" />
            </div>
        );
    }
}

export default HomeBody;