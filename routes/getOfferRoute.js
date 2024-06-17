const { Router } = require("express");
const { getOffer } = require("../controllers/getOffer");

const router = Router();

router.get("/offer", getOffer);


module.exports = router;