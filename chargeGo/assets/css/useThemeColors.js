import store from "../../app/redux/store";
import { useEffect, useState } from "react";

const useThemeColors = () => {
  const [theme, setTheme] = useState(store.getState().GeneralResponse.thema);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const newTheme = store.getState().GeneralResponse.thema;
      if (newTheme !== theme) {
        setTheme(newTheme);
      }
    });
    return () => unsubscribe();
  }, [theme]);

  const colors = {
    color_white: theme === "light" ? "#fff" : "#1B1C1E",
    color_black: theme === "light" ? "#1B1C1E" : "#fff",
    color_purple: theme === "light" ? "#4316B7" : "#fff",
    color_purpleBge: theme === "light" ? "#4316B7" : "#161719",
    color_check: "#411982",
    color_blue: "#1F93FF",
    color_orange: theme === "light" ? "#EC6047" : "#3BC908",
    color_lightgray: theme === "light" ? "#f5f5f5" : "#252525",
    color_border: theme === "light" ? "#f5f5f5" : "#252525",
    color_gray: theme === "light" ? "gray" : "#f5f5f5",
    color_green: "#0EC470",
    color_bge: theme === "light" ? "#f5f5f5" : "#161719",
    transparent: theme === "light" ? "transparent" : "#161719",
    color_sliderPurple: theme === "light" ? "#4316B7" : "#3BC908",
    color_gradient1: theme === "light" ? "#4316B7" : "#1B1C1E",
    color_gradient2: theme === "light" ? "#1E0A51" : "#1B1C1E",
  };

  return colors;
};

export default useThemeColors;
