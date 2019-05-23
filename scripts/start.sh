#!/bin/bash

# Example: yarn start pack

PACKAGE=$1

sh ./scripts/exec.sh $PACKAGE npm run start
