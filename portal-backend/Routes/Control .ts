import express from 'express';
const router = express.Router();

router.post('/control', (req, res) => {
  const { scene, overlay } = req.body;
  // Send command to OBS WebSocket
  res.status(200).send('Control command sent');
});

export default router;
