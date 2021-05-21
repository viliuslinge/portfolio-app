import React from "react";

// const CryptoJS = require("crypto-js");

// const apiKey = process.env.REACT_APP_BITFINEX_API_KEY;
// const apiSecret = process.env.REACT_APP_BITFINEX_API_KEY_SECRET;

// const apiHost = "https://api.bitfinex.com";
// const apiPath = "/v2/auth/r/wallets";
// const nonce = (Date.now() * 1000000000).toString();
// const body = {};
// const signature = `/api/${apiPath}${nonce}${JSON.stringify(body)}`;
// const sig = CryptoJS.HmacSHA384(signature, apiSecret).toString();

function App() {
  // React.useEffect(() => {
  //   getTicker();
  // }, []);

  // function getTicker() {
  //   fetch(
  //     "https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD,tLTCUSD,fUSD",
  //     {
  //       method: "GET",
  //     }
  //   )
  //     .then((res) => res)
  //     .then((json) => console.log("RESPONSAS: ", json))
  //     .catch((err) => {
  //       console.log("ERRORAS: ", err);
  //     });
  // }

  // function getWallet() {
  //   fetch(`${apiHost}${apiPath}`, {
  //     method: "POST",
  //     body: JSON.stringify(body),
  //     mode: "no-cors",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "bfx-nonce": nonce,
  //       "bfx-apikey": apiKey!,
  //       "bfx-signature": sig!,
  //     },
  //   })
  //     .then((res) => res)
  //     .then((json) => console.log("RESPONSAS: ", json))
  //     .catch((err) => {
  //       console.log("ERRORAS: ", err);
  //     });
  // }

  return <div>Hello</div>;
}

export default App;
