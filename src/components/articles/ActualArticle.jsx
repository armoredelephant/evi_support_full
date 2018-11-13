import React, { Component } from 'react';


class ActualArticle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentArticle: null
        }
    }

    componentDidMount() {
        this.setState({
            currentArticle: this.props.articleId
        }) 
    }

    render() {
        console.log(this.state.currentArticle)
        if (!this.state.currentArticle) {
            return null
        }

        const { currentArticle } = this.state
        
        return (
            
        <h1>{currentArticle.title}</h1>
        );
    }
}

export default ActualArticle