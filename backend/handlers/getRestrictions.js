var axios = require("axios");

var config = {
  method: "get",
  url: "https://api.covid19api.com/premium/travel/country/south-africa",
  headers: {},
};
const getRestrictions = async () => {
  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = {
  getRestrictions,
};
