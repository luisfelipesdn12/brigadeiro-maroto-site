import { createGlobalStyle, ThemeProvider } from "styled-components";
import OrderContext from '../store/OrderContext';
import useGlobalState from "../store/useGlobalState";
import theme from '../theme';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

const App = ({ Component, pageProps }) => {
    const [order, actions] = useGlobalState();

    return (
        <OrderContext.Provider value={[order, actions]}>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </OrderContext.Provider>
    );
}

export default App;
