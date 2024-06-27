import { useLayoutEffect } from "react";

interface ToggleBtnProps {}

const localStorageKey = {
    THEME: 'theme',
} as const

const THEME = {
    LIGHT: 'light',
    DARK: 'dark',
} as const


const ToggleBtn = ({}: ToggleBtnProps) => {
    useLayoutEffect(() => {
        const theme = localStorage.getItem(localStorageKey.THEME) || THEME.LIGHT;
        if (theme === THEME.DARK) {
          document.querySelector('html')?.classList.add(THEME.DARK);
        }
        }, [])

  const toggleTheme = () => {
    const htmlElement = document.querySelector('html');
    if (!htmlElement) return;

    const disableDarkMode = htmlElement.classList.contains('dark');

    if (disableDarkMode) {
      htmlElement.classList.remove('dark');
      localStorage.removeItem(localStorageKey.THEME)
    } else {
      htmlElement.classList.add('dark');
      localStorage.setItem(localStorageKey.THEME, THEME.DARK)
    }
  };

  return(
  <button 
  onClick={toggleTheme}
  className="m-2 px-4 py-2 bg-black-400 text-white dark: text-black rounded-md hover:bg-black-600 dark:bg-white-700 dark:hover:bg-white-800 transition-colors duration-300"
  >
    DarkMode
  </button>) ;
};

export default ToggleBtn;
