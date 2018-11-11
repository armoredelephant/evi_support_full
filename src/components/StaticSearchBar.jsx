import React, { Component } from 'react';

class Searchbar extends Component {
    render() {
        return (
            <div className="search-container">
                <form role="search" className="search search-full" data-search data-instant="true" autoComplete="off" action="#" acceptCharset="UTF-8" method="get"> {/* Replace Action */}
                    <input name="utf8" type="hidden" value="✓" />
                    <input type="search" className="placeicons query-search"  name="query" id="query" placeholder="&#xf002;     Search the site for helpful articles..." autoComplete="off" aria-label="Search" />
                </form>
            </div>
        );
    }
}

export default Searchbar;