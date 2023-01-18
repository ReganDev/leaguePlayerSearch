import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios, { Axios } from 'axios';
import Navbar from "./components/Navbar.js"
import './components/styles.css';






function App() {
  
  const  [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState({});
  const API_KEY = "RGAPI-78ec0289-1133-437d-9be6-01312e7f1b7a";

  function searchForPlayer(event) {
    //set up API call
    let APICallString = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+ searchText + "?api_key=" + API_KEY;
    //handle the api call
    axios.get(APICallString).then(function (response) {
      //success
      setPlayerData(response.data);
    }).catch(function (error) {
      //error
      console.log(error);
    });
  }

  console.log(playerData);

  return ( 

    
    <div className="App">
      <div className="container">
        <h5> League of legends player database!</h5>
        <input type="text" onChange={e => setSearchText(e.target.value)}></input>
        <button onClick={e => searchForPlayer(e)}> Search for player </button>
    </div>
    {JSON.stringify(playerData) != '{}' ? 
      <>
        <p>{playerData.name}</p>
        <img width="100" height="100" src={"http://ddragon.leagueoflegends.com/cdn/12.18.1/img/profileicon/" + playerData.profileIconId + ".png"}></img>
        <p>Summoner Level {playerData.summonerLevel}</p>
        <><p>Summoner Found</p></>
        
      </>
      :
      <> <p>No Summoner Found here</p> </>
  }
  </div>
  );
}

export default App;
