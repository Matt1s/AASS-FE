import logo from '../../logo.png';
import { Link } from 'react-router-dom';

function Header(){
    return (
    <header className="header">
        <img src={logo} className="App-logo" alt="Lendify" />
        <div className="navigation">
            <a href='/'> Home </a>
            <a href='/delivery'> Delivery </a>
            <a href='/pickup'> Pickup </a>
        </div>  
    </header>
    );
}

export default Header;