import cheerio from "cheerio";
import ical from "ical-generator";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js"; // dependent on utc plugin

dayjs.extend(utc);
dayjs.extend(timezone);

const COMICS = ["the-walking-dead", "die-die-die", "saga"];
const BASE_URL = "https://imagecomics.com/comics/list/series/";

const downloadPage = async (url) => fetch(url).then((res) => res.text());

const getUrl = (comicName) => `${BASE_URL}${comicName}/releases`;

const main = async function() {
  const events = [];

  for (let i = 0; i < COMICS.length; i++) {
    const comicName = COMICS[i];
    const url = getUrl(comicName);
    const webpage = await downloadPage(url);
    const $ = cheerio.load(webpage);
    $("div.cell.u-mb1").each((_, cell) => {
      const start = dayjs(
        $(cell)
          .find('a + span[class="date"]')
          .text(),
        "MMM D, YYYY"
      )
        .hour(18)
        .tz("Europe/Paris", true);
      const end = start.add(3, "hour");

      const newEvent = {
        summary: $(cell)
          .find("a > span")
          .text(),
        start: start,
        end: end,
        timestamp: start,
        id: `${comicName}-${start.format("YYYY-MM-DD")}`,
      };
      // console.log(newEvent);
      events.push(newEvent);
    });
  }
  const calendar = ical({ events }).toString();
  console.log(calendar);
};

main();
