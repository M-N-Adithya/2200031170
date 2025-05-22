const apiClient = require('../utils/apiClient');
const numbersModel = require('../models/numbersModel');
const config = require('../config');

async function getNumbers(numberId) {
  const storedNumbers = await numbersModel.getStoredNumbers();
  const newNumbers = await apiClient.getNumbers(numberId);
  const updatedNumbers = await updateStoredNumbers(storedNumbers, newNumbers);
  const average = calculateAverage(updatedNumbers);
  return {
    windowPrevState: storedNumbers,
    windowCurrState: updatedNumbers,
    numbers: newNumbers,
    avg: average,
  };
}

async function updateStoredNumbers(storedNumbers, newNumbers) {
  const updatedNumbers = [...storedNumbers];
  if (updatedNumbers.length >= config.windowSize) {
    updatedNumbers.shift();
  }
  updatedNumbers.push(...newNumbers);
  await numbersModel.updateStoredNumbers(updatedNumbers);
  return updatedNumbers;
}

function calculateAverage(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

module.exports = { getNumbers };
