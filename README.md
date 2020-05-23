# serverless_example

https://www.serverless.com/blog/cicd-for-serverless-part-1/
https://www.serverless.com/blog/cicd-for-serverless-part-2/


1. Copy project and rework serverless.yml for simpler use case to start
1. Ensure severless was installed globally and that aws credentials were in place
1. Get serverless working by switching back to node 12 instead of 13 which won't work at all
1. setup local data file to properly mock the pathParameter for the http call (get-local.json)
1. test example locally `serverless invoke local --function exampleFunction --path test/cleverorc/get-local.json`
    - What is what (notes on the names of things)
        - The file name of the file with the lambda code in it, 
        - the defined functionName in the serverless.yml file
        - the name of the exported method on the lambda.
1. test real one locally `serverless invoke local --function search --path test/cleverorc/get-local.json`
1. Make sure to set region on provider to your desired otherwise will probably default to us-east-1 default stage will be "dev"
1. serverless deploy (had to correct aws credentials) lambda and dynamodb table creation worked out of the box. (added step for region setting)
