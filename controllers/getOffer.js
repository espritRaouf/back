const { Offer } = require("../model/Offer");

const getOffer = async (req, res) => {
    try {
      const offers = await Offer.find();
  
      if (offers.length === 0) {
        console.log('No offers found.');
      }
      res.status(200).json(offers);
    } catch (error) {
      console.error("Error in getOffer:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  

module.exports = {
  getOffer,
};