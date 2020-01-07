const UrlShorten = require("../models/URLShorten");

async function findOne(query){
  try{
    return await UrlShorten.findOne(query).exec();
  }catch(err){
    throw err;
  }
}

async function findAll(query){
  try{
    return await UrlShorten.find(query).lean().exec();
  }catch(err){
    throw err;
  }
}
async function updateOne(query,update){
  try{
    return await UrlShorten.updateOne(query,update);
  }catch(err){
    throw err;
  }
}

async function insert(data){
  try{
    shortURL=new UrlShorten(data);
    return await shortURL.save();
  }catch (err){
    throw err;
  }
}


module.exports={
  findAll,
  findOne,
  updateOne,
  insert
}
