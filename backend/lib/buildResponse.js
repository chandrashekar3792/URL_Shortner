module.exports.buildErrorResponse=(code,error)=>{
    return({
        'statusCode' : code,
        'body'       : JSON.stringify({status : false,  error:error.stack}),
        'headers': {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials":"true",
            "Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT",
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
        }
    })
}

module.exports.buildSuccessResponse=(code,data)=>{
    return({
        'statusCode' : code,
        'body'       : JSON.stringify({status : true,data}),
        'headers': {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials":"true",
            "Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT",
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
        }
    })
}