const redis = require('redis')
const moment = require('moment')
const {REDIS_URL,throttleLimit}=require("../config/dbConfig")
console.log("REDIS_URL",REDIS_URL);
async function checkIpExists(ip){
    try{
        const client = redis.createClient(REDIS_URL)
        client.exists(ip,(err,reply) => {
            if(err) {
             throw err;
            }
            if(reply === 1) {
                return true
            }
        })
    }catch(err) {
        throw err;
    }
}
async function checkIPLimits(ip){
    try{
        const client = redis.createClient(REDIS_URL)
        await client.get(ip,(err,reply) => {
            let data = JSON.parse(reply)
            let currentTime = moment().unix()
            let difference = (currentTime - data.startTime)/60
            if(difference < 1) {
              if(data.count > throttleLimit) {
                return false;
              }
              data.count++
              redisClient.set(ip,JSON.stringify(data));
            }else{
                let body = {
                    'count': 1,
                    'startTime': moment().unix()
                  }
                  redisClient.set(req.headers.user,JSON.stringify(body))
            }
            return true;
        });
    }catch(err){
        throw err;
    }
}
module.exports.rateLimiter = async(ip) => {
    try{
        const result=await checkIpExists(ip)
        console.log("*********************")
        if(result){
            return await checkIPLimits(ip)   
        }else{
            let body = {
                'count': 1,
                'startTime': moment().unix()
              }
            const client = redis.createClient(REDIS_URL)
            client.set(ip,JSON.stringify(body))
            return true;
        }
    }catch(err){
        throw err;
    }
}