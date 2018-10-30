import React from 'react';

import HomeArticle from './HomeArticle';

class SectionArticles extends React.Component {
    render() {
        return (
            <section className="main-section-wrapper">
                <ul className="flex-container">
                    <HomeArticle />
                </ul>
            </section>
        );
    }
}

export default SectionArticles;