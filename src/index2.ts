const { program } = require('commander');
var colors = require('colors');
var axios = require('axios');
const { AxiosResponse } = require('axios');
require('dotenv').config()


program
    .version("0.1.0")
    .option("-c, --city [name]", "Add city name")
    // .outputHelp(colors.red)
// .outputHelp()
// https://github.com/tj/commander.js
program.parse();
const options = program.opts();
// console.log(options.city)
if(!options.city){
    console.log(options.outputHelp(colors.red))
}
interface IWeatherResponse {
    status: string,
    count: string,
    infocode: string,
    lives: []
}

interface ILive {
    province: string,
    city: string,
    adcode: string,
    weather: string,
    temperature: string,
    winddirection: string,
    windpower: string,
    humidity: string,
    reporttime: string
}

// const URL = "http://restapi.amap.com/v3/weather/weatherInfo"

// axios.get(`${url}?key=${key}&city={encodeURI(options.city)}`).then((res) => {
//     log(res.data)
// })

async function getWeather(city: string) {
    const URL = process.env.URL
    const key = process.env.KEY
    const log = console.log
    try {
        const url = `${URL}?key=${key}&city=${encodeURI(city)}`
        // log(url)
        const response = await axios.get(url)
        // log(response)
        const live = response.data.lives[0]
        // log(live)
        log(colors.yellow(live.reporttime))
        log(colors.white(`${live.province} ${live.city}`))
        log(colors.green(`${live.weather}${live.temperature}度`))
    } catch (error) {
        log(colors.red("天气服务出现异常"))
    }
}

getWeather(options.city)