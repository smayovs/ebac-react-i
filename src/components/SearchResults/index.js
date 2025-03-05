import React from "react";
import Song from "../Song";
import './searchResults.css'
import searchIcon from '../../assets/search.svg'

const SearchResults = ({songs, addSongToLibrary}) => {

    return (
        <>
        <div className='list'>
            <div className="title-tab">
                <h2 className='list-title'>Resultados de la Búsqueda</h2>
                <div className="search-tab">
                    <input type="text" placeholder="Buscar" className="search-input" />
                    <img src={searchIcon} alt="search-icon" className="icon"/>
                </div>
            </div>
            
            <div>
                {songs.map((song) => {
                    const {id, title, duration, artist, genre} = song;

                    return (
                        <Song key={id} title={title} artist={artist} duration={duration} genre={genre} addToLibrary={() => addSongToLibrary(song)} />
                    );
                })}
            </div>
        </div>
        </>
    );
}

export default SearchResults;