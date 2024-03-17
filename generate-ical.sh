#!/bin/bash

git checkout ical -q
rm ical.ical 2>/dev/null
node index.js > ical.ical
status=$?

if [ $status -eq 0 ]; then
    set -e
    git add ical.ical
    git commit -m 'Generate ical' -n --allow-empty -q
    git push origin ical -q
else
    exit $status
fi
