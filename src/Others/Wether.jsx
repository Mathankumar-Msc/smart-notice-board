import { useEffect, useState } from "react";
import "./Weather.css"; // Import the CSS file for styling

function Weather() {
  const [search, setSearch] = useState("chennai");
  const [city, setCity] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState(""); // New state for weather condition
  const [version, setVersion] = useState("");
  useEffect(() => {
    fetch("/version.json")
      .then((res) => res.json())
      .then((data) => setVersion(data.version));
  }, []);

  const getWeatherData = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7db7f4dc24f41ff2956b0ddce4ddf5da&units=metric`
      );
      let result = await response.json();

      if (response.ok) {
        setCity(result);
        setWeatherCondition(result.weather?.[0]?.main || "Unknown"); // Safely access weather condition
      } else {
        setCity(null); // Clear city data if the response is invalid
        setWeatherCondition(""); // Reset weather condition
        console.error("Error fetching weather data:", result.message);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setCity(null); // Clear city data on error
      setWeatherCondition(""); // Reset weather condition
    }
  };

  useEffect(() => {
    getWeatherData();
  }, [search]);

  // Function to get the appropriate weather icon based on the condition
  const getWeatherIcon = () => {
    switch (weatherCondition.toLowerCase()) {
      case "clear":
        return "https://cdn-icons-png.flaticon.com/512/869/869869.png"; // Sunny icon
      case "clouds":
        return "https://cdn-icons-png.flaticon.com/512/414/414825.png"; // Cloudy icon
      case "rain":
        return "https://cdn-icons-png.flaticon.com/512/1163/1163624.png"; // Rainy icon
      case "snow":
        return "https://cdn-icons-png.flaticon.com/512/642/642102.png"; // Snowy icon
      case "thunderstorm":
        return "https://cdn-icons-png.flaticon.com/512/1146/1146869.png"; // Thunderstorm icon
      default:
        return "https://cdn-icons-png.flaticon.com/512/1163/1163624.png"; // Default icon
    }
  };

  return (
    <div className="App">
      <div className="weather-card">
        <div className="search">
          <input
            type="search"
            placeholder="enter city name"
            spellCheck="false"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="weather">
          <img
            className="weather-icon"
            src={getWeatherIcon()} // Dynamically set the weather icon
            alt={weatherCondition}
          />
          <h1 className="temp">{city?.main?.temp}°C </h1>
          <h2 className="city">{city?.name}</h2>
          <div className="details">
            <div style={{ display: "flex" }} className="col">
              <img
                className="humi"
                src="https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png"
                alt="Humidity"
              />
              <div className="info">
                <p className="humidity">{city?.main?.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img
                src="https://cdn-icons-png.flaticon.com/512/136/136712.png"
                alt="Wind Speed"
              />
              <div className="info">
                <p className="wind">{city?.wind?.speed} km/h</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ color: "red" }}>Version: {version}</div>
    </div>
  );
}

export default Weather;
