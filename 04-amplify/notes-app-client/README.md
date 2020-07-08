# notes-app-client

The [notes-app-client](https://github.com/victorskl/serverless-tute/blob/master/notes-app-client/package.json) is an SPA React app, which use `aws-amplify` JS framework for 
1. Client auth against Cognito through Amplify [Authentication library interface](https://docs.amplify.aws/lib/auth/start/q/platform/js#re-use-existing-authentication-resource) and, 
2. Uploads file to S3 bucket through Amplify [Storage library interface](https://docs.amplify.aws/lib/storage/getting-started/q/platform/js#manual-setup-import-storage-bucket)
3. Interact with API backend through Amplify [API REST interface](https://docs.amplify.aws/lib/restapi/getting-started/q/platform/js#manual-setup-import-existing-rest-api)

Specifically, see [`index.js#L11`](https://github.com/victorskl/serverless-tute/blob/master/notes-app-client/src/index.js#L11)

It is part of tute from [serverless-stack](https://github.com/victorskl/serverless-tute/blob/master/SERVERLESS.md) with a tweak for backend resources (i.e. Cognito and S3 bucket) being [provisioned by terraform](https://github.com/victorskl/serverless-tute/tree/master/notes-app-terraform). Whereas FaaS/serverless realated resources (i.e.  Lambda, APIGateway) being provisioned by serverless/sls.
