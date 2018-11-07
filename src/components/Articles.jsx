import React from 'react'
import Axios from 'axsios'
import { isNullOrUndefined } from 'util';

// we want this to take in articleID based on the category it was clicked from?

class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            article: null
        }
    }



// <Link> from article page will pass a prop 


    // props.match.params.title is passed through as the title 

    render() {
        if (!this.state.article) {
            return null
        }

        const { article } = this.state

        return (

        );
    }
}