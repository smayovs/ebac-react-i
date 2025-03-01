import logo from './smayovs_ttt.svg';
import React, { Component } from 'react';

class Header extends Component {

    render () {
        return (
            <header className="header">
            <div className='top-header'>
                <img src={logo} alt="logo" className='logo' />
                <h1 className='title'>{this.props.appName}</h1>
            </div>
            
            <div className='library'>
                <h2 className='library-title'>Biblioteca</h2>
                <div className='library-columns'>
                    <p className='library-column-title column1'>Título</p>
                    <p className='library-column-title column2'>Duración</p>
                    <p className='library-column-title column3'>Artista</p>
                    <p className='library-column-title column4'>Género</p>
                    <p className='library-column-title column5'>Añadir</p>
                </div>
            </div>

            </header>
        )
    }
}

export default Header;