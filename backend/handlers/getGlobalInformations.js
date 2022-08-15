const { sendResponse } = require("../utils");

const axios = require("axios");
const config = {
    method: 'get',
    url: 'https://api.covid19api.com/summary',
    headers: {}
  };

const getGlobalInformations = async (req, res) => {
  await axios
    .request(config)
    .then((response) => {
      sendResponse(res, 200, response.data);
    })
    .catch((error) => {
      sendResponse(res, error, [], "Informations not found");
    });
};

module.exports = {
  getGlobalInformations,
};
