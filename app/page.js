'use client';

import { useState } from 'react';
import WeatherCard from '../components/WeatherCard';
import { getWeather } from '../lib/getWeather';

export default function Home() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    setIsLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const data = await getWeather(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
    if (error) {
      setError(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              🌤️ Weather App
            </h1>
            <p className="text-blue-100 text-lg md:text-xl">
              Get current weather conditions for any city
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="text"
                  value={city}
                  onChange={handleInputChange}
                  placeholder="Enter city name (e.g., London, New York)"
                  className="w-full px-6 py-4 text-lg rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-blue-100 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all duration-300"
                  disabled={isLoading}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading || !city.trim()}
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    Searching...
                  </span>
                ) : (
                  '🔍 Get Weather'
                )}
              </button>
            </div>
          </form>

          <WeatherCard 
            weatherData={weatherData} 
            isLoading={isLoading} 
            error={error} 
          />

          <div className="text-center mt-8 text-blue-100/80 text-sm">
            <p>Powered by OpenWeatherMap API</p>
          </div>
        </div>
      </div>
    </div>
  );
}
