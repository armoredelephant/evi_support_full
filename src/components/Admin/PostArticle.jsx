import React, { Component, Fragment } from 'react';

class PostArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'choose a category',

        }
    }

    handleChange = ( event ) => {
        this.setState({ category: event.target.value })
    }

    handleSubmit = () => {
        // this will post to the backend/db
    }

    render() {
        const { category } = this.state;

        return (
            <Fragment>
                <form className="form-post-article">
                    <label>
                        Category:
                        <select value={category} onChange={this.handleChange}>
                            <option value='choose a category' disabled='disabled'>choose a category...</option>
                            <option value='applications'>Applications</option>
                            <option value='email'>Email</option>
                            <option value='hardware setup'>Hardware Setup</option>
                            <option value='hardware use'>Hardware Use</option>
                            <option value='other'>Other</option>
                        </select>
                    </label>


                </form>
            </Fragment>

        );
    }
}

export default PostArticle;