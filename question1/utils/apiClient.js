const axios = require('axios');
const config = require('../config');

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ3ODkyNDY5LCJpYXQiOjE3NDc4OTIxNjksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImZkNzI3ZWMyLTU3NDktNDgyOC04Y2E3LWY2Zjk2MjNjYjY1MyIsInN1YiI6IjIyMDAwMzExNzBjc2VoQGdtYWlsLmNvbSJ9LCJlbWFpbCI6IjIyMDAwMzExNzBjc2VoQGdtYWlsLmNvbSIsIm5hbWUiOiJtYXJhZGFuaSBuYWdhIGFkaXRoeWEiLCJyb2xsTm8iOiIyMjAwMDMxMTcwIiwiYWNjZXNzQ29kZSI6ImJlVEpqSiIsImNsaWVudElEIjoiZmQ3MjdlYzItNTc0OS00ODI4LThjYTctZjZmOTYyM2NiNjUzIiwiY2xpZW50U2VjcmV0IjoiS0Fwd3pBSEZkamZGTkNHSCJ9.f_pH5EI6xRquRiAFhrk9s3M_k_J6N5AdKdj4L0D1OfE';

async function getNumbers(numberId) {
  let url;
  switch (numberId) {
    case 'p':
      url = `${config.testServerApiUrl}primes`;
      break;
    case 'f':
      url = `${config.testServerApiUrl}fibo`;
      break;
    case 'e':
      url = `${config.testServerApiUrl}even`;
      break;
    case 'r':
      url = `${config.testServerApiUrl}random`;
      break;
    default:
      throw new Error(`Invalid numberId: ${numberId}`);
  }

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await axios.get(url, { headers, timeout: config.timeout });
    return response.data.numbers;
  } catch (error) {
    throw error;
  }
}

module.exports = { getNumbers };
