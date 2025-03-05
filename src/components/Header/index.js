import logo from '../../assets/smayovs_ttt.svg';
import './header.css'

const Header = ({appName}) => {
    return (
        <header className='header'>
            <img src={logo} alt="logo" className='logo' />
            <h1 className='title'>{appName}</h1>            
        </header>
    );
}

export default Header;