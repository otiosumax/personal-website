import "../styles/Hero.css";

export default function Hero() {
  return (
    <div id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Web-<br />
            <span>разработчик</span>
          </h1>
          <div id="separator" />
          <p>Всегда готов к новым вызовам!</p>
        </div>
        <img src="/src/assets/stones.jpg" alt="камушки" className="hero-image" />
      </div>
    </div>
  );
}
