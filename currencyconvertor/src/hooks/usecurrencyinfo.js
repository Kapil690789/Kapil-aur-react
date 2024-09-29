// import {useEffect, useState} from "react"

// function usecurrencyinfo(currency) {
//     const [data,setData] = useState({})
//     useEffect(() => {
//          fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//          .then((res) => res.json())
//          .then((res) => setData(res[currency]))
//          console.log(data);
//     }, [currency])
//     console.log(data);
//     return data
// }

// export default usecurrencyinfo;
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const API_KEY = "369e8d77bf8b8bc11aa34912"; // Your API key for ExchangeRate-API

  useEffect(() => {
    const fetchCurrencyInfo = async () => {
      try {
        // Fetch currency data from ExchangeRate-API
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currency.toUpperCase()}`
        );

        if (!response.ok) {
          throw new Error("Error fetching currency data");
        }

        const result = await response.json();
        setData(result.conversion_rates); // Store the conversion rates for the currency
      } catch (error) {
        console.error("Error fetching currency data:", error);
        setData({}); // Reset data in case of an error
      }
    };

    fetchCurrencyInfo();
  }, [currency]);

  return data; // Return the fetched currency data
}

export default useCurrencyInfo;
