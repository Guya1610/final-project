/**
  Endpoints related to login, and user details
*/
const router = require("express").Router();

router.get("/api/login", (req, res) => {
  const login = "login";
  console.log(login);
});

module.exports = router;
