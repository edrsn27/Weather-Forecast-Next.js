import { createContext, useContext, useState, useEffect } from "react";

// create context
const WeatherContext = createContext();
// export context
export const useQuery = () => {
  return useContext(WeatherContext);
};

export default function WeatherProvider({ children }) {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  // function for fetching weather data
  const getWeather = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_API_URL}?q=${city}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_API_KEY}&units=imperial`
      );
      const data = await res.json();

      setWeather(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  // provider value and functions
  const value = {
    // weather data
    weather,
    setWeather,
    // city inpu
    city,
    setCity,
    // loading state for getWeather
    loading,
    setLoading,
    // get weather data
    getWeather,
  };
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
}
