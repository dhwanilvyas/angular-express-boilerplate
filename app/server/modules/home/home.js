var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', function (req, res) {
  axios.get('http://api.dinetym.com/restaurants').then(function(response) {
    res.render('home/home', { title:'Home', restaurants: response.data.data.data });
  }).catch(function(err) {
    console.log(err);
  });
});

module.exports = router;
