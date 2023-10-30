import theme from './theme/index';
import { CSSReset, ChakraProvider } from '@chakra-ui/react';
import GlobalStyles from './theme/GlobalStyles.styles';
import { Route, Routes } from 'react-router-dom';
import Home from './pages';
import Drops from './pages/Drops';
import Rankings from './pages/Rankings';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <CSSReset />
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/drops" element={<Drops />} />
                <Route path="/ranking" element={<Rankings />} />
            </Routes>
        </ChakraProvider>
    );
}

export default App;
