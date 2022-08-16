/**
  Endpoints related to user watch list
*/
const router = require("express").Router();
const { getSavedDestinations } = require("../handlers/getSavedDestinations");
const {
  createSavedDestinations,
} = require("../handlers/createSavedDestinations");
const {
  updateSavedDestinations,
} = require("../handlers/updateSavedDestinations");

router.post("/api/watchlist", async (req, res) => {
  return await createSavedDestinations(req, res);
});

router.patch("/api/watchlist/:userId", async (req, res) => {
  return await updateSavedDestinations(req, res);
});

router.get("/api/watchlist/:userId", async (req, res) => {
  return await getSavedDestinations(req, res);
});

module.exports = router;
