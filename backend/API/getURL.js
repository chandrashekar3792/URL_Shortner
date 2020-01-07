const {mongoConnection} = require("../lib/connectMongo");
const UrlShorten = require("../controllers/urlShortner");
const {buildErrorResponse,buildSuccessResponse}= require("../lib/buildResponse")
const {rateLimiter}= require("../lib/rateLimiter");
const {throttleLimit}=require("../config/dbConfig")
	/**
		 * @api {get} /{shortid} 2.Redirect To Actual URL
		 * @apiVersion 1.0.0
		 * @apiGroup ShortURL
		 * @apiParamExample {json} Input
		 *  {
		 *  "shortid":"meeting"}
		 * @apiSuccess {Boolean} status true/false
		 * @apiSuccess {String} response Scheme Names list
		 * @apiSuccessExample {json} Success
		 *    HTTP/1.1 301 OK
		 * @apiErrorExample {json} Error
		 *    HTTP/1.1 404 Internal Server Error
		 * {
		 status:false,
		 error:'Invalid Short ID'
	}
*/
module.exports.getShortURL=async(event,context)=>{
    try{
        if(!await rateLimiter(event.requestContext.identity.sourceIp)){
            return buildErrorResponse(403,new Error(`Quota of ${throttleLimit} per ${60}sec exceeded`));
        }
        console.log("shortid",event.pathParameters);
        const shortid = event.pathParameters.shortid;
        await mongoConnection();
        const item = await UrlShorten.findOne({ shortid: shortid });
        if(!item){
            return buildErrorResponse(400,new Error("Invalid Short Id"));
        }
        console.log("item",item.originalUrl)
        const response = {
            statusCode: 301,
            headers: {
                Location: item.originalUrl
            }
        };
        return response;        
    }catch(error){
       return buildErrorResponse(400,error);
    }
}    