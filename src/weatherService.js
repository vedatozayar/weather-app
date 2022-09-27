const API_KEY = '296c9d841d07ade2288b1150d9de3a18';

const makeIconURL = (iconId) =>
  `http://openweathermap.org/img/wn/${iconId}@2x.png`;

const getFormattedWeatherData = async (city, units = 'metric') => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);

  const {
    weather,

    main: { temp, feels_like, temp_max, temp_min, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = data;

  const { description, icon } = weather[0];

  return {
    description,
    iconURL: makeIconURL(icon),

    temp,
    temp_max,
    temp_min,
    humidity,
    pressure,
    feels_like,
    speed,
    country,
    name,
  };
};

export { getFormattedWeatherData };
