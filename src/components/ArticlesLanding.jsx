import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'


class ArticlesLanding extends React.Component {
    constructor() {
        super()
        this.state = {
            categoryList: null
        }
    }

    componentDidMount() {
        axios.get('/resources/stubs/article_structure.json').then( response => {
            this.setState(
                {
                    categoryList: response.data
                }
            )
        });
    }

    render() {
        if (!this.state.categoryList) {
            return null;
        } 

        const { categoryList } = this.state;

        return (
            <div>
                {/* ['Power Issues', 'Monitor Issues'] */}
                {Object.keys(categoryList).map(category => (
                    <div key={category}>
                        {categoryList[category].articles.map( (article, index) => (
                            <React.Fragment key={index}>
                                <Link to={`/Articles/${category}/${article.id}`}>{article.title}</Link>
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

export default ArticlesLanding;