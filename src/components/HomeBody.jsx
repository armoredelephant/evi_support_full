import React from 'react';

import HomeListItem from './HomeListItems';

/*
    The purpose of this component is to build the list items for the category links
*/

class HomeBody extends React.Component {
    render() {
        return (
            <div className="main-body" id="main-body">
                <HomeListItem category="Setup Videos" iconName="fa-video"/>
                <HomeListItem category="Guides" iconName="fa-file" />
                <HomeListItem category="Down Detector" />
                <HomeListItem category="Cherwell Request" />
            </div>
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