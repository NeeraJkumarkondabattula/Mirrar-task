import React from "react";
import sunriseIcon from "../assets/sunrise-alt.png";
import sunsetIcon from "../assets/sunset.png";
import humidityIcon from "../assets/humidity.png";
import pressureIcon from "../assets/speedometer.png";
import winddirectionIcon from "../assets/windsock.png";
import sealeveIcon from "../assets/water-rise.png";
import windIcon from "../assets/wind.png";
import styled from "styled-components";
import data from "../data";

const WeatherDashboard = ({ data }) => {
  console.log(data);
  const sunsetTime = new Date(data.city.sunset * 1000);
  const sunriseTime = new Date(data.city.sunrise * 1000);
  const day1 = new Date(data.list["6"].dt * 1000).toDateString();
  const day2 = new Date(data.list["14"].dt * 1000).toDateString();
  const day3 = new Date(data.list["22"].dt * 1000).toDateString();
  const day4 = new Date(data.list["30"].dt * 1000).toDateString();
  const day5 = new Date(data.list["38"].dt * 1000).toDateString();
  return (
    <Container>
      <div className="top">
        <div className="timeZone">
          <h2 className="name">{data.city.name}</h2>
          <h1 className="time">{Date().toString().slice(15, 25)}</h1>
          <p className="date">{data.list["0"].dt_txt.slice(0, 10)}</p>
        </div>
        <div className="weather">
          <div className="left">
            <h1 className="temp">{`${data.list["0"].main.temp}°F`}</h1>
            <h2>
              Feels Like:{" "}
              {`${Math.floor((data.list["0"].main.feels_like - 32) / 1.8)}°C`}{" "}
            </h2>
            <div className="sunrise">
              <img src={sunriseIcon} alt="" />
              <div>
                <h3>sunrise</h3>
                <p>{sunriseTime.toLocaleString()}</p>
              </div>
            </div>
            <div className="sunset">
              <img src={sunsetIcon} alt="" />
              <div>
                <h3>sunset</h3>
                <p>{sunsetTime.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="middle">
            <img
              src={`https://openweathermap.org/img/wn/${data.list["0"].weather["0"].icon}.png`}
              alt=""
            />
            <h2>{data.list["0"].weather["0"].main}</h2>
            <p>{data.list["0"].weather["0"].description}</p>
          </div>
          <div className="right">
            <div className="category">
              <img src={humidityIcon} alt="" />
              <h3>{data.list["0"].main.humidity}%</h3>
              <h3>Humidity</h3>
            </div>
            <div className="category">
              <img src={windIcon} alt="" />
              <h3>{data.list["0"].wind.speed}km/h</h3>
              <h3>Wind Speed</h3>
            </div>
            <div className="category">
              <img src={pressureIcon} alt="" />
              <h3>{data.list["0"].main.pressure}hPa</h3>
              <h3>Pressure</h3>
            </div>
            <div className="category">
              <img src={sealeveIcon} alt="" />
              <h3>{data.list["0"].main.sea_level}m</h3>
              <h3>Sea Level</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="days-forecast">
          <h1>5 days Forecast</h1>
          <div className="day">
            <img
              src={`https://openweathermap.org/img/wn/${data.list["6"].weather["0"].icon}.png`}
              alt=""
            />
            <h4>{Math.floor((data.list["6"].main.temp - 32) / 1.8)}°C </h4>
            <h5>{day1}</h5>
          </div>
          <div className="day">
            <img
              src={`https://openweathermap.org/img/wn/${data.list["14"].weather["0"].icon}.png`}
              alt=""
            />
            <h4>{Math.floor((data.list["14"].main.temp - 32) / 1.8)}°C </h4>
            <h5>{day2}</h5>
          </div>
          <div className="day">
            <img
              src={`https://openweathermap.org/img/wn/${data.list["22"].weather["0"].icon}.png`}
              alt=""
            />
            <h4>{Math.floor((data.list["22"].main.temp - 32) / 1.8)}°C </h4>
            <h5>{day3}</h5>
          </div>
          <div className="day">
            <img
              src={`https://openweathermap.org/img/wn/${data.list["30"].weather["0"].icon}.png`}
              alt=""
            />
            <h4>{Math.floor((data.list["30"].main.temp - 32) / 1.8)}°C </h4>
            <h5>{day4}</h5>
          </div>
          <div className="day">
            <img
              src={`https://openweathermap.org/img/wn/${data.list["38"].weather["0"].icon}.png`}
              alt=""
            />
            <h4>{Math.floor((data.list["38"].main.temp - 32) / 1.8)}°C </h4>
            <h5>{day5}</h5>
          </div>
        </div>
        <div className="hourly-forecast">
          <h1>Hourly Forcast</h1>
          <div className="main">
            <div className="hour">
              <h4>{data.list["0"].dt_txt.slice(11, 16)}</h4>
              <img
                src={`https://openweathermap.org/img/wn/${data.list["1"].weather["0"].icon}.png`}
                alt=""
                className="weather"
              />
              <h5>{Math.floor((data.list["1"].main.temp - 32) / 1.8)}°C</h5>
              <img src={winddirectionIcon} alt="" className="wind" />
              <h5>{data.list["1"].wind.speed}km/h</h5>
            </div>
            <div className="hour">
              <h4>{data.list["1"].dt_txt.slice(11, 16)}</h4>
              <img
                src={`https://openweathermap.org/img/wn/${data.list["2"].weather["0"].icon}.png`}
                alt=""
                className="weather"
              />
              <h5>{Math.floor((data.list["2"].main.temp - 32) / 1.8)}°C</h5>
              <img src={winddirectionIcon} alt="" className="wind" />
              <h5>{data.list["2"].wind.speed}km/h</h5>
            </div>
            <div className="hour">
              <h4>{data.list["2"].dt_txt.slice(11, 16)}</h4>
              <img
                src={`https://openweathermap.org/img/wn/${data.list["3"].weather["0"].icon}.png`}
                alt=""
                className="weather"
              />
              <h5>{Math.floor((data.list["3"].main.temp - 32) / 1.8)}°C</h5>
              <img src={winddirectionIcon} alt="" className="wind" />
              <h5>{data.list["3"].wind.speed}km/h</h5>
            </div>
            <div className="hour">
              <h4>{data.list["3"].dt_txt.slice(11, 16)}</h4>
              <img
                src={`https://openweathermap.org/img/wn/${data.list["4"].weather["0"].icon}.png`}
                alt=""
                className="weather"
              />
              <h5>{Math.floor((data.list["4"].main.temp - 32) / 1.8)}°C</h5>
              <img src={winddirectionIcon} alt="" className="wind" />
              <h5>{data.list["4"].wind.speed}km/h</h5>
            </div>
            <div className="hour">
              <h4>{data.list["4"].dt_txt.slice(11, 16)}</h4>
              <img
                src={`https://openweathermap.org/img/wn/${data.list["5"].weather["0"].icon}.png`}
                alt=""
                className="weather"
              />
              <h5>{Math.floor((data.list["5"].main.temp - 32) / 1.8)}°C</h5>
              <img src={winddirectionIcon} alt="" className="wind" />
              <h5>{data.list["5"].wind.speed}km/h</h5>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 1280px;
  height: 100vh;
  padding: 0 40px;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  background-color: #b9e1dc;
  .top {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 10px;
    .timeZone {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      border-radius: 10px;
      background-color: white;
      .time {
        font-size: 5rem;
      }
      .date {
        font-size: 1rem;
      }
      .name {
        font-size: 2rem;
      }
    }
    .weather {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      border-radius: 10px;
      background-color: white;
      .left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        padding-left: 40px;
        .temp {
          font-size: 50px;
        }
        .sunrise {
          display: flex;
          align-items: center;
          gap: 20px;
          text-transform: capitalize;
          h3 {
            font-size: 20px;
            font-weight: 600;
          }
          img {
            width: 25px;
          }
          p {
            font-size: 15px;
            font-weight: 500;
          }
        }
        .sunset {
          display: flex;
          align-items: center;
          gap: 20px;
          text-transform: capitalize;
          h3 {
            font-size: 20px;
            font-weight: 600;
          }
          img {
            width: 25px;
          }
          p {
            font-size: 15px;
            font-weight: 500;
          }
        }
      }
      .middle {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 150px;
        }
      }
      .right {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 10px;
        .category {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          justify-content: center;
          img {
            width: 30px;
          }
          h3 {
            font-size: 15px;
            line-height: 15px;
            font-weight: 500;
          }
        }
      }
    }
  }
  .bottom {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 10px;
    .days-forecast {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 10px;
      padding: 20px;
      background-color: white;
      h1 {
        font-size: 20px;
        line-height: 20px;
      }
      .day {
        padding: 0 40px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    .hourly-forecast {
      border-radius: 10px;
      padding: 10px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: white;
      .main {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        border-radius: 10px;
        gap: 4px;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        border-radius: 10px;
        gap: 5px;
      }
      h1 {
        font-size: 20px;
        line-height: 20px;
      }
      .hour {
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #8dc6ff;
        border-radius: 10px;
        gap: 10px;
        .weather {
          width: 100px;
        }
        .wind {
          width: 25px;
        }
        h4 {
          line-height: 25px;
          font-size: 25px;
          font-weight: 500;
        }
        h5 {
          line-height: 20px;
          font-size: 20px;
          font-weight: 500;
        }
      }
    }
  }
`;

export default WeatherDashboard;
