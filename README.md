# 🌤️ Weather App

A beautiful, minimal, and responsive weather application built with Next.js and Tailwind CSS. Get current weather conditions for any city in the world with a clean, modern interface.

## ✨ Features

- 🌍 **Global Weather Data** - Get weather for any city worldwide
- 🌡️ **Detailed Information** - Temperature, feels like, humidity, wind speed, and more
- 🎨 **Beautiful UI** - Clean, modern design with smooth animations
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- ⚡ **Fast Loading** - Optimized performance with Next.js
- 🔍 **Smart Search** - Real-time input validation and error handling
- 🖼️ **Weather Icons** - Visual weather representation from OpenWeatherMap
- 🌈 **Gradient Backgrounds** - Beautiful gradient backgrounds with animated decorations

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: JavaScript/React
- **API**: OpenWeatherMap API
- **Deployment**: Vercel (recommended)

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your OpenWeatherMap API key**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api)
   - Get your free API key

4. **Set up environment variables**
   - Create a `.env.local` file in the root directory
   - Add your API key:
   ```env
   NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - Start searching for weather data!

## 📁 Project Structure

```
weather-app/
├── app/
│   ├── page.js          # Main weather page with search functionality
│   ├── layout.js        # Root layout component
│   └── globals.css      # Global styles and Tailwind imports
├── components/
│   └── WeatherCard.js   # Weather display component
├── lib/
│   └── getWeather.js    # Weather API utilities
├── public/              # Static assets
├── .env.local          # Environment variables (not tracked)
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```

## 🎨 Design Features

- **Glassmorphism Effects** - Frosted glass appearance with backdrop blur
- **Smooth Animations** - Loading spinners and hover transitions
- **Gradient Backgrounds** - Beautiful blue gradient with floating decorations
- **Responsive Layout** - Mobile-first design approach
- **Typography** - Clean, readable fonts with proper hierarchy
- **Error Handling** - User-friendly error messages and states

## 📝 API Reference

The app uses the OpenWeatherMap Current Weather API:

```
GET https://api.openweathermap.org/data/2.5/weather
```

**Parameters:**
- `q`: City name
- `appid`: Your API key
- `units`: metric (for Celsius)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌟 Usage

1. Enter a city name in the search input
2. Click "Get Weather" or press Enter
3. View the current weather conditions
4. See temperature, weather description, humidity, and wind speed
5. Weather icons automatically update based on conditions

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import your project to [Vercel](https://vercel.com)
3. Add your environment variable `NEXT_PUBLIC_WEATHER_API_KEY`
4. Deploy!

### Other Platforms

The app can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- Heroku
- AWS Amplify

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_WEATHER_API_KEY` | OpenWeatherMap API key | Yes |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source.

## 🙏 Credits

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

Made with ❤️ by Manraj
