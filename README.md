# image-comics-ical

Set a deploy key on Github for this repo.

Use NVM or install latest NodeJS:

```bash
curl -sL https://deb.nodesource.com/setup_12.x | bash -
```

Then:

```bash
npm i
crontab -e
0 10 * * 1 ./generate-ical.sh
```
