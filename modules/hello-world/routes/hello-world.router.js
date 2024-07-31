const router = require('endurance-core/lib/router')();

router.get("/",  (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});


module.exports = router;
