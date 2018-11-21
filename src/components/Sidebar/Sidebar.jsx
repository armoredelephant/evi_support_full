import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import ManageState from '../elements/ManageState'
import SidebarCategory from './SidebarCategory'

function Sidebar(props) {
    return (
        <aside className="item-sidebar">
            <ManageState render={
                (managedProps) => (
                    <Fragment>
                        {props.categoryNames.map(category => (
                            <SidebarCategory
                                allData={props.allData}
                                activeItemLink={props.activeItemLink}
                                currentItemList={props.currentItemList} 
                                currentItemId={props.currentItemId} 
                                itemIdMatch={props.itemIdMatch}
                                categoryName={category}
                                key={category} 
                                openCategories={managedProps.openCategories}
                                onClick={(event) => managedProps.actions.pushToCategories(event, props.handleCurrentCategory)}
                                sitePage={props.sitePage}
                                trigger={category}
                            />
                        ))}
                    </Fragment>
                )}/>
                <hr />
                <ul className="item-sidebar-list">
                    <li className="sidebar-route-li">
                        <Link to='/' className="sidebar-route-link" >Home</Link>
                    </li>
                    <li className="sidebar-route-li">
                        <Link to={props.sitePage == 'Articles' ? '/Videos' : '/Articles'} className="sidebar-route-link" >{props.sitePage == 'Articles' ? 'Videos' : 'Articles'}</Link>
                    </li>
                </ul>
        </aside>
    );
}

export default Sidebar

// 

// yeild template to the ManageState, which will yeild back to ArticleSidebar

// data attribute/trigger
// dataset in console.dir(ele)

// event > dom > 

// if click on categorie, it should no longer be in the array.