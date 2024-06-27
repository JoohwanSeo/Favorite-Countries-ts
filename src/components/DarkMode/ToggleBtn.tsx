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

  return <button onClick={toggleTheme}>DarkMode</button>;
};

export default ToggleBtn;
