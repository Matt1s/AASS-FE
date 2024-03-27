import logo from '../../logo.png';
import { Link } from 'react-router-dom';

function Header(){
    return (
    <header className="header">
        <img src={logo} className="App-logo" alt="Lendify" />
        <div className="navigation">
            {/* TO DO: Add the correct path to the Link component */}
        </div>  
    </header>
    );
}

export default Header;