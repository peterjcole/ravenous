import React from 'react'
import Business from '../Business/Business'

class BusinessList extends React.Component {

  generateBusinesses() {
    return this.props.businesses.map(business => <Business key={business.id} business={business}/>)
  }


  render() {
    return <div className = "BusinessList">
      {this.generateBusinesses()}
    </div>
  }
}

export default BusinessList
