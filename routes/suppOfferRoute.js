const { Router } = require("express");
const { suppOffer } = require("../controllers/suppOffer");

const router = Router();

router.delete("/suppOffer/:id", suppOffer);


module.exports = router;