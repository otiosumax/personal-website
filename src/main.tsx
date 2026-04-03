import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./features/home/Home.tsx";
import { useThemeStore } from "./themeStore.ts";

  const themeStore = useThemeStore;
  themeStore.applyTheme(themeStore.savedTheme);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
