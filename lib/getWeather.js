export async function getWeather(city) {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  
  if (!API_KEY) {
    throw new Error('Weather API key is not configured');
  }

  if (!city || city.trim() === '') {
    throw new Error('City name is required');
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city.trim())}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found. Please check the spelling and try again.');
      } else if (response.status === 401) {
        throw new Error('Invalid API key. Please check your configuration.');
      } else {
        throw new Error('Failed to fetch weather data. Please try again later.');
      }
    }

    const data = await response.json();
    
    return {
      city: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      description: data.weather[0].description,
      main: data.weather[0].main,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      pressure: data.main.pressure,
      visibility: data.visibility / 1000,
    };
  } catch (error) {
    if (error.message.includes('fetch')) {
      throw new Error('Network error. Please check your internet connection.');
    }
    throw error;
  }
}

export function getWeatherIconUrl(iconCode) {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
