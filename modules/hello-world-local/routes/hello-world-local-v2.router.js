import createRouter from 'endurance-core/lib/router';

const router = createRouter();

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
  res.status(200).json({ message: 'Hello World Local! v2' });
});

export default router;
