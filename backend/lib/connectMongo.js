//Connect to MongoDB
const mongoose = require("mongoose");
const { retryCount,mongoURI } = require("../config/dbConfig");//OR Get Data From Environment Variable
mongoose.Promise = global.Promise;
module.exports.mongoConnection=async function(){
    try{
        const options={
            useNewUrlParser: true,
            keepAlive: true,
            reconnectTries:retryCount
        }
        return await mongoose.connect(mongoURI,options);
    }catch(err){
        throw err;
    }
}

