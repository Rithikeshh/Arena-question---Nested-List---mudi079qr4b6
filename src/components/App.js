import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

function App() {
  const [visibility,setVisibility] = useState("none");
  function handleCities(event,cities){
    console.log(cities)
    console.log(event.target)
    console.log(event.target.id)
    console.log(event.target.children[0])
    if(!event.target.children[0]) return;
    if(event.target.children[0].style.display === "block"){
      event.target.children[0].style.display = "none"
    }
    else{
      event.target.children[0].style.display = "block"
    }
    setVisibility(visibility)
  }
  return <div id="main">
    <ul>{states.map((state,index)=>{
      return <li id={"state"+(index+1)} onClick={(event)=>{
        handleCities(event,state.cities)
      }}>{state.name}<Cities cities={state.cities} visibility={visibility}/></li>
    })
  }</ul>
  </div>;
}
function Cities({cities,visibility}){

  return (
    <ul style={{display:visibility}}>{cities.map((city,index)=>{
      return <li id={"city"+(index+1)} >{city.name}<Towns towns={city.towns} visibility={"none"}/></li>
    })
    }</ul>
  )
}
function Towns({towns,visibility}){
  
  return (
    <ul style={{display:visibility}}>{towns.map((town,index)=>{
      return <li id={"town"+(index+1)}>{town.name}</li>
    })
    }</ul>
  )
}

export default App;
