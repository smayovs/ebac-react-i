import React from 'react';
import './library.css'

const Library = ({ library }) => {
    return (
        <div className="list-library">
            <h2 className="list-title-library">Mi Biblioteca</h2>
            <div className='column-titles'>
                <p className='titles'>Título</p>
                <p className='titles'>Artista</p>
            </div>
            <div>
            {library.map((song) => (
                <div className='table-columns-library' key={song.id}>
                    <p className="song-info">{song.title}</p>
                    <p className="song-info">{song.artist}</p>
                </div>
            ))}
            </div>
        </div>        
      );
}

export default Library;

