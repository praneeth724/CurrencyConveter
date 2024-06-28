const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

//middle wares
app.use(express.json());
app.use(cors());

//all currencies
app.get("/getAllCurrencies", async (req, res) => {
  const nameURL =
    "https://openexchangerates.org/api/currencies.json?app_id=940934dfffd24dd8ae0d607ba55ef154";

  try {
    const namesResponse = await axios.get(nameURL);
    const namesData = namesResponse.data;

    return res.json(namesData);
  } catch (err) {
    console.error(err);
  }
});

//get the target amount
app.get("/convert", async (req, res) => {
  const { date, sourceCurrency, targetCurrency, amountInSourceCurrency } =
    req.query;
  try {
    const dataUrl = `https://openexchangerates.org/api/historical/${date}.json?app_id=940934dfffd24dd8ae0d607ba55ef154`;

    const dataResponse = await axios.get(dataUrl);
    const rates = dataResponse.data.rates;

    //rates
    const sourceRate = rates[sourceCurrency];
    const targetRate = rates[targetCurrency];
    const targetAmount = (targetRate / sourceRate) * amountInSourceCurrency;
    return res.json(targetAmount);
  } catch (err) {
    console.error(err);
  }
});

//port listen
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
