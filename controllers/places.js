const router = require('express').Router()

router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/andrew-krueger-3ItdXWpNTLw-unsplash.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'images/brenda-godinez-MsTOg6rhRVk-unsplash.jpg'
  }]
  res.render('places/index', { places })
})


module.exports = router