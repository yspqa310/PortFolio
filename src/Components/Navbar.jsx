import logo from "../Components/logll.png";   // put your image here

export default function Navbar() {
  return (
    <nav className="navbar">
      
      {/* Logo + Brand */}
      <a href="#about" className="logo-link">
    <img src={logo} alt="YSP Logo" className="nav-logo" />
  </a>
  <span className="brand-text">Yakub sajahan pasha Shaik</span>

      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
