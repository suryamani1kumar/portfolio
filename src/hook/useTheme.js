import { useEffect, useState } from 'react';
import { getFromlocalStroage, setTolocalStroage } from '../utils/themeSetting';

export const useTheme = () => {
  const themes = getFromlocalStroage('theme');
  const [theme, setTheme] = useState(themes.data.light);
  const [themeLoad, setThemeLoad] = useState(false);
  const clickTheme = (mode) => {
    console.log(mode);
    setTolocalStroage('theme', mode);
    setTheme(mode);
  };
  console.log(themes);
  useEffect(() => {
    const getTheme = getFromlocalStroage('theme');
    getTheme ? setTheme(getTheme) : setTheme(themes.data.light);
    setThemeLoad(true);
  }, []);
  return { theme, themeLoad, clickTheme };
};
