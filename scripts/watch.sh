#!/bin/bash
npx concurrently "npx webpack --watch --env.game=$1" "serve ./dist/$1"
