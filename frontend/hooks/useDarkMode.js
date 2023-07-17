import { useState } from "react";
import useLocalSotorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalSotorage("darkMode", initialValue);
    return [darkMode, setDarkMode];
}

export default useDarkMode;