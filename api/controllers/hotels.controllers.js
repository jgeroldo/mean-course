var hotelsData = require('../data/hotel-data.json');


module.exports.hotelsGetAll = function(req, res) {
  console.log("GET the hotels");
  console.log(req.query);

  var offset = 0;
  var count = 5;

  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }

  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }

  var returnData = hotelsData.slice(offset, offset + count);

  res
    .status("200")
    .send(returnData);
};

module.exports.hotelsGetOne = function(req, res) {
  /* getting the url paramter */
  var hotelId = req.params.hotelId;
  /* getting the hotel data */
  var thishotel = hotelsData[hotelId];
  console.log("GET the hotelId: ", hotelId);
  res
    .status("200")
    /* show the hotel data */
    .send(thishotel);
};

module.exports.hotelsAddOne = function(req, res) {
  console.log("Post a New hotel");
  console.log(req.body);
  res
    .status("200")
    .json(req.body);
};
