const axios = require('axios');

const getExchangeRate = async (from, to) => {
    try{
        const response  = await axios.get(`http://api.fixer.io/latest?base=${from}`);
        const rate = response.data.rates[to];

        if(rate){
            return rate;
        } else {
            throw Error();
        }
    } catch (e) {
        throw new Error(`Unable to get exchange rate for ${from} and ${to}`)
    }
};

const getCountries = async (currencyCode)=>{
    try{
        const response  = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
        return response.data.map(country=> country.name);
    }catch (e){
        throw new Error(`Unable to get countried that use ${currencyCode}`);
    }
};

const convertCurrency = (from, to , amount) => {
    let countries;
    return getCountries(to).then(tempCountries => {
        countries = tempCountries;
        return getExchangeRate(from , to);
    }).then(rate=>{
        const exchangeAmount = amount * rate;

        return `${amount} ${from} is worth ${exchangeAmount} ${to}. ${to} can be used in the following countries: ${countries.join(',')}`;
    });
};

const convertCurrencyAlt = async (from, to, amount) => {
    const countries  = await getCountries(to);
    const exchangeRate = await getExchangeRate(from, to);
    const exchangeAmount = amount * exchangeRate;
    return `${amount} ${from} is worth ${exchangeAmount} ${to}. ${to} can be used in the following countries: ${countries.join(',')}`;
};

convertCurrencyAlt('USD', 'EUR', 100).then(countries=>{
    console.log(countries)
}).catch(e=>{console.log(e)});