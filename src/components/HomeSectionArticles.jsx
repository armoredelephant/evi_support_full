import React from 'react';

import HomeArticle from './HomeArticle';

class SectionArticles extends React.Component {
    render() {
        return (
            <section className="main-section-wrapper" id="most-viewed-articles">
                <h2 className="section-title">Most Viewed Articles</h2>
                <hr className=" most-viewed-hr"/>
                <ul className="flex-container home-article-container" id="home-article-container">
                    <HomeArticle article="Citrix slowness"/>
                    <HomeArticle article="Citrix slowness"/>
                    <HomeArticle article="Citrix slowness"/>
                    <HomeArticle article="Citrix slowness"/>
                </ul>
            </section>
        );
    }
}

export default SectionArticles;