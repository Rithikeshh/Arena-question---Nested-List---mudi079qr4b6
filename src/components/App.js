import React, { Component, useState, useEffect } from "react";
// import _ from "lodash";
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
            name: "Mhow"
          },
          {
            name: "Dewas"
          }
        ]
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit"
          },
          {
            name: "Berasia"
          }
        ]
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur"
          }
        ]
      }
    ]
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad"
          },
          {
            name: "Hirapur"
          }
        ]
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's"
          },
          {
            name: "Faizal khan's"
          }
        ]
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's"
          },
          {
            name: "Guddu bhaiya's"
          }
        ]
      }
    ]
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin"
          },
          {
            name: "Jalah"
          }
        ]
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati"
          },
          {
            name: "Leopard found in IIT Guwahati"
          }
        ]
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh"
          },
          {
            name: "Silchar"
          }
        ]
      }
    ]
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur"
          },
          {
            name: "Maner"
          }
        ]
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur"
          },
          {
            name: "Barachatti"
          }
        ]
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara"
          },
          {
            name: "Jale"
          }
        ]
      }
    ]
  }
];

// function transformState(states) {
//   const newState = _.cloneDeep(states);
//   for (let state of newState) {
//     state.isOppened = false;
//     for (let city of state.cities) {
//       city.isOppened = false;
//       for (let town in city.towns) {
//         town.isOppened = false;
//       }
//     }
//   }
//   return newState;
// }

// console.log(listOfStates);

function App() {
  const [staetDatat, setStateData] = useState([]);
  useEffect(() => {
    const listOfStates = [];
    for (let state of states) {
      let listOfCities = [];
      for (let city of state.cities) {
        let listOfTowns = [];
        for (let town of city.towns) {
          let townElement = <List name={town.name} key={town.name}></List>;
          listOfTowns.push(townElement);
        }
        let cityElement = (
          <List name={city.name} key={city.name}>
            {listOfTowns}
          </List>
        );
        listOfCities.push(cityElement);
      }
      let stateElement = (
        <List name={state.name} key={state.name}>
          {listOfCities}
        </List>
      );
      listOfStates.push(stateElement);
    }
    setStateData(listOfStates);
  }, []);

  return (
    <div>
      Welcome to the app
      <ul>{staetDatat}</ul>
    </div>
  );
}

function List({ children, name }) {
  // useEffect(() => {
  //   console.log(`hi li was created for ${name}`);
  //   return () => {
  //     console.log(`hi li was destroyed for ${name}`);
  //   };
  // }, []);
  const [isChildrenVisable, setIsChildrenVisable] = useState(false);
  return (
    <li>
      <div
        onClick={() => {
          setIsChildrenVisable((value) => {
            return !value;
          });
        }}
      >
        {name}
      </div>
      {isChildrenVisable ? <ul>{children}</ul> : null}
    </li>
  );
}

export default App;
