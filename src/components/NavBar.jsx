import React, { useState } from "react";
import searchIcon from "../assets/search.png";
import styled from "styled-components";

const NavBar = ({ getCity, getToggle }) => {
  const [toggle, setToggle] = useState(false);
  const [city, setCity] = useState("Hyderabad");
  const handleSubmit = (e) => {
    e.preventDefault();
    getCity(city);
    GetToggle(toggle);
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="search">
          <img src={searchIcon} alt="" />
          <input
            type="text"
            placeholder="Enter City Name.."
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button>Search</button>
      </form>
      <div className="toggle-theme">
        <div className="toggle" onClick={() => setToggle(true)}></div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 1280px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #b9e1dc;
  padding: 0 40px;
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    button {
      width: 80px;
      height: 30px;
      border: none;
      outline: none;
      font-weight: 500;
      border-radius: 5px;
      background-color: white;
      color: black;
    }
  }
  .toggle-theme {
    width: 40px;
    height: 20px;
    border-radius: 10px;
    padding: 2px;
    display: flex;
    align-items: center;
    border: 2px solid black;
    .toggle {
      width: 15px;
      height: 15px;
      background-color: black;
      border-radius: 50%;
    }
  }
  .search {
    width: 250px;
    height: 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    overflow: hidden;
    padding: 10px;
    border: none;
    background-color: white;
    img {
      width: 18px;
    }
    input {
      width: 100%;
      height: 30px;
      outline: none;
      border: none;
      font-weight: 400;
    }
  }
`;

export default NavBar;
