import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import { articleListToggle } from '../../../utils/toggleArticles'

class ApplicationsCategory extends Component {
    constructor() {
        super()
        this.state = {
            applicationCategory: null,
            showMe: false
        }
    }

    componentDidMount() {
        axios.get('/resources/stubs/article_structure.json').then(response => {
            this.setState(
                {
                    applicationCategory: response.data["Applications"].articles
                }
            )
        })
    }



    render() {
        if (!this.state.applicationCategory) {
            return null
        }

        const { applicationCategory } = this.state 

        return (
            <ul>
                <button onClick={() => 
                    this.setState( 
                        { 
                            showMe: articleListToggle(this.state.showMe) 
                        }
                    )}>
                Applications
                </button>
                {
                    this.state.showMe ?
                        <React.Fragment>
                            {applicationCategory.map( (article, index) => (
                                <li key={index} >
                                    <Link to={`/Articles/${applicationCategory}/${article.id}`} className="article-link">{article.title}</Link>
                                </li>
                            ))}
                        </React.Fragment> :
                        null
                }
            </ul>
        );
    }
}

export default ApplicationsCategory