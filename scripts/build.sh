#!/bin/bash

# Example: yarn build pack1 pack2 packN

PACKAGES="${@: 1}"

mkdir -p dist

for PACKAGE in $PACKAGES
do
  sh $PWD/scripts/compile.sh $PACKAGE
  sh $PWD/scripts/sync.sh $PACKAGE
done

find ./dist -name '*.map' -delete
find ./dist -name '\.*' -delete