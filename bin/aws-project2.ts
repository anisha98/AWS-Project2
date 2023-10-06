#!/usr/bin/env node
#https://www.youtube.com/watch?v=TXXtiM8DUZc&list=PLp0uiiYgT8KxOAP_U7moyUPnTqY6KKTGY&index=1&ab_channel=JonathanMoo
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsProject2Stack } from '../lib/aws-project2-stack';

const app = new cdk.App();
new AwsProject2Stack(app, 'AwsProject2Stack', {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */

  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  // env: { account: '123456789012', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});