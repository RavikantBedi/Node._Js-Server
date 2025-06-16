const express = require('express');
const app = express();
const port = 5000;

const {
  incidentStatusSummary,
  attackVectorSummary
} = require('./data/dashboardData');

// Root route (optional)
app.get('/', (req, res) => {
  res.send('✔️ API Server is Running. Visit /dashboard-data for data.');
});

// API route
app.get('/dashboard-data', (req, res) => {
  res.json({
    incident_status_summary: incidentStatusSummary,
    attack_vector_summary: attackVectorSummary
  });
});
app.listen(5000, '0.0.0.0', () => {
  console.log("✔️ API Server is Running. Visit /dashboard-data for data.");
});
