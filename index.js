const fetch = require('node-fetch')
const cheerio = require('cheerio')
const ical = require('ical-generator')
const moment = require('moment')

moment.locale('en-US');

const COMICS = ['the-walking-dead', 'die-die-die', 'saga']
const BASE_URL = 'https://imagecomics.com/comics/list/series/'


const downloadPage = async url =>
    fetch(url)
        .then(res => res.text())

const getUrl = comicName => `${BASE_URL}${comicName}/releases`

const main = async function () {
    const events = []

    for (let i = 0; i < COMICS.length; i++) {
        const comicName = COMICS[i]
        const url = getUrl(comicName)
        const webpage = await downloadPage(url)
        const $ = cheerio.load(webpage)
        $('div.cell.u-mb1').each((_, cell) => {
            const start = moment($(cell).find('a + span[class="date"]').text(), 'MMM D, YYYY')
            start.hour(18)
            const end = moment(start).add(3, 'hour')
            const newEvent = { summary: $(cell).find('a > span').text(), start, end, timestamp: start }
            events.push(newEvent)
        })
    }
    const calendar = ical({ events, timezone: 'Europe/Paris' }).toString();
    console.log(calendar)
}

main()
