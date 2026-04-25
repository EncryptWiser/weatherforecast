import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import imgNavigation1 from "../imports/WeatherDashboardWhiteCelsius/eb5a88ad7a4e422bd09dc15e5d8255f5a6ae84f6.png";
import imgClear3 from "../imports/WeatherDashboardWhiteCelsius/efa2cf5a1d7b9e01f29bf7c83b014121c2d853b7.png";
import imgClouds2 from "../imports/WeatherDashboardWhiteCelsius/bf196c94cbfcbafce4cd54305df699239636628b.png";
import imgRain1 from "../imports/WeatherDashboardWhiteCelsius/cd44fde229b4d987b7c3c469c28b1c201ddc576e.png";
import imgDrizzle1 from "../imports/WeatherDashboardWhiteCelsius/e1e7e0a06f2880e6e77ac6112553fbada8fad045.png";
import imgMist1 from "../imports/WeatherDashboardWhiteCelsius/560a0b94f13d5b080d9f2330f9f316ec0c49f9bb.png";
import imgUvWhite1 from "../imports/WeatherDashboardWhiteCelsius/831f5bd881a83e237073b59ad64aa75e43b239a4.png";
import imgPressureWhite1 from "../imports/WeatherDashboardWhiteCelsius/0798a096e7645915e092aa210c94e6df82a1fe2f.png";
import imgWind1 from "../imports/WeatherDashboardWhiteCelsius/a947cdfb75b7c15dd0ba477dc1629d8f08085300.png";
import imgHumidity1 from "../imports/WeatherDashboardWhiteCelsius/eed64397d70cae4f296d87efced42a104d6c2fb3.png";
import imgSunsetWhite1 from "../imports/WeatherDashboardWhiteCelsius/11517c7db62a2cd15c5ff2281907055548227c8d.png";
import imgSunriseWhite1 from "../imports/WeatherDashboardWhiteCelsius/d68ce075d41fb0a8f5d40486e470c1fe642bc7ed.png";
import imgCurrentLocationIcon from "../imports/WeatherDashboardWhiteCelsius/aa5f570c1e046d0137294425341c52e6ac4c5293.png";
import imgSearch1 from "../imports/WeatherDashboardWhiteCelsius/1046ed0805cd02df74220cfda91b4da36b9b9601.png";

// ========================================
// 🌤️ GET YOUR FREE API KEY (5 minutes):
// 1. Visit: https://openweathermap.org/api
// 2. Click "Sign Up" (100% FREE - no credit card)
// 3. Verify email and copy your API key
// 4. Paste it below: const API_KEY = 'your-key-here';
//
// 📚 See QUICK_START.md or GET_FREE_API_KEY.md for help
// 📝 App works with demo data if no API key is set
// ========================================
const API_KEY = "437afcee3a53b86b8fa8ca04b7229534";

interface WeatherData {
  temp: number;
  feelsLike: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  uv: number;
  weather: string;
  description: string;
  sunrise: number;
  sunset: number;
  city: string;
}

interface ForecastDay {
  date: string;
  temp: number;
  weather: string;
  icon: string;
}

