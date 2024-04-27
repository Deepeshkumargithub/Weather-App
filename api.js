const apiKey = '693aa7dac36ce2983e167bd7092c63c2';

const getWeather = async (city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=693aa7dac36ce2983e167bd7092c63c2`)
    .then((res) => res.json())
    .then((json) => {
        return json;
    })
}

export default getWeather;