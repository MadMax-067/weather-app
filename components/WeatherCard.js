'use client';

import Image from 'next/image';
import { getWeatherIconUrl } from '../lib/getWeather';

export default function WeatherCard({ weatherData, isLoading, error }) {
  if (isLoading) {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 w-full max-w-md mx-auto border border-white/20">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          <p className="text-gray-600 font-medium">Fetching weather data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 w-full max-w-md mx-auto border border-red-200/50">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-red-500 text-4xl">⚠️</div>
          <div className="text-center">
            <h3 className="text-red-800 font-semibold text-lg mb-2">Oops!</h3>
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg p-8 w-full max-w-md mx-auto border border-white/20">
        <div className="text-center text-gray-500">
          <div className="text-6xl mb-4">🌤️</div>
          <p className="text-lg font-medium">Enter a city name to get started</p>
          <p className="text-sm mt-2 opacity-75">Get current weather conditions for any location</p>
        </div>
      </div>
    );
  }

  const { city, country, temperature, feelsLike, description, main, icon, humidity, windSpeed } = weatherData;

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 w-full max-w-md mx-auto border border-white/20 transition-all duration-300 hover:shadow-2xl">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          {city}
        </h2>
        <p className="text-gray-600 text-sm uppercase tracking-wider">
          {country}
        </p>
      </div>

      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative w-20 h-20">
            <Image
              src={getWeatherIconUrl(icon)}
              alt={description}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="text-center">
            <div className="text-5xl font-light text-gray-800 mb-1">
              {temperature}°
            </div>
            <div className="text-gray-600 text-sm">
              Feels like {feelsLike}°C
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-6">
        <p className="text-xl text-gray-700 font-medium capitalize mb-1">
          {description}
        </p>
        <p className="text-gray-500 text-sm">
          {main}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200/50">
        <div className="text-center">
          <div className="text-2xl mb-1">💧</div>
          <div className="text-sm text-gray-600">Humidity</div>
          <div className="font-semibold text-gray-800">{humidity}%</div>
        </div>
        <div className="text-center">
          <div className="text-2xl mb-1">💨</div>
          <div className="text-sm text-gray-600">Wind Speed</div>
          <div className="font-semibold text-gray-800">{windSpeed} m/s</div>
        </div>
      </div>
    </div>
  );
}
