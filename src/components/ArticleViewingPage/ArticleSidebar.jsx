import React, { Fragment } from 'react';
import axios from 'axios';

import ManageState from '../elements/ManageState'
import SidebarCategory from './SidebarCategory'

function ArticleSidebar(props) {
    return (
        <aside className="article-sidebar">
            {/* Manage state component */}
            <ManageState render={
                (managedProps) => (
                    <Fragment>
                        {props.categoryNames.map(category => (
                            <SidebarCategory
                                allArticleData={props.allArticleData}
                                activeArticleLink={props.activeArticleLink}
                                articleList={props.articleList} 
                                articleId={props.articleId} 
                                articleIdMatch={props.articleIdMatch}
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
        </aside>
    );
}

export default ArticleSidebar

// yeild template to the ManageState, which will yeild back to ArticleSidebar

// data attribute/trigger
// dataset in console.dir(ele)

// event > dom > 

// if click on categorie, it should no longer be in the array.