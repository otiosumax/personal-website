import { useState } from "react";
import "../styles/Hero.css";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div id="hero">
      <div className="hero-content wrapper">
        <div className="hero-text">
          <h1>
            Web-
            <br />
            <span>разработчик</span>
          </h1>
          <div id="separator" />
          <p>
            Всегда готов к новым
            <br />
            вызовам!
          </p>
        </div>
        <div style={{ position: "relative" }}>
          <p id="location">г. Москва</p>
          <img
            src="/src/assets/stones.jpg"
            alt="камушки"
            className="hero-image"

            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          <div className={`background-rectangle ${isHovered ? 'hovered' : ''}`} />
        </div>
      </div>
    </div>
  );
}
