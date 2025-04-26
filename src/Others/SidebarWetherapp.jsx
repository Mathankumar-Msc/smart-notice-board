import { useEffect, useState } from "react";
import "./Style.css"; // Import the CSS file for styling
import humaidity from "../assets/test2.png"; // Import humidity icon
import wind from "../assets/storm.png"; // Import wind speed icon
import { WindArrowDown, Droplets } from "lucide-react";
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
        `https://api.openweathermap.org/data/2.5/weather?q=Chennimalai&appid=7db7f4dc24f41ff2956b0ddce4ddf5da&units=metric`
      );
      let result = await response.json();

      if (response.ok) {
        setCity(result);
        setWeatherCondition(result.weather?.[0]?.main || "Unknown"); // Safely access weather condition
      } else {
        setCity(null);
        setWeatherCondition("");
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
        <div className="weather">
          <img
            className="weather-icon"
            src={getWeatherIcon()} // Dynamically set the weather icon
            alt={weatherCondition}
          />
          <h3 className="temp">{city?.main?.temp}°C </h3>
          <h4 className="city">Chennimalai</h4>
          <div className="details">
            <div style={{ display: "flex" }} className="col">
              {/* <img
                className="humi"
                src={humaidity}
                alt="Humidity"
                style={{ width: "30px", height: "30px" }}
              /> */}
              <Droplets />
              <div className="info">
                <p className="humidity">{city?.main?.humidity}%</p>
                <p style={{ fontSize: "10px" }}>Humidity</p>
              </div>
            </div>
            <div className="col">
              {/* <div class="icon-wind-arrow-down"></div> */}
              <WindArrowDown />
              {/* <img className="Windimage" src={wind} alt="Wind Speed" /> */}
              <div className="info">
                <p className="wind">{city?.wind?.speed} km/h</p>
                <p style={{ fontSize: "10px" }}>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
