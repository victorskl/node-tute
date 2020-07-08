# AWS Amplify

Center around AWS Amplify
- https://github.com/aws-amplify
- https://docs.amplify.aws/
- https://aws.amazon.com/amplify/framework/

## tl;dr

- JS Libraries 
- UI Component
- CLI
- Console
    - a Git-based workflow for hosting fullstack serverless web apps with continuous deployment

> TODO go through [Getting started](https://docs.amplify.aws/start/q/integration/js) tute to grasp whole idea. GraphQL is interesting...

## Development aspect

### Amplify Libraries

- https://github.com/aws-amplify/amplify-js
- https://aws-amplify.github.io/amplify-js/api/
- https://docs.amplify.aws/lib/q/platform/js
- https://docs.amplify.aws/start
```
npm install aws-amplify --save
```


### Amplify UI Component 

- https://docs.amplify.aws/ui

---

## Deployment aspect

In the nutshell, Amplify CLI and Amplify Console are deployment aspect of Amplify JS framework.

Amplify CLI leverage Amplify JS framework libraries to streamline fullstack deployment pipeline. Seemingly design fit for a fullstack JS App development for easing deployment burden by using under the hood, beastie CloudFormation. 

:speech_balloon: Again some DSL transformation in-between for CF templates! Is this the trend? :thinking: ... `cdk`, `sls` and, now `amplify`?

### Amplify CLI
- https://github.com/aws-amplify/amplify-cli
- https://docs.amplify.aws/cli

```
yarn global add @aws-amplify/cli
which amplify
ll /usr/local/bin/amplify
amplify
```
(da fuk! :scream_cat: me-> first time reaction to lumpy ascii logo)

- Might want to do `amplify  configure` if you are new comer :baby: to AWS.

- A veteran AWS user :neckbeard: who know-what-chu-doing to setup account per environment and IAM, might want to skip `amplify  configure` all together. Especially, if you already have `aws` CLI v2 setup for your SSO and, named profiles and, the like!

- During `amplify  init` you can select a profile (i.e. assume role through your named profile) or, simply provide IAM user credentials.
    ```
    ? Do you want to use an AWS profile? No
    ? accessKeyId:  ****
    ? secretAccessKey:  ****
    ? region:  ap-southeast-2
    ```
- Mind you, **read this** https://docs.amplify.aws/cli/start/workflows#amplify-init `amplify init`  creates 2 IAM roles and 1 bucket -- i.e. :speech_balloon: "_the deployment bucket, to support this (aws) provider's workflow_". And it generates the folder structure https://docs.amplify.aws/cli/usage/files with meta files to track state of deployment aspect -- i.e. so call your app "root stack" to sync remote CloudFormation on the particular AWS account that you provided credentials for, during init (pheww!).

- At this point, I pause further exploration on Amplify CLI as I seek more on Amplify JS Libraries side of thing. Not looking for, yet another AWS cloud-native deployment kit! Don't get me wrong, it looks good for those who start afresh on all resource setup to be driven by Amplify!

- If your stack bootstrap elsewhere, using different IoC tech kit, CI/CD workflow and pipeline, then Amplify CLI and its Console takes not much of value. Unless you could make total migration on existing resources to Amplify workflow.

TODO to myself: may be, I will experiment this stack migration to Amplify workflow, sometime later!

### Amplify Console
- (Didn't look at it closely), but it is just fronting :point_up: CLI counterpart and design-fit CI/CD workflow setup for what might end up serverless backend stack for your Amplify App. Sort of Lightsail, but for your own developed App stack, conceptually, you-know-what-i-mean :smile_cat:.
- https://aws.amazon.com/amplify/console/
- https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

## Mashup articles
- https://aws.amazon.com/blogs/aws/improve-your-app-testing-with-amplify-consoles-pull-requests-previews-and-cypress-testing/
