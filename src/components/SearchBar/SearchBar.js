import React from 'react'
import './SearchBar.css'



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
    this.setState({ sortBy: sortByOption })
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
    return sortByOption === this.state.sortBy ? 'active' : ''
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
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
          <input placeholder="Where?" onChange={this.handleLocationChange}/>
        </div>
        <div className="SearchBar-submit" onClick={this.handleSearch}>
          <a>Let's Go</a>
        </div>
      </div>
    )
  }
}

export default SearchBar
