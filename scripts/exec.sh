#!/bin/bash

PACKAGE=$1
COMMAND="${@: 2}"

echo 'exec' $PACKAGE $COMMAND

cd ./packages/$PACKAGE
$COMMAND
