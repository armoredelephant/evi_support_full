import React from 'react';
import axios from 'axios';


class ArticlesLanding extends React.Component {
    constructor() {
        super()
        this.state = {
            articles: null
        }
    }

    componentDidMount() {
        axios.get('/resources/stubs/article_structure.json').then( response => {
            this.setState(
                {
                    articles: response.data
                }
            )
        });
    }

    render() {
        if (!this.state.articles) {
            return null;
        } 

        const { articles } = this.state;

        return (
            <div>
                {/* ['Power Issues', 'Monitor Issues'] */}
                {Object.keys(articles).map( article => (
                    <div key={article}>
                        {articles[article].categories.map( (category, index) => (
                            <React.Fragment key={index}>
                                {category.title}
                                {category.description}
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

export default ArticlesLanding;