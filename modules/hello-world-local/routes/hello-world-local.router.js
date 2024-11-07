import routerBase from 'endurance-core/lib/router.js';

const router = routerBase();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Hello World 
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/",  (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

export default router;
