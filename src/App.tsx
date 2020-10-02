import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from 'quarks-ui';

import colors from '../src/assets/theme/colors';
import Routes from './routes';
import './assets/style/reset.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props: { theme: { fontFamily: string } }) =>
        props.theme.fontFamily};
  }
`;

const App: React.FC = () => {
    const [themeMode, setThemeModColor] = useState('dark');

    const toggleMode = () => {
        localStorage.setItem('theme', themeMode === 'light' ? 'dark' : 'light');
        setThemeModColor((prevState) =>
            prevState === 'light' ? 'dark' : 'light',
        );
    };

    theme.colors = useMemo(
        () => ({
            ...theme.colors,
            ...colors(themeMode === 'dark'),
        }),
        [themeMode],
    );

    useEffect(() => {
        const themeModeStorage = localStorage.getItem('theme') ?? 'dark';
        setThemeModColor(themeModeStorage);
    }, []);

    return (
        <ThemeProvider
            theme={{
                ...theme,
                toggleTheme: toggleMode,
                fontFamily: 'Roboto Mono, monospace',
            }}
        >
            <Router basename={process.env.PUBLIC_URL}>
                <Routes />
                <GlobalStyle />
            </Router>
        </ThemeProvider>
    );
};

export default App;
