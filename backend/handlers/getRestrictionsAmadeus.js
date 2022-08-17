require("dotenv").config();
const { sendResponse } = require("../utils");
const axios = require("axios");
const qs = require("qs");

// Api work with authorisation token provide via x-www-form-urlencoded
const getToken = async () => {
  let token = null;
  const config = {
    method: "POST",
    url: "https://test.api.amadeus.com/v1/security/oauth2/token",
    data: qs.stringify({
      grant_type: "client_credentials",
      client_id: process.env.AMADEUS_API_KEY,
      client_secret: process.env.AMADEUS_API_SECRET,
    }),
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
  };

  await axios(config)
    .then((response) => {
      return (token = response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  return token;
};

const getIATACode = async (req, res) => {
  const { access_token } = await getToken();
  const { search } = req.params;
  const { basesearch } = req.params;

  const URL =
    basesearch == 0
      ? `https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword=${search}`
      : `https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT&keyword=${search}`;
      
  const config = {
    method: "get",
    url: URL,
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };
  await axios
    .request(config)
    .then((response) => {
      sendResponse(res, 200, response.data);
    })
    .catch((error) => {
      sendResponse(res, error, [], "Informations not found");
    });
};

const getRestrictions = async (req, res) => {
  const { access_token } = await getToken();

  const countryCode = req.body.country;
  const cityCode = req.body.city;

  const URL = cityCode
    ? `https://test.api.amadeus.com/v2/duty-of-care/diseases/covid19-area-report?countryCode=${countryCode}&cityCode=${cityCode}&language=EN`
    : `https://test.api.amadeus.com/v2/duty-of-care/diseases/covid19-area-report?countryCode=${countryCode}&language=EN`;

  const config = {
    method: "GET",
    url: URL,
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };

  await axios(config)
    .then((response) => {
      sendResponse(res, 200, response.data);
    })
    .catch((error) => {
      sendResponse(res, 500, error);
    });
};

module.exports = {
  getRestrictions,
  getIATACode,
};
