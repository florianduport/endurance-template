const router = require('endurance-core/lib/router')();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Hello World Local
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/",  (req, res) => {
  res.status(200).json({ message: 'Hello World Local!' });
});


module.exports = router;
