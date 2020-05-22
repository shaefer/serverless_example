module.exports.exampleWithPathParameters = (event, context, callback) => {
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Key: {
        id: event.pathParameters.id,
      },
    };
  
    const response = {
        statusCode: '200',
        body: `Call endpoint with id ${params.Key.id}`,
    };
    callback(null, response);
  };