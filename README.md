# image-comics-ical

![image](https://github.com/rpellerin/image-comics-ical/assets/5323445/c9d602ec-320a-44d7-8fe1-3c692da1165a)

A NodeJS script that creates a file `ical.ical` containing upcoming release dates for Image Comics, so that I know when to go to my local comic shop. ☺️

Meant to be run periodically on a server. The `ical.ical` file can then be made publicly available and used as an external calendar in Google Calendar.
Updated here in this repo automatically through a GitHub Action. 

## HOW TO

Install latest NodeJS with NVM, and the dependencies:

```bash
nvm install
nvm use

npm install
```

Then:

```bash
node index > ical.ical
```

For more information, open the file [.github/workflows/update-ical.yml](https://github.com/rpellerin/image-comics-ical/blob/master/.github/workflows/update-ical.yml).
