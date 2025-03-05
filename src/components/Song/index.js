import './song.css'

const Song = ({ id, title, duration, artist, genre, addToLibrary }) => {
    return (
        <div className='table-columns songs-list' key={id}>
            <p className="song-info">{title}</p>
            <p className="song-info">{duration}</p>
            <p className="song-info">{artist}</p>
            <p className="song-info">{genre}</p>
            <div className="button-div">
                <button className="add-button" onClick={addToLibrary}>&#43;</button>
            </div>
        </div>
    );
}

export default Song;