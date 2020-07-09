import React from 'react'
import './SearchBar.css'

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch('plUWQU4TFSFQ', '734a4ce92ac4f488faf06614006028f9');

console.log(searchClient)

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    }

    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count"
    }

    this.handleSortByChange = this.handleSortByChange.bind(this)
    this.handleTermChange = this.handleTermChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: this.sortByOptions[sortByOption] })
  }

  handleTermChange(e) {
    this.setState({ term: e.target.value })
  }

  handleLocationChange(e) {
    this.setState({ location: e.target.value })
  }

  handleSearch(e) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
    e.preventDefault()
  }

  getSortByClass(sortByOption) {
    return this.sortByOptions[sortByOption] === this.state.sortBy ? 'active' : ''
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => { 
      return (
        <li className={this.getSortByClass(sortByOption)} 
          key={this.sortByOptions.sortByOption}
          onClick={this.handleSortByChange.bind(this, sortByOption)}>
          {sortByOption}
        </li>
      )
    })

  }

  render() {
    return (
      <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/reset-min.css" integrity="sha256-t2ATOGCtAIZNnzER679jwcFcKYfLlw01gli6F6oszk8=" crossorigin="anonymous"></link>
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
          {/* <input placeholder="Where?" onChange={this.handleLocationChange}/> */}
          <InstantSearch searchClient={searchClient} indexName="demo_ecommerce">
            <SearchBox onChange={this.handleLocationChange}/>
            <Hits />
          </InstantSearch>
        </div>
        <div className="SearchBar-submit" onClick={this.handleSearch}>
          <a>Let's Go</a>
        </div>
      </div>
      </>
    )
  }
}

export default SearchBar
