const { route } = require('express/lib/application')

const router = require('express').Router()


router.get('/new', (req, res) => {
  res.render('places/new')
})

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
router.post('/', (req, res) => {
  
  res.send('POST /places')
})

module.exports = router