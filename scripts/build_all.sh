#!/bin/bash
for path in ./src/games/*; do
    [ -d "${path}" ] || continue # if not a directory, skip
    game="$(basename "${path}")"
    echo "=============================="
    echo "=============================="
    echo "Building $game"
    echo "------------------------------"
    npx webpack --env.game=$game
    echo "------------------------------"
    echo "Building Complete"
    echo "=============================="
    echo "=============================="
done
