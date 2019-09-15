const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors());

let config = {
  'x-api-key': '8786dcf3-48c4-47b2-b5da-002681d11b50',
  Accept: 'application/json'
};

const handlePayment = () => {
  axios
    .get(
      'https://gateway.gr1d.io/sandbox/solutionsone/petstandard/v1/Policies',
      {
        headers: config
      }
    )
    .then(res => {
      console.log(res);
    });
};

app.get('/', (req, res) => {
  res.send('it is working!');
});

app.get('/payment', (req, res) => {
  handlePayment();
});

const port = process.env.PORT || 3001;

app.listen(process.env.PORT || 3001, () =>
  console.log(`Server running on port ${port}`)
);
