
import './Header.css';

import { Link } from 'react-router-dom'

function Header() {

  return (
    <div className="header toolbar">
      <Link className="item" to='/'>Cards</Link>
      <Link className="item" to='/deck'>Deck</Link>
    </div>
  );
}

export default Header;
