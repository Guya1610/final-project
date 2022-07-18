/**
  Endpoints related to profile information and user details
*/
const router = require("express").Router();

router.get("/api/profile", (req, res) => {
  const profile = "banaana";
  console.log(profile);
});

module.exports = router;
