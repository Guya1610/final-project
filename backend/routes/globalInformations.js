/**
  Endpoints related to destination, and restrictions details
*/
const router = require("express").Router();
const { getGlobalInformations } = require("../handlers/getGlobalInformations");

router.get("/api/information", async (req, res) => {
  const restrictions = await getGlobalInformations(req, res);
  return restrictions;
});

module.exports = router;
