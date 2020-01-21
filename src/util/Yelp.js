export const Yelp = {
  search: function(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { headers: { Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}` } })
      .then(response => {
        return response.json()
      })
      .then(jsonResponse => {
        console.log(jsonResponse)
        return jsonResponse.businesses && jsonResponse.businesses.map(business => {
          return {
            // id:
            // imageSrc:
            // name:
            // address:
            // city:
            // state:
            // zipCode:
            // category:
            // rating:
            // reviewCount :
          }
        })
      })   
  }
}