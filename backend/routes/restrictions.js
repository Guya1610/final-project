/**
  Endpoints related to destination, and restrictions details
*/
const router = require("express").Router();
const { getSavedDestinations } = require("../handlers/getSavedDestinations");
const { getRestrictions,getIATACode } = require("../handlers/getRestrictionsAmadeus");

router.get("/api/destinationSaved", (req, res) => {
  const destination = getSavedDestinations();

  return res.json({
    destination,
  });
});

router.post("/api/restrictions", async (req, res) => {
  return await getRestrictions(req, res);
});

router.get("/api/suggestions/:search/:basesearch", async (req, res) => {
  const suggestions = await getIATACode(req, res);
  return suggestions;
});

module.exports = router; 
