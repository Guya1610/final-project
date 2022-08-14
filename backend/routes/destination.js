/**
  Endpoints related to destination, and restrictions details
*/
const router = require("express").Router();
const { getSavedDestinations } = require("../handlers/getSavedDestinations");
const { getRestrictions } = require("../handlers/getRestrictionsAmadeus");

router.get("/api/destinationSaved", (req, res) => {
  const destination = getSavedDestinations();

  return res.json({
    destination,
  });
});

router.get("/api/destination", async (req, res) => {
  return await getRestrictions(req, res);
});

module.exports = router;
