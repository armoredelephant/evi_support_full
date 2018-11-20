import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import ManageState from '../elements/ManageState'
import VideoSidebarCategory from './VideoSidebarCategories';

function ArticleSidebar(props) {
    return (
        <aside className="article-sidebar">
            <ManageState render={
                (managedProps) => (
                    <Fragment>
                        {props.categoryNames.map(category => (
                            <VideoSidebarCategory
                                allData={props.allVideosData}
                                activeVideoLink={props.activeVideoLink}
                                videoList={props.videoList} 
                                videoId={props.videoId} 
                                videoIdMatch={props.videoIdMatch}
                                categoryName={category}
                                handleActiveArticle={props.handleActiveArticle}
                                key={category} 
                                openCategories={managedProps.openCategories}
                                onClick={(event) => managedProps.actions.pushToCategories(event, props.handleCurrentCategory)}
                                trigger={category}
                            />
                        ))}
                    </Fragment>
                )}/>
                <hr />
                <ul className="article-sidebar-list">
                    <li className="sidebar-route-li">
                        <Link to='/' className="sidebar-route-link" >Home</Link>
                    </li>
                    <li className="sidebar-route-li">
                        <Link to='/Articles' className="sidebar-route-link" >Articles</Link>
                    </li>
                </ul>
                
        </aside>
    );
}

export default ArticleSidebar