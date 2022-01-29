import WorldLogo from "../images/world.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <h1>
        <img src={WorldLogo} alt="world-logo"></img>
        my travel journal.
      </h1>
    </div>
  );
}
