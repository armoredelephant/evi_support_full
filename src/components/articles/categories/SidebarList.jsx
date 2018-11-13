import React, { Component, Fragment } from 'react'

class SidebarList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sidebarCategory: null
        }
    }

    componentDidMount() {
        // axios.get('/resources/stubs/article_structure.json').then(response => {
        //     this.setState(
        //         {
        //             sidebarCategory: response.data[this.props.categoryName].articles
        //         }
        //     )
        // })
        this.setState({
            sidebarCategory: this.props.sidebarCateogry
        })
    }

    render() {
        if (!this.state.showList) {
            return null
        }

        const { sidebarCategory } = this.state

        return (
            <Fragment>
            {
                this.props.showArticles ?
                    <Fragment>
                        {sidebarCategory.map( (article, index) => (
                            <li key={index} >
                                <Link to={`/Articles/${sidebarCategory}/${article.id}`} className="article-link">{article.title}</Link>
                            </li>
                        ))}
                    </Fragment> :
                    null
            }
            </Fragment>
        )
    } 

}

export default SidebarList