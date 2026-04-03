import { useState } from "react";
import { useThemeStore } from "../../../themeStore";
import "../styles/Header.css";

export default function Header() {
  const themeStore = useThemeStore;

  const [theme, setTheme] = useState(themeStore.savedTheme);

  return (
    <>
      <div id="header">
        <p id="nick">otiosum<a href="/admin">a</a>x</p>
        <div style={{display: "inline-flex"}}>
          <button
            onClick={() => {
              if (theme === "dark") {
                themeStore.setTheme("light");
                setTheme("light");
                return;
              }
              themeStore.setTheme("dark");
              setTheme("dark");
            }}
          >
            сменить тему
          </button>
          <p>связаться</p>
        </div>
      </div>
    </>
  );
}
