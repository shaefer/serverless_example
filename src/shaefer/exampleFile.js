module.exports.exampleWithPathParameters = (event, context, callback) => {
    //useful bits event.pathParameters.{pathParamName}
    //more useful bits event.queryParameters.{queryParamName}
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Key: {
        id: event.pathParameters.id,
      },
    };
  
    const response = {
        statusCode: '200',
        body: `Call endpoint with id from path ${params.Key.id}`,
    };
    callback(null, response);
  };