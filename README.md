# image-comics-ical

Set a deploy key with write access on Github for this repo.

Configure git locally:

```bash
git clone git@github.com:rpellerin/image-comics-ical.git
cd image-comics-ical
git config user.email ...
git config user.name
```

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
