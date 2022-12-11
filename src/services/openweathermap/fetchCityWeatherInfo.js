import { OPEN_WEATHER_API_TOKEN, OPEN_WEATHER_API_URL } from "../../commons/config";

const fetchCityWeatherInfo = async (city) => {
    const url = OPEN_WEATHER_API_URL
    const appid = OPEN_WEATHER_API_TOKEN
    try {
        const rawResult = await fetch(`${OPEN_WEATHER_API_URL}?appid=${OPEN_WEATHER_API_TOKEN}&q=${city}`, {
            method: 'get',
        });
        const result = await rawResult.json();
        return {
            ...result,
            status: 'fetchedData'
        };
    }
    catch (err) {
        return {
            message: err.message,
            status: 'err'
        };
        throw err;
    }

};

export default fetchCityWeatherInfo;