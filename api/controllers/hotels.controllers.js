var hotelsData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res) {
  console.log("GET the hotels");
  res
    .status("200")
    .send(hotelsData);
};
