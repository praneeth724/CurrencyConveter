import React, { useEffect, useState } from "react";
import axois from "axios";

function MainPage() {
  const [date, setDate] = useState(null);
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amountInSourceCurrency, setAmoutInSourceCurrency] = useState(0);
  const [amountInTargetCurrency, setAmountInTargetCurrency] = useState(0);
  const [currencyNames, setCurrecnyNames] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axois.get("http://localhost:3000/convert", {
        params: {
          date,
          sourceCurrency,
          targetCurrency,
          amountInSourceCurrency,
        },
      });

      setAmountInTargetCurrency(response.data);
      setLoading(false);
      //ToDo:set the rest....
      console.log(amountInSourceCurrency, amountInTargetCurrency);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const getCurrencyNames = async () => {
      try {
        const response = await axois.get(
          "http://localhost:3000/getAllCurrencies"
        );
        setCurrecnyNames(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getCurrencyNames();
  }, []);

  return (
    <div>
      <h1 className=" lg:mx-32 text-5xl font-bold text-green-500">
        Convert Your Currency Today
      </h1>
      <p className=" lg:mx-32 opacity-40 py-6">
        Welcome to "Convert Your Currencies Today"! This application allows you
        to easily convert currencies based on the latest exchange rates.Whether
        you're planning a trip,managing your finances,or simply curious about
        the Value of your money in different currencies,this tool is here to
        help.
      </p>
      <div className="mt-5 flex items-center justify-center flex-col">
        <section className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor=""
                className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date
              </label>
              <input
                onChange={(e) => setDate(e.target.value)}
                type="Date"
                id={date}
                name={date}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder=""
                required
              />
              <label
                htmlFor={sourceCurrency}
                className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
              >
                Source Currency
              </label>
              <select
                onChange={(e) => setSourceCurrency(e.target.value)}
                value={sourceCurrency}
                id={sourceCurrency}
                name={sourceCurrency}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              >
                {/* Default empty option */}
                {Object.keys(currencyNames).map((currency) => (
                  <option className=" p-1" key={currency} value={currency}>
                    {currencyNames[currency]}
                  </option>
                ))}
              </select>
              <label
                htmlFor={targetCurrency}
                className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Target Currency
              </label>
              <select
                onChange={(e) => setTargetCurrency(e.target.value)}
                value={targetCurrency}
                id={targetCurrency}
                name={targetCurrency}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              >
                {Object.keys(currencyNames).map((currency) => (
                  <option className=" p-1" key={currency} value={currency}>
                    {currencyNames[currency]}
                  </option>
                ))}
              </select>
              <label
                htmlFor={amountInSourceCurrency}
                className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
              >
                Amount in Source Currency
              </label>
              <input
                onChange={(e) => setAmoutInSourceCurrency(e.target.value)}
                type="number"
                value={amountInSourceCurrency}
                id={amountInSourceCurrency}
                name={amountInSourceCurrency}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Amount in Source Currency"
                required
              />
            </div>
            <button className=" bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md">
              {""}
              Get the Target Currency
            </button>
          </form>
        </section>
      </div>
      {!loading ? (
        <section className="  lg:mx-60 text-xl mt-5">
          {amountInSourceCurrency} {currencyNames[sourceCurrency]} is equal to{" "}
          {""}
          <span className=" text-green-500 font-bold">
            {" "}
            {amountInTargetCurrency}
          </span>
          {""}
          in{currencyNames[targetCurrency]}
        </section>
      ) : null}
    </div>
  );
}

export default MainPage;
