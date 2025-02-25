const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Evaluation data for test program
const evaluationData = {
  beginner: [
    { student: 'Ollie', evaluation: 'Great course for beginners!' },
    { student: 'Alyssa', evaluation: 'Helped me get started with Spanish.' }
  ],
  intermediate: [
    { student: 'Edward', evaluation: 'Challenging yet rewarding.' },
    { student: 'Bella', evaluation: 'Good mix of exercises.' }
  ],
  advanced: [
    { student: 'Joe', evaluation: 'Excellent advanced topics.' },
    { student: 'Kate', evaluation: 'Helped polish my fluency.' }
  ]
};

app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get evaluations for a given course level
app.get('/api/evaluations/:level', (req, res) => {
  const level = req.params.level.toLowerCase();
  const evaluations = evaluationData[level] || [];
  res.json(evaluations);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});