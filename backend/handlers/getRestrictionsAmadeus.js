require("dotenv").config();
const { sendResponse } = require("../utils");
const axios = require("axios");
const qs = require("qs");

// Api work with authorisation token provide via x-www-form -urlencoded
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

const getRestrictions = async (req, res) => {
  const { access_token } = await getToken();
  console.log("acces token", access_token);

  const countryCode = null;
  const cityCode = null;

  const config = {
    method: "GET",
    url: "https://test.api.amadeus.com/v2/duty-of-care/diseases/covid19-area-report?countryCode=US&cityCode=NYC&language=EN",
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
};
