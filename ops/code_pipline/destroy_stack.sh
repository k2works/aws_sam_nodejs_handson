#!/usr/bin/env bash
STACKNAME=AWS-SAM-NodeJs-Hands-on-pipeline

echo "**********************************"
echo STACKNAME:${STACKNAME}
echo "**********************************"

aws cloudformation delete-stack --stack-name ${STACKNAME}