interface HourlyForecast {
  time: string;
  temp: number;
  weather: string;
  windSpeed: number;
  windDir: number;
}

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weatherData, setWeatherData] =
    useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [hourlyForecast, setHourlyForecast] = useState<
    HourlyForecast[]
  >([]);
  const [searchInput, setSearchInput] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLiveData, setIsLiveData] = useState(true);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentTime(new Date()),
      1000,
    );
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetchWeatherByCity("Athens");
  }, []);

  const getWeatherIcon = (weather: string) => {
    const w = weather.toLowerCase();
    if (w.includes("clear") || w.includes("sunny"))
      return imgClear3;
    if (w.includes("cloud")) return imgClouds2;
    if (w.includes("rain")) return imgRain1;
    if (w.includes("drizzle")) return imgDrizzle1;
    if (w.includes("mist") || w.includes("fog"))
      return imgMist1;
    return imgClear3;
  };

  const fetchWeatherByCity = async (city: string) => {
    setLoading(true);
    try {
      const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

      const [currentResponse, forecastResponse] =
        await Promise.all([
          axios.get(currentWeatherUrl),
          axios.get(forecastUrl),
        ]);

      const current = currentResponse.data;
      setWeatherData({
        temp: Math.round(current.main.temp),
        feelsLike: Math.round(current.main.feels_like),
        humidity: current.main.humidity,
        pressure: current.main.pressure,
        windSpeed: Math.round(current.wind.speed * 3.6),
        uv: 8,
        weather: current.weather[0].main,
        description: current.weather[0].description,
        sunrise: current.sys.sunrise,
        sunset: current.sys.sunset,
        city: current.name,
      });

      const dailyForecasts: ForecastDay[] = [];
      const hourlyForecasts: HourlyForecast[] = [];
      const seenDates = new Set();

      forecastResponse.data.list.forEach(
        (item: any, index: number) => {
          const date = new Date(item.dt * 1000);
          const dateStr = format(date, "yyyy-MM-dd");

          if (index < 5) {
            hourlyForecasts.push({
              time: format(date, "HH:mm"),
              temp: Math.round(item.main.temp),
              weather: item.weather[0].main,
              windSpeed: Math.round(item.wind.speed * 3.6),
              windDir: item.wind.deg,
            });
          }

          if (
            !seenDates.has(dateStr) &&
            dailyForecasts.length < 5
          ) {
            seenDates.add(dateStr);
            dailyForecasts.push({
              date: format(date, "EEEE, d MMM"),
              temp: Math.round(item.main.temp),
              weather: item.weather[0].main,
              icon: getWeatherIcon(item.weather[0].main),
            });
          }
        },
      );

      setForecast(dailyForecasts);
      setHourlyForecast(hourlyForecasts);
      setIsLiveData(true);
    } catch (error) {
      console.error("Error fetching weather:", error);
      useMockData(city);
    }
    setLoading(false);
  };

  const useMockData = (city: string) => {
    setWeatherData({
      temp: 24,
      feelsLike: 22,
      humidity: 41,
      pressure: 997,
      windSpeed: 2,
      uv: 8,
      weather: "Clear",
      description: "Sunny",
      sunrise: Date.now() / 1000 - 7200,
      sunset: Date.now() / 1000 + 36000,
      city: city,
    });

    setForecast([
      {
        date: "Friday, 1 Sep",
        temp: 20,
        weather: "Clouds",
        icon: imgClouds2,
      },
      {
        date: "Saturday, 2 Sep",
        temp: 22,
        weather: "Mist",
        icon: imgMist1,
      },
      {
        date: "Sunday, 3 Sep",
        temp: 27,
        weather: "Clear",
        icon: imgClear3,
      },
      {
        date: "Monday, 4 Sep",
        temp: 18,
        weather: "Drizzle",
        icon: imgDrizzle1,
      },
      {
        date: "Tuesday, 5 Sep",
        temp: 16,
        weather: "Rain",
        icon: imgRain1,
      },
    ]);

    setHourlyForecast([
      {
        time: "12:00",
        temp: 26,
        weather: "Clear",
        windSpeed: 3,
        windDir: 0,
      },
      {
        time: "15:00",
        temp: 27,
        weather: "Clear",
        windSpeed: 2,
        windDir: -30,
      },
      {
        time: "18:00",
        temp: 27,
        weather: "Clouds",
        windSpeed: 2,
        windDir: 0,
      },
      {
        time: "21:00",
        temp: 25,
        weather: "Clouds",
        windSpeed: 3,
        windDir: 30,
      },
      {
        time: "00:00",
        temp: 22,
        weather: "Clear",
        windSpeed: 3,
        windDir: 0,
      },
    ]);
    setIsLiveData(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      fetchWeatherByCity(searchInput.trim());
    }
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLoading(true);
          try {
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
            const response = await axios.get(url);
            fetchWeatherByCity(response.data.name);
          } catch (error) {
            console.error(
              "Error fetching location weather:",
              error,
            );
            alert(
              "Could not fetch weather for your location. Using mock data.",
            );
            useMockData("Your Location");
          }
          setLoading(false);
        },
        (error) => {
          console.error("Geolocation error:", error);
          alert(
            "Please allow location access to use this feature.",
          );
        },
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const formatTime = (timestamp: number) => {
    return format(new Date(timestamp * 1000), "HH:mm a");
  };

  const bgGradient = isDarkMode
    ? "linear-gradient(122.716deg, rgb(20, 20, 30) 0.2848%, rgba(10, 15, 25, 0) 178.65%)"
    : "linear-gradient(122.716deg, rgb(255, 255, 255) 0.2848%, rgba(70, 97, 115, 0) 178.65%)";

  return (
    <div
      className="min-h-screen w-full overflow-auto p-4 md:p-8 lg:p-12"
      style={{ backgroundImage: bgGradient }}
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 mb-8 items-start lg:items-center justify-between">
          <div className="flex gap-3 items-center flex-wrap">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="bg-[#d9d9d9] border border-black rounded-[40px] px-6 py-2 flex items-center gap-3 hover:bg-[#c0c0c0] transition-colors"
            >
              <div className="size-[30px] rounded-full bg-[#111111]" />
              <span className="font-['Poppins',sans-serif] font-extrabold text-[16px] lg:text-[18px]">
                {isDarkMode ? "Dark Mode" : "Light Mode"}
              </span>
            </button>

            <div
              className={`px-4 py-2 rounded-[20px] flex items-center gap-2 ${
                isLiveData
                  ? "bg-green-500/20 border border-green-600"
                  : "bg-orange-500/20 border border-orange-600"
              }`}
            >
              <div
                className={`size-2 rounded-full ${isLiveData ? "bg-green-600" : "bg-orange-600"} animate-pulse`}
              />
              <span className="font-['Poppins',sans-serif] font-semibold text-[14px] text-[#292929]">
                {isLiveData ? "🌐 Live Data" : "📝 Demo Data"}
              </span>
            </div>
          </div>

          <form
            onSubmit={handleSearch}
            className="flex-1 max-w-[803px] w-full"
          >
            <div className="relative bg-[#d9d9d9] border border-black rounded-[40px] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.25)] flex items-center px-4 py-3">
              <img
                src={imgSearch1}
                alt=""
                className="size-[40px] mr-4"
              />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search for your preferred city..."
                className="flex-1 bg-transparent font-['Poppins',sans-serif] text-[16px] lg:text-[18px] text-[#292929] outline-none"
              />
            </div>
          </form>

          <button
            onClick={handleCurrentLocation}
            className="bg-[#4cbb17] rounded-[40px] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.25)] px-6 py-3 flex items-center gap-3 hover:bg-[#45a815] transition-colors whitespace-nowrap"
          >
            <img
              src={imgCurrentLocationIcon}
              alt=""
              className="size-[35px]"
            />
            <span className="font-['Poppins',sans-serif] font-extrabold text-[18px] lg:text-[22px] text-white/80">
              Current Location
            </span>
          </button>
        </div>

        {loading && (
          <div className="text-center py-8 font-['Poppins',sans-serif] text-2xl text-[#292929]">
            Loading weather data...
          </div>
        )}

        {weatherData && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#d9d9d9] rounded-[30px] p-8 lg:p-12">
              <p className="font-['Poppins',sans-serif] font-bold text-[32px] lg:text-[36px] text-[#292929] mb-6">
                {weatherData.city}
              </p>
              <p className="font-['Poppins',sans-serif] text-[64px] lg:text-[96px] font-bold text-[#292929] mb-2">
                {format(currentTime, "HH:mm")}
              </p>
              <p className="font-['Poppins',sans-serif] text-[18px] lg:text-[20px] text-[#292929]">
                {format(currentTime, "EEEE, d MMM")}
              </p>
            </div>

            <div className="bg-[#d9d9d9] rounded-[30px] shadow-[10px_10px_4px_0px_rgba(0,0,0,0.25)] p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center md:col-span-3 lg:col-span-1">
                  <p
                    className="font-['Poppins',sans-serif] font-bold mb-4 text-[64px]"
                    style={{
                      backgroundImage:
                        "linear-gradient(65.7247deg, rgb(41, 41, 41) 2.9322%, rgba(255, 255, 255, 0) 212.44%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {weatherData.temp}°C
                  </p>
                  <p className="font-['Poppins',sans-serif] font-semibold text-[20px] lg:text-[32px] text-[#292929]/80 mb-2">
                    Feels like: {weatherData.feelsLike}°C
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={imgSunriseWhite1}
                        alt=""
                        className="size-[48px]"
                      />
                      <div>
                        <p className="font-['Poppins',sans-serif] font-bold text-[20px] text-[#292929]">
                          Sunrise
                        </p>
                        <p className="font-['Poppins',sans-serif] font-semibold text-[16px] text-[#292929]">
                          {formatTime(weatherData.sunrise)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <img
                        src={imgSunsetWhite1}
                        alt=""
                        className="size-[48px]"
                      />
                      <div>
                        <p className="font-['Poppins',sans-serif] font-bold text-[20px] text-[#292929]">
                          Sunset
                        </p>
                        <p className="font-['Poppins',sans-serif] font-semibold text-[16px] text-[#292929]">
                          {formatTime(weatherData.sunset)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <img
                    src={getWeatherIcon(weatherData.weather)}
                    alt={weatherData.weather}
                    className="size-[200px] lg:size-[270px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                  />
                  <p className="font-['Poppins',sans-serif] font-bold text-[28px] lg:text-[32px] text-[#292929] mt-4 text-center">
                    {weatherData.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center">
                    <img
                      src={imgHumidity1}
                      alt=""
                      className="size-[50px] mb-2"
                    />
                    <p className="font-['Poppins',sans-serif] font-semibold text-[20px] text-[#292929]">
                      {weatherData.humidity}%
                    </p>
                    <p className="font-['Poppins',sans-serif] font-medium text-[16px] text-[#292929]">
                      Humidity
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src={imgWind1}
                      alt=""
                      className="size-[50px] mb-2"
                    />
                    <p className="font-['Poppins',sans-serif] font-semibold text-[20px] text-[#292929]">
                      {weatherData.windSpeed}km/h
                    </p>
                    <p className="font-['Poppins',sans-serif] font-medium text-[16px] text-[#292929]">
                      Wind Speed
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src={imgPressureWhite1}
                      alt=""
                      className="size-[50px] mb-2"
                    />
                    <p className="font-['Poppins',sans-serif] font-semibold text-[20px] text-[#292929]">
                      {weatherData.pressure}hPa
                    </p>
                    <p className="font-['Poppins',sans-serif] font-medium text-[16px] text-[#292929]">
                      Pressure
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src={imgUvWhite1}
                      alt=""
                      className="size-[50px] mb-2"
                    />
                    <p className="font-['Poppins',sans-serif] font-semibold text-[20px] text-[#292929]">
                      {weatherData.uv}
                    </p>
                    <p className="font-['Poppins',sans-serif] font-medium text-[16px] text-[#292929]">
                      UV
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#d9d9d9] rounded-[30px] p-8">
            <h2 className="font-['Poppins',sans-serif] font-bold text-[28px] lg:text-[32px] text-[#292929] mb-6">
              5 Days Forecast:
            </h2>
            <div className="space-y-4">
              {forecast.map((day, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <img
                    src={day.icon}
                    alt={day.weather}
                    className="size-[60px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                  />
                  <p className="font-['Poppins',sans-serif] font-bold text-[20px] lg:text-[24px] text-[#292929] w-[80px]">
                    {day.temp}°C
                  </p>
                  <p className="font-['Poppins',sans-serif] font-bold text-[18px] lg:text-[20px] text-[#292929] flex-1">
                    {day.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#d9d9d9] rounded-[30px] shadow-[10px_10px_4px_0px_rgba(0,0,0,0.5)] p-8">
            <h2 className="font-['Poppins',sans-serif] font-bold text-[28px] lg:text-[32px] text-[#292929] mb-6">
              Hourly Forecast:
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {hourlyForecast.map((hour, index) => {
                const isDay = index % 2 === 0;
                const gradient = isDay
                  ? "linear-gradient(161.253deg, rgb(248, 133, 8) 12.412%, rgba(246, 250, 217, 0) 163.32%)"
                  : "linear-gradient(156.519deg, rgb(68, 61, 100) 19.207%, rgba(101, 130, 198, 0) 158.48%)";

                return (
                  <div
                    key={index}
                    className="min-w-[130px] h-[270px] rounded-[40px] p-4 flex flex-col items-center relative"
                    style={{ backgroundImage: gradient }}
                  >
                    <p className="font-['Poppins',sans-serif] font-bold text-[24px] text-[#292929] mb-4">
                      {hour.time}
                    </p>
                    <img
                      src={getWeatherIcon(hour.weather)}
                      alt={hour.weather}
                      className="size-[80px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] mb-2"
                    />
                    <p className="font-['Poppins',sans-serif] font-bold text-[20px] text-[#292929] mb-8">
                      {hour.temp}°C
                    </p>
                    <div
                      className="size-[55px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center mb-2"
                      style={{
                        transform: `rotate(${hour.windDir}deg)`,
                      }}
                    >
                      <img
                        src={imgNavigation1}
                        alt=""
                        className="size-full"
                      />
                    </div>
                    <p className="font-['Poppins',sans-serif] font-bold text-[20px] text-[#292929]">
                      {hour.windSpeed}km/h
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}