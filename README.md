# image-comics-ical

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
