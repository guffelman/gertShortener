const Express = require('express');
const router = Express.Router();
const Url = require('../models/Url');
const retrieveurl = require('../models/RetreiveUrl');


var appRoot = process.env.PWD;


router.get('/history', function(req, res) {
  res.sendFile('./www/history.html', {root: appRoot })
});

router.get('/linkhistory', function(req, res){
  retrieveurl.getLinks(function(result) {
    res.send(result)
  })
})

router.get('/:urlId', async (req, res) => {
  try {
    const url = await Url.findOne({ urlId: req.params.urlId });
    if (url) {
      url.clicks++;
      url.save();
      return res.redirect(url.origUrl);
    } else res.status(404).json('Not found');
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }


});


module.exports = router;