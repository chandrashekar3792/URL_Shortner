const shortid = require("shortid");
function generateShortId() {
  return shortid.generate();
}

module.exports = {
  generateShortId:generateShortId
};
