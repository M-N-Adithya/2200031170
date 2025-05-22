const express = require('express');
const router = express.Router();
const numbersService = require('../services/numbersService');

router.get('/:numberId', async (req, res) => {
  const numberId = req.params.numberId;
  const response = await numbersService.getNumbers(numberId);
  res.json(response);
});

module.exports = router;
