const API_KEY = "7c640d2e56410d7f4777077f61c60d33"//not safe in an actual project
const URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric&q=`;
const query = document.getElementById('inputCity');
const city = document.getElementById('city')
const btn = document.querySelector('button');
const description = document.getElementById('description');
const temp = document.getElementById('temp')
const img = document.querySelector('img')
const errorMsg = document.getElementById('errorMsg');
const feel = document.getElementById('feel');
const days = document.getElementById('days');



async function getWeather(city) {
    try {
        const response = await fetch(URL + city);
        console.log(city);

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error(error);
    }
}

function displayWeather(weatherData) {
    if (weatherData.cod >= 200 && weatherData.cod < 300) {
        city.textContent = query.value;
        let descriptionText = weatherData.list[0].weather[0].description;
        const weatherTranslations = {
            "clear sky": "שמיים בהירים",
            "few clouds": "מעט עננים",
            "scattered clouds": "עננים פזורים",
            "broken clouds": "עננים שבורים",
            "overcast clouds": "עננות כבדה",
            "light rain": "גשם קל",
            "moderate rain": "גשם מתון",
            "heavy rain": "גשם כבד",
            "light snow": "שלג קל",
            "snow": "שלג",
            "heavy snow": "שלג כבד",
            "shower rain": "ממטרים",
            "thunderstorm": "סופת רעמים",
            "mist": "ערפל",
            "fog": "ערפל כבד",
            "drizzle": "טפטוף",
            "freezing rain": "גשם קפוא",
            "hail": "ברד",
            "dust": "אבק",
            "sand": "חול",
            "smoke": "עשן",
            "ash": "אפר וולקני",
            "squall": "משב רוח חזק",
            "tornado": "טורנדו"
        };
        const translatedDescription = weatherTranslations[descriptionText.toLowerCase()]
        description.innerHTML = translatedDescription;

        temp.innerHTML = ` ${weatherData.list[0].main.temp} C&deg;`;
        img.src = `https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`;
        feel.innerHTML = `   ${weatherData.list[0].main.feels_like} C&deg; מרגיש כמו`;
        errorMsg.innerText = '';

        let daysOutput = '';
        for (let i = 0; i < 3; i++) {
            let day = weatherData.list[i];
            let date = new Date(day.dt_txt);
            let hrs = date.getHours();
            let min = date.getMinutes();
            let temp = day.main.temp;
            let description = translatedDescription;
            let image = `<img style="width: 50px; height: 50px;" src="https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png"`
            let time = `${hrs}:${min < 10 ? '0' + min : min}`;

            daysOutput += ` ${time} <br> ${temp}C&deg; <br> ${description}<br> ${image}<br>`;
        }
        days.innerHTML = ` ${daysOutput}`;

    } else {
        errorMsg.innerText = `the city "${query.value}" is not found`
        city.innerText = '';
        description.innerText = '';
        temp.innerText = '';
        img.src = 'defaultIconWeather.png';
        days.innerHTML = '';
        feel.innerHTML = '';
    }
}

btn.addEventListener('click', () => {
    getWeather(query.value);
})
