import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div>
        <h2>Здесь могла быть ваша реклама</h2>
        <p>Но здесь просто огромный футер</p>
        <p>Сделано на React</p>
      </div>
      <div>
        <p>
          &copy;{" "}
          <span>
            {`
            ${new Date().getFullYear()} `}
          </span>
          никакие права не защищены
        </p>
      </div>
    </footer>
  );
}
