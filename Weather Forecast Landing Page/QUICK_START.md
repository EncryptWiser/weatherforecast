# 🌤️ Weather App - Quick Start Guide

## ⚡ Using the App RIGHT NOW (No Setup Required!)

The app works immediately with **demo data**. Just use it as-is to explore all features:
- Search any city
- Toggle dark/light mode
- View forecasts
- See all weather details

## 🌐 Want LIVE Weather Data? (5 Minutes Setup)

### Quick Steps:

1. **Get Free API Key** (2 minutes)
   - Go to: https://openweathermap.org/api
   - Click "Sign Up" (100% FREE, no credit card)
   - Verify your email
   - Copy your API key from the dashboard

2. **Add to App** (1 minute)
   - Open: `src/app/App.tsx`
   - Find line ~26: `const API_KEY = 'YOUR_API_KEY_HERE';`
   - Replace with: `const API_KEY = 'your-actual-key-here';`
   - Save the file

3. **Wait & Refresh** (10-15 minutes)
   - New API keys need 10-15 minutes to activate
   - After waiting, refresh the app
   - You'll see a green "🌐 Live Data" badge when it's working!

## 📊 Data Source Indicator

Look for the badge at the top:
- **🌐 Live Data** (green) = Using real-time weather from OpenWeatherMap
- **📝 Demo Data** (orange) = Using sample data (no API key configured)

## ✨ Features

### Interactive:
- 🔍 Search any city worldwide
- 📍 Auto-detect your current location
- 🌓 Dark/Light mode toggle
- ⏰ Real-time clock
- 📱 Fully responsive (works on mobile, tablet, desktop)

### Weather Info:
- 🌡️ Current temperature & feels-like
- 💧 Humidity, wind speed, pressure, UV index
- 🌅 Sunrise & sunset times
- 📅 5-day forecast
- ⏳ Hourly forecast (next 5 hours)

## 🆘 Need Help?

See **GET_FREE_API_KEY.md** for detailed instructions with screenshots and troubleshooting.

## 🎯 Quick Test

1. Type "London" in the search bar → Press Enter
2. Click "Current Location" button → Allow location access
3. Toggle between Light/Dark modes
4. Watch the clock update in real-time!

---

**Enjoy your weather app!** ☀️🌧️⛈️❄️
