const storedNumbers = [];

async function getStoredNumbers() {
  return storedNumbers;
}

async function updateStoredNumbers(numbers) {
  storedNumbers.length = 0;
  storedNumbers.push(...numbers);
}

module.exports = { getStoredNumbers, updateStoredNumbers };
