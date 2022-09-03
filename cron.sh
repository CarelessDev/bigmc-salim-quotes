#!/bin/env bash

cp /home/leomotors/bots/Salim-Bot/data/morequotes.json .
git add .
git commit -m "Update Quotes $(date -u +"%Y-%m-%dT%H:%M:%SZ")"
git push
