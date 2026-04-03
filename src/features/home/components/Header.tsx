import { useState } from "react";
import { useThemeStore } from "../../../themeStore";
import "../styles/Header.css";

export default function Header() {
  const themeStore = useThemeStore;

  const [theme, setTheme] = useState(themeStore.savedTheme);

  return (
    <>
      <div id="header">
        <span id="nick">otiosumax</span>
        <div>
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
          <span>связаться</span>
        </div>
      </div>
    </>
  );
}
