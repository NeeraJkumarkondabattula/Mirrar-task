import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import WeatherDashboard from "./components/WeatherDashboard";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [toggle, setToggle] = useState(false);
  const [city, setCity] = useState("Hyderabad");
  useEffect(() => {
    async function fetch() {
      axios(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=f131163397dccb251b85d9460eb39690`
      ).then((res) => setData(res.data));
    }
    fetch();
  }, [city]);

  const getCity = (city) => {
    setCity(city);
  };
  const getToggle = (toggle) => {
    setToggle(toggle);
  };
  console.log(data);
  return (
    <>
      <NavBar getCity={getCity} />
      {data && <WeatherDashboard data={data} />}
    </>
  );
}

export default App;
