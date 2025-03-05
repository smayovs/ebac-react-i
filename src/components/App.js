import React, { useEffect, useState } from 'react';
import './App.css'
import Header from "./Header/index";
import SearchResults from './SearchResults';
import Library from './Library';


const App = () => {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const response = [
        {id:1, title: "Coloratura", duration:"10:18", artist:"Coldplay", genre:"Alternative"},
        {id:2, title: "Don't Look Back in Anger", duration:"4:49", artist:"Oasis", genre:"Rock"},
        {id:3, title: "This is a Low", duration:"5:00", artist:"Blur", genre:"Rock"},
        {id:4, title: "Black", duration:"5:42", artist:"Pearl Jam", genre:"Rock"},
        {id:5, title: "Shine On You Crazy Diamond (Pts. 1-5)", duration:"13:30", artist:"Pink Floyd", genre:"Rock"},
        {id:6, title: "Rock and Roll", duration:"3:40", artist:"Led Zeppelin", genre:"Rock"},
        {id:7, title: "Call It What You Want", duration:"3:58", artist:"Foster The People", genre:"Alternative"},
        {id:8, title: "Modern Jesus", duration:"3:13", artist:"Portugal. The Man", genre:"Alternative"},
        {id:9, title: "Back on 74", duration:"3:29", artist:"Jungle", genre:"Alternative"},
        {id:10, title: "Knights of Cydonia", duration:"6:06", artist:"Muse", genre:"Rock"}
      ];

      setSongs(response);
    };

    fetchSongs();
  }, [])

  const [library, setLibrary] = useState([]);

  const addSongToLibrary = (song) => {
    setLibrary([...library, song]);
  }

  useEffect(() => {
    console.log("Biblioteca actualizada");
  }, [library]);

  return (
    <div>
      <Header appName="Smayovs Music" />
      <main className="mainContent">
        <Library library={library}/>
        <SearchResults songs={songs} addSongToLibrary={addSongToLibrary}/>
      </main>
    </div>
  );
}


export default App;
