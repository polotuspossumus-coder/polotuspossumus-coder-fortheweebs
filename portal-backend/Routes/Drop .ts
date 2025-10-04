import express from 'express';
const router = express.Router();

router.post('/drop', (req, res) => {
  // Handle file upload from mobile
  // Forward to desktop or store in temp folder
  res.status(200).send('File received');
});

export default router;
