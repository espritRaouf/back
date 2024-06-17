const { Offer } = require("../model/Offer");

const addOffer = async (req, res) => {
  try {
    const { description, prix, type, image, disponibilite } = req.body;

    // Validate inputs
    if (!description || !prix || !type || !image || !disponibilite) {
      return res.status(400).send('All fields are required.');
    }

    const newOffer = new Offer({
      description,
      prix,
      type,
      image,
      disponibilite
    });

    await newOffer.save();

    console.log('Offer added successfully');
    return res.status(201).send('Offer added successfully');
  } catch (err) {
    console.error('Error adding offer:', err);
    return res.status(500).send('Error adding offer');
  }
};

module.exports = {
  addOffer,
};
