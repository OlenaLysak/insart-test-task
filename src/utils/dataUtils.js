const setUpUrl = (to = "UAH", from = "USD", amount = 1) => {
  return `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`;
};

export { setUpUrl };
