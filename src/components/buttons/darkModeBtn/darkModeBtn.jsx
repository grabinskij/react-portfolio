import { useEffect } from 'react';
import {useLocalStorage} from "../../../utils/useLocalStorage"
import darkModeDetector from '../../../utils/darkModeDetector';
import sun from '../../../assets/img/icons/sun.svg';
import moon from '../../../assets/img/icons/moon.svg';
import './style.css';

const DarkModeBtn = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', darkModeDetector());

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (event) => {
                const newColorScheme = event.matches ? 'dark' : 'light';
                setDarkMode(newColorScheme);
            });
    }, [setDarkMode]);

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        });
    };

    const btnNormal = 'dark-mode-btn';
    const btnActive = 'dark-mode-btn dark-mode-btn--active';

    return (
        <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    );
};

export default DarkModeBtn;