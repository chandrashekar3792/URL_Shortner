const validUrl = require("valid-url");
const {mongoConnection} = require("../lib/connectMongo");
const {generateShortId} = require('../lib/shortURLGenerator');
const {rateLimiter}= require("../lib/rateLimiter");
const UrlShorten = require("../controllers/urlShortner");
const {buildErrorResponse,buildSuccessResponse}= require("../lib/buildResponse");
const {throttleLimit}=require("../config/dbConfig")

	/**
		 * @api {post} /api/v1/shorturl/new 1.Generate Short URL
		 * @apiVersion 1.0.0
		 * @apiGroup ShortURL
		 * @apiParamExample {json} Input
		 *  {
		 *  "originalUrl":"https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai",
		 *  "shortid":""}
		 * @apiSuccess {Boolean} status true/false
		 * @apiSuccess {String} response Scheme Names list
		 * @apiSuccessExample {json} Success
		 *    HTTP/1.1 200 OK
		 *{
            "status": true,
            "data": {
                "originalUrl": "https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai",
                "shortUrl": "0.0.0.0:8090/3KIlKwGK",
                "shortid": "3KIlKwGK"
            }
        }
		 * @apiErrorExample {json} Error
		 *    HTTP/1.1 404 Internal Server Error
		 * {
		 status:false,
		 error:'No Mutual fund with search query'
	}
*/
module.exports.generateShortURL= async (event, context) => {
    try{
        if(!await rateLimiter(event.requestContext.identity.sourceIp)){
            return buildErrorResponse(403,new Error(`Quota of ${throttleLimit} per ${60}sec exceeded`));
        }
        
        let { shortid, originalUrl }=JSON.parse(event.body);
        if(!originalUrl || !validUrl.isUri(originalUrl)) {
            return buildErrorResponse(404,new Error("Invalid Given Url"))
        }
        await mongoConnection();
        let urlData = await UrlShorten.findOne({originalUrl:originalUrl});
        if (!urlData) {
            if(!shortid){
                shortid = generateShortId();
            }
            shortUrl = event.headers.Host + '/' + shortid;
            urlData = { originalUrl, shortUrl, shortid};
            // Add the item to db
            await UrlShorten.insert(urlData);
            // await item.save();
        }
        return buildSuccessResponse(200,urlData);
    }catch(err){
        return buildErrorResponse(400,err);
    }
}