
import './Header.css';

function Header(props) {

  const handleClickCards = () => props.onPageChange('cards');
  const handleClickDeck = () => props.onPageChange('deck');

  return (
    <div className="header toolbar">
      <button className="item" onClick={ handleClickCards }>Cards</button>
      <button className="item" onClick={ handleClickDeck }>Deck</button>
    </div>
  );
}

export default Header;
