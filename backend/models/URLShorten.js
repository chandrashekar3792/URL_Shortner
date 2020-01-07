const mongoose = require("mongoose");
const { Schema } = mongoose;
const { urlExpiry } = require("../config/dbConfig");
const urlShortenSchema = new Schema({
  originalUrl: String,
  shortid: String,
  shortUrl: String,
  count:{type:Number,default:0},
  createdAt: { type: Date, default: Date.now,expires: urlExpiry },
  updatedAt: { type: Date, default: Date.now }
});


// urlShortenSchema.post('save', function (doc) {
//     console.log('this fired after a document was saved');
// });
  
urlShortenSchema.post('findOne', function(doc) {
  if(doc && doc._id){
    console.log("doc",doc);
    doc.count++;
    doc.updatedAt=Date.now()
    doc.save();
  }
   
});

module.exports = mongoose.model("UrlShorten", urlShortenSchema);