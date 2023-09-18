import axios from "axios"

export const weatherAPI = {
    async getWeather(cityName) {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&limit=5&appid=${'127cc552ac47ccd35f3d3ea3c91669bf'}&lang=ru&units=metric`);
            return response.data;
        }
        catch {

        }
    },

    async getMap(lat, lon) {
        const response = await axios.get(`https://tile.openweathermap.org/map/${'precipitation_new'}/${2}/${lat}/${lon}.png?appid=${'127cc552ac47ccd35f3d3ea3c91669bf'}`);
        return response.data;
    },
}