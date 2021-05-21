const CryptoJS = require("crypto-js"); // Standard JavaScript cryptography library
const fetch = require("node-fetch"); // "Fetch" HTTP req library

require("dotenv").config();

const apiKey = process.env.REACT_APP_BITFINEX_API_KEY;
const apiSecret = process.env.REACT_APP_BITFINEX_API_KEY_SECRET;

const apiPath = "v2/auth/r/wallets"; // Example path

const nonce = (Date.now() * 1000).toString(); // Standard nonce generator. Timestamp * 1000
const body = {}; // Field you may change depending on endpoint

let signature = `/api/${apiPath}${nonce}${JSON.stringify(body)}`;
// Consists of the complete url, nonce, and request body

const sig = CryptoJS.HmacSHA384(signature, apiSecret).toString();
// The authentication signature is hashed using the private key

fetch(`https://api.bitfinex.com/${apiPath}`, {
  method: "POST",
  body: JSON.stringify(body),
  headers: {
    "Content-Type": "application/json",
    "bfx-nonce": nonce,
    "bfx-apikey": apiKey,
    "bfx-signature": sig,
  },
})
  .then((res) => res.json())
  .then((json) => console.log(json)) //Logs the response body
  .catch((err) => {
    console.log(err);
  });
