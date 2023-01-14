
// bring in Cloudinary
const { cloudinary } = require('../utils/cloudinary');

const getCollages = async (req, res) => {
    // placed logic inside try catch blocks
    // otherwise received UnhandledPromiseRejection error
    // Ooops!
    try {
      const { resources } = await cloudinary.search
          .expression('folder:tc_collage')
          .sort_by('public_id', 'asc')
          .max_results(88)
          .execute()
          
      // console.log()
      const publicIds = resources.map((file) => file.public_id);
      console.log(publicIds)
      res.send(publicIds);
      
    } catch (err) {
      console.log(`This is a GET error: ${err}` + err);
      res.status(500).json({ msg: 'Something went wrong' });
    }
    
}

module.exports = {
    getCollages
}