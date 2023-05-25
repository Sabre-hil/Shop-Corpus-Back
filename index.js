require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'All workink nice!' });
});

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Your server is working ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
