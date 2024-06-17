const { Offer } = require("../model/Offer");

const suppOffer = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(`Deleting offer with id: ${id}`);
        
        const result = await Offer.findByIdAndDelete(id);

        if (!result) {
            console.log(`Offer not found for id: ${id}`);
            return res.status(404).send('Offer not found');
        }

        console.log('Offer deleted successfully');
        return res.send('Offer deleted successfully');
    } catch (err) {
        console.error('Error deleting offer:', err.message);
        return res.status(500).send('Error deleting offer');
    }
};

module.exports = {
  suppOffer,
};
