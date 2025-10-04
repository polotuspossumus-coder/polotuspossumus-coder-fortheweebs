import express from 'express';
const router = express.Router();

router.get('/sync', (req, res) => {
  // Return dashboard state (scene, overlays, etc.)
  res.json({ scene: 'Intro', overlays: ['ChatBox', 'Alerts'] });
});

export default router;
