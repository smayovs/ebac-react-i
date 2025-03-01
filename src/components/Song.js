import React, { Component } from "react";

class Song extends Component {
    render (){
        return(
            <div className="library-columns songs-list">
                <p className="column1 song">{this.props.title}</p>
                <p className="column2 song">{this.props.duration}</p>
                <p className="column3 song">{this.props.artist}</p>
                <p className="column4 song">{this.props.genre}</p>
                <div className="column5 song button-div"><button className="add-button">Añadir a la biblioteca</button></div>
            </div>
        );
    }
}

export default Song;