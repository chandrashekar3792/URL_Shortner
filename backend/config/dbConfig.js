module.exports = {
    mongoURI: "mongodb://mongodb/url-shortner",
    REDIS_URL: "redis://redisdb:6379",
    urlExpiry:3600, //URL Expiry in Seconds
    retryCount:5, // Retry to connect to DB
    throttleLimit:100
};
  