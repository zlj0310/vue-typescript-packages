#!/bin/bash

PACKAGE=$1
NAME=$PACKAGE

REGXP="^@"

if [[ $NAME =~ $REGXP ]]; then
  NAME=$(echo $NAME | awk -F/ '{print $2}')
fi

sh ./scripts/exec.sh $PACKAGE rsync -av --delete dist/ ../../dist/$NAME
