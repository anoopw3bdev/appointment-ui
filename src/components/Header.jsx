import { CiShare1 } from "react-icons/ci";

import "../styles/Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Logo */}
        <img src="logo.png" alt="Logo" />
      </div>
      <nav className="navigation">
        <ul className="menu">
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a className="share-button" href="#">
              <CiShare1
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  strokeWidth: 1.1,
                }}
              />
              Share link
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
