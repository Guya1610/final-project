/**
  Endpoints related to destination, and restrictions details
*/
const router = require("express").Router();
const { getSavedDestinations } = require("../handlers/getSavedDestinations");
// const { getRestrictions } = require("../handlers/getRestrictions");
const { getRestrictions } = require("../handlers/getRestrictionsAmadeus")

router.get("/api/destinationsaved", (req, res) => {
  const destination = getSavedDestinations();

  return res.json({
    destination,
  });
});

router.get("/api/destination", async (req, res) => {
  const restrictions = await getRestrictions(req, res);
  console.log(restrictions);
  return restrictions;
});

module.exports = router;
