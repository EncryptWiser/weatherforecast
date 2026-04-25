# Weather Forecast App - API Setup

## Getting Started with Live Weather Data

This weather app uses the OpenWeatherMap API to fetch real-time weather data.

### Option 1: Use Mock Data (Default)
The app automatically falls back to mock data if the API key is not configured or if there's an error. You can use the app immediately with sample data.

### Option 2: Enable Live Weather Data

To use real weather data, follow these steps:

1. **Get a Free API Key:**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Click "Sign Up" to create a free account
   - After signing in, go to "API Keys" section
   - Copy your default API key (or create a new one)

2. **Add API Key to the App:**
   - Open `src/app/App.tsx`
   - Find the line: `const API_KEY = 'YOUR_API_KEY_HERE';`
   - Replace `'YOUR_API_KEY_HERE'` with your actual API key
   - Example: `const API_KEY = 'abc123def456ghi789';`

3. **Save and Refresh:**
   - The app will now fetch live weather data from OpenWeatherMap

## Features

### Interactive Elements:
- **Search Bar**: Type any city name and press Enter to get weather for that location
- **Current Location Button**: Click to automatically detect and show weather for your current location (requires browser location permission)
- **Dark/Light Mode Toggle**: Switch between light and dark themes
- **Auto-updating Time**: Current time updates every second
- **Responsive Design**: Adapts to desktop, tablet, and mobile screens

### Weather Information Displayed:
- Current temperature and "feels like" temperature
- Weather condition with icon
- Humidity, wind speed, pressure, and UV index
- Sunrise and sunset times
- 5-day forecast
- Hourly forecast (next 5 hours)

## API Limitations

The free OpenWeatherMap tier includes:
- 60 calls per minute
- 1,000,000 calls per month
- Current weather data
- 5-day forecast (3-hour intervals)

This is more than enough for personal use and testing.

## Troubleshooting

If weather data isn't loading:
1. Check your API key is correct
2. Ensure you have internet connection
3. Wait a few minutes if you just created your API key (can take 10-15 minutes to activate)
4. Check browser console for error messages

The app will automatically use mock data if there's any issue with the API.
