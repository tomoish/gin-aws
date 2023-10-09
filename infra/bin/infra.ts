#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { GinLambdaStack } from "../lib/gin-lambda-stack";

const app = new cdk.App();
new GinLambdaStack(app, "InfraStack", {});
