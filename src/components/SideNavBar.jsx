import React from 'react';

class SideNavBar extends React.Component {
    render() {
        return (
            <div className="col-12 col-md-3 col-xl-2 site-sidebar">
                <form className="site-search d-flex align-items-center">
                    <span className="algolia-autocomplete">
                    
                    </span>
                    {/*  d-md-none p-0 ml-3 */}
                    <button className="btn btn-link site-nav-search-toggle" type="button" data-toggle="collapse" data-target="#site-nav" aria-controls="site-nav" aria-label="Toggle site navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </form>  
                <nav className="collapse site-links" id="site-nav">
                    {/* will need a component for the documents. Each will be a link */}
                </nav>
            </div>
        );
    }
}

export default SideNavBar