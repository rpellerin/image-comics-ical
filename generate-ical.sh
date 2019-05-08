#!/bin/bash

git checkout ical
rm ical.ical
node index.js > ical.ical
status=$?

if [ $status -eq 0 ]; then
    git add ical.ical
    git commit -m 'Generate ical' -n --allow-empty
    git push origin ical
else
    echo "Generate-ical.sh failed" | mail -s "Generate-ical.sh failed" root
fi
