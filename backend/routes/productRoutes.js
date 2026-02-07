const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

router.get('/:upc', async (req, res) => {
  const product = await Product.findOne({ upc: req.params.upc });
  if (!product) return res.status(404).send('Not found');
  res.json(product);
});

module.exports = router;
