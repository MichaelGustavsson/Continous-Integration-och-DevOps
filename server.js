const express = require('express');
const cors = require('cors');
const app = express();

const mock = require('./mock/vehicles');

app.use(cors());

app.get('/api/vehicles', (req, res) => {
  res.status(200).json({ success: true, data: mock });
});

app.get('/api/vehicles/:id', (req, res) => {
  const vehicle = mock.find((vehicle) => vehicle.id === +req.params.id);
  res.status(200).json({ success: true, data: vehicle });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
