import React from 'react';

import ListIcon from './ListIcon';

class HomeListItem extends React.Component {
    render() {
        return (
            <a className="list-group-item list-group-item-action">
                <ListIcon iconName={this.props.iconName}/>
                {this.props.category}
            </a>
        );
    }
}

export default HomeListItem;
// refactor to where I can call on <HomeList category="Setup Videos" />