#!/bin/bash

cd image-comics-ical
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
    echo "Generate-ical.sh failed" | mail -s "Generate-ical.sh failed" root
fi
