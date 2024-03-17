# image-comics-ical

A NodeJS script that creates a file `ical.ical` containing upcoming releases dates for Image Comics. Meant to be run periodically on a server. The `ical.ical` file can then be made publicly available and used as an external calendar in Google Calendar.

## HOW TO

[Set a deploy key with write access on Github for this repo using the server SSH RSA key.](https://github.com/rpellerin/image-comics-ical/settings/keys/new)

Configure git locally on the server:

```bash
git clone git@github.com:rpellerin/image-comics-ical.git
cd image-comics-ical
git config user.email ...
git config user.name
```

Use NVM or install latest NodeJS:

```bash
nmv install
nvm use
```

Then:

```bash
node index > ical.ical
```
