await fetch('https://your-backend.com/control', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ scene: 'Intro' }),
});
