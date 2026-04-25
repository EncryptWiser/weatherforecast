# 🌤️ Interactive Weather Forecast App

A beautiful, responsive weather forecast landing page built with React, TypeScript, and Tailwind CSS. Features real-time weather data, interactive elements, and a stunning UI design.

![Weather App Preview](src/imports/image-0.png)

## ✨ Features

### 🎯 Interactive Elements
- **City Search**: Search weather for any city worldwide
- **Current Location**: Auto-detect and display weather for your location
- **Dark/Light Mode**: Toggle between themes
- **Real-time Clock**: Live updating time display
- **Responsive Design**: Perfect on desktop, tablet, and mobile

### 🌡️ Weather Information
- Current temperature and "feels like" temperature
- Weather conditions with dynamic icons
- Humidity, wind speed, pressure, and UV index
- Sunrise and sunset times
- 5-day weather forecast
- Hourly forecast (next 5 hours)
- Wind direction indicators

### 🎨 Design Features
- Gradient backgrounds
- Smooth animations and transitions
- Shadow effects and modern styling
- Custom weather icons
- Dynamic color coding for day/night hours

## 🚀 Quick Start

### Option 1: Use Demo Data (Instant)
The app works immediately with sample weather data. Just open it and start exploring!

### Option 2: Enable Live Weather Data (5 minutes)

1. **Get a free OpenWeatherMap API key:**
   - Visit: https://openweathermap.org/api
   - Sign up (free, no credit card required)
   - Copy your API key

2. **Add the API key:**
   - Open `src/app/App.tsx`
   - Find: `const API_KEY = 'YOUR_API_KEY_HERE';`
   - Replace with your actual key

3. **Wait for activation:**
   - New API keys take 10-15 minutes to activate
   - Refresh the app and you'll see live weather data!

**See [QUICK_START.md](QUICK_START.md) for detailed instructions.**

## 📖 Documentation

- **[QUICK_START.md](QUICK_START.md)** - Fast setup guide (start here!)
- **[GET_FREE_API_KEY.md](GET_FREE_API_KEY.md)** - Detailed API key setup with troubleshooting
- **[WEATHER_API_SETUP.md](WEATHER_API_SETUP.md)** - Technical details and API information

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Axios** - API calls
- **date-fns** - Date formatting
- **Vite** - Build tool
- **OpenWeatherMap API** - Weather data source

## 🎮 Usage

### Search for a City
1. Click the search bar
2. Type any city name (e.g., "London", "Tokyo", "Paris")
3. Press Enter
4. Weather updates instantly!

### Use Current Location
1. Click the "Current Location" button
2. Allow location access when prompted
3. Your local weather appears automatically

### Toggle Theme
Click the "Light Mode" / "Dark Mode" button to switch themes.

### Data Source Indicator
Look for the badge at the top:
- **🌐 Live Data** (green) = Real-time weather
- **📝 Demo Data** (orange) = Sample data

## 🌐 API Details

### OpenWeatherMap Free Tier
- ✅ 60 calls per minute
- ✅ 1,000,000 calls per month
- ✅ Current weather data
- ✅ 5-day / 3-hour forecast
- ✅ No credit card required
- ✅ Free forever

### API Endpoints Used
- Current Weather: `/data/2.5/weather`
- Forecast: `/data/2.5/forecast`

## 🎨 Design Elements

The app uses weather-specific visual elements:
- **Weather Icons**: Clear, Clouds, Rain, Drizzle, Mist
- **Dynamic Gradients**: Different colors for day/night forecasts
- **Wind Direction**: Rotating compass indicators
- **Responsive Layout**: Adapts to all screen sizes

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All elements scale and reposition automatically!

## 🔧 Development

```bash
# Install dependencies
pnpm install

# The dev server is already running in Figma Make
# Just edit files and see changes instantly!
```

## 🐛 Troubleshooting

### Weather data not loading?
1. Check your API key is correct
2. Wait 10-15 minutes if you just created your account
3. Check browser console for errors
4. App will use demo data automatically if API fails

### Location not working?
1. Allow location access in browser
2. Check browser location settings
3. Try searching for a city manually instead

### Still having issues?
- See [GET_FREE_API_KEY.md](GET_FREE_API_KEY.md) for detailed troubleshooting
- Check the browser console (F12) for error messages

## 📄 License

This project uses the free tier of OpenWeatherMap API. Please review their [terms of service](https://openweathermap.org/terms) when using the API.

## 🎉 Enjoy!

Your weather forecast app is ready to use. Start exploring weather conditions around the world! ☀️🌧️⛈️❄️

---

**Made with React + TypeScript + Tailwind CSS**
