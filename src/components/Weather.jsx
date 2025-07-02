import { IoSearch } from "react-icons/io5";
import { MdWbSunny } from "react-icons/md";
import { FiWind } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import { useEffect, useState } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(false);
  const [city, setCity] = useState("");
  const searchCity = async (city) => {
    if (city.trim() === "") {
      return alert("Please enter a valid city name.");
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${"09f2df1d2af00b8bd689d697a133bef9"}`;

      const response = await fetch(url);

      const data = await response.json();
      setWeatherData({
        windSpeed: data.wind.speed,
        humidity: data.main.humidity,
        location: data.name,
        temp: Math.round(data.main.temp),
        description: data.weather[0].description,
        icon: data.weather[0].icon,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("City not found. Please try again.");
    }
  };

  useEffect(() => {
    searchCity("Patna"); // Default city
  }, []);

  return (
    <div className="flex justify-center p-5">
      <div className="backdrop-blur-md bg-white/90 rounded-2xl p-5 shadow-2xl flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-5 text-blue-900 tracking-wide">
          Weather
        </h1>
        <div className="flex items-center rounded-full shadow-lg px-3 py-2 w-full bg-white/90 border border-blue-200 focus-within:ring-2 focus-within:ring-blue-300 transition-all duration-200">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchCity(city);
                setCity("");
              }
            }}
            type="text"
            placeholder="Search city"
            className="flex-1 px-3 py-2 text-gray-700 text-lg placeholder-gray-400 outline-none focus:ring-0 focus:border-blue-400 transition-all duration-200"
          />
          <button
            onClick={() => {
              searchCity(city);
              setCity("");
            }}
            className="ml-2 p-2 rounded-full bg-blue-200 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow transition-all cursor-pointer duration-200"
          >
            <IoSearch className="text-blue-700 text-2xl" />
          </button>
        </div>
        <img
          className="drop-shadow-lg h-50"
          src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
          alt="weather icon"
        />
        <div className="flex gap-10">
          <span className="flex flex-col items-start mr-8">
            <p className="text-5xl font-semibold text-gray-800 mb-2">
              {weatherData.temp}°c
            </p>
            <p className="text-2xl text-blue-600 tracking-wide">
              {weatherData.location}
            </p>
          </span>
        </div>
        <p className="mt-2 text-gray-500 items-start text-lg">
          {weatherData.description}
        </p>
        <div className="flex gap-6 mt-8">
          <span className="flex flex-col items-center bg-blue-50 rounded-xl px-6 py-3 shadow">
            <WiHumidity className="text-black mb-1 text-2xl" />
            <p className="text-sm text-blue-700 font-medium mb-1">Humidity</p>
            <p className="text-lg text-blue-900 font-bold">
              {weatherData.humidity}%
            </p>
          </span>
          <span className="flex flex-col items-center bg-blue-50 rounded-xl px-6 py-3 shadow">
            <FiWind className="text-black mb-1 text-2xl" />
            <p className="text-sm text-blue-700 font-medium mb-1">Wind Speed</p>
            <p className="text-lg text-blue-900 font-bold">
              {weatherData.windSpeed} km/hr
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
