import "./App.css";
import search from "./data/search.png";
import burger from "./data/burger-bar.png";
import { useEffect, useState } from "react";

const data = require("./data/events.json");

function App() {
  const boys = [];
  const girls = [];
  //! loader
  for (let x in data) {
    const person = `<div class="card-temp"  id="${x}" >
    <div id="${x}" >
    <h3>${data[x].ID}:${data[x].Location}</h3>
    <h3>${data[x].Date} ${data[x].Time}</h3>
    </div>
    <h3 class="sts">Person detected</h3>
    </div>`;
    ListUsers(person);
    countData(x);
  }
  //! show male and female counts
  function countData(val) {
    if (data[val].Gender === "Male") {
      boys.push(`male${val}`);
    } else if (data[val].Gender === "Female") {
      girls.push(`female${val}`);
    } else console.log("cant count");
  }
  console.log("boys,girls", boys.length, girls.length);

  //!list all data in right div
  function ListUsers(person) {
    useEffect(() => {
      const element = document.getElementById("cardarea");
      element.innerHTML += person;
    }, []);
  }
  //!event handler
  const [user, setUser] = useState(0);
  const getUser = (e) => {
    if (!e.target.id) {
      preventColor(user);
      setUser(e.target.parentNode.id);
      changeColor(e.target.parentNode.id);
      console.log(e.target.parentNode.id);
    } else {
      preventColor(user);
      setUser(e.target.id);
      changeColor(e.target.id);
      console.log(e.target.id);
    }
  };
  //!remove exist selected div color
  const preventColor = (value) => {
    console.log("removed", value);
    document.getElementById(value).style.backgroundColor = "#d9d9d9";
  };
  //! change when click event
  const changeColor = (value) => {
    const isClicked = document.getElementById(value);
    console.log("called", value);
    isClicked.style.backgroundColor = "#7f7f7f";
  };

  return (
    <div className="App">
      <nav>
        <div className="logo">
          <h1>
            <b id="S">S</b>ECQUR<b>AI</b>SE
          </h1>
        </div>
        <div className="right">
          <div className="search">
            <img src={search} alt="search" />
            <input type="text" />
          </div>
          <div className="count">
            <h1 id="male">{boys.length}</h1>
            <h1 id="female">{girls.length}</h1>
          </div>
        </div>
      </nav>
      <main>
        <div className="burger">
          <div>
            <img src={burger} alt="burger"></img>
          </div>
        </div>
        <div className="main-right">
          <div className="details">
            <div className="top">
              <h1 id="meet-id">{data[user].ID}</h1>

              <h1 id="status">Person detucted</h1>
            </div>
            <div className="info">
              <h2>Name{data[user].Name}</h2>
              <h2>Location{data[user].Location}</h2>
              <h2>Date{data[user].Date}</h2>
              <h2>Time{data[user].Time}</h2>
            </div>
            <div className="discription">
              <h2>Description:</h2>
              <h2>{`${data[user].Name} deducted at ${data[user].Location} on ${data[user].Date}`}</h2>
            </div>
          </div>
          <div className="profile">
            <h1>{data[user].Gender}</h1>
            <img
              src={require(`./data/Images/${data[user].Name}.jpg`)}
              alt="profile"
            ></img>
          </div>
          <div className="events">
            <div className="setting">
              <h1>Events</h1>
              <img
                src="https://static.thenounproject.com/png/669094-200.png"
                alt="setting"
              ></img>
            </div>
            <div id="cardarea" onClick={getUser}></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
