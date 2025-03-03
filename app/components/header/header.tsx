import "./header.sass"

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="/" className="navLink">
          Accueil
        </a>
        <a href="/Projects" className="navLink">
          Mes projets
        </a>
      </nav>
    </header>
  );
};

export default Header;
