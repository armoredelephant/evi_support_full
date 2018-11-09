import React, { Component } from 'react';
import axios from 'axios';


class Articles extends Component {
    constructor() {
        super();
        this.state = {
            articles: null
        }
    }

    componentDidMount() {
        axios.get('/resources/stubs/article_structure.json')
            .then( response => {
                this.setState(
                    {
                        articleList: response.data
                    }
                )
            })
    }

    render() {
        if (!this.state.articleList) {
            return null;
        } 

        const { articleList } = this.state;

        console.log(Object.keys(articleList));

        return (
            <div>
                {/* ['Power Issues', 'Monitor Issues'] */}
                {Object.keys(articleList).map(category => (
                    <div key={category}>
                        {articleList[category].articles.map(title => (
                         <li key={title.id}>{title.title}</li>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

export default Articles