import React from 'react';
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

const App: React.FC = () => (
    <ThemeProvider
        theme={{ ...theme, colors, fontFamily: 'Roboto Mono, monospace' }}
    >
        <Router basename={process.env.PUBLIC_URL}>
            <Routes />
            <GlobalStyle />
        </Router>
    </ThemeProvider>
);

export default App;
