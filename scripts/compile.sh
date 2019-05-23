#!/bin/bash

PACKAGE=$1

echo $0
echo $1

# 执行编译
sh ./scripts/exec.sh $PACKAGE npm run build