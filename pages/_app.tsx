import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";
import OrderContext from "../src/store/OrderContext";
import useGlobalState from "../src/store/useGlobalState";
import theme from "../src/theme";
import data from "../src/data";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Glacial Indifference";
        font-style: normal;
        font-weight: normal;
        src: url(/fonts/GlacialIndifference-Regular.otf);
    }

    @font-face {
        font-family: "Glacial Indifference";
        font-style: italic;
        font-weight: normal;
        src: url(/fonts/GlacialIndifference-Italic.otf);
    }

    @font-face {
        font-family: "Glacial Indifference";
        font-style: bold;
        font-weight: bold;
        src: url(/fonts/GlacialIndifference-Bold.otf);
    }

    *, ::after, ::before {
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        border-color: #e2e8f0;
    }

    html {
        font-family: 'Glacial Indifference', 'Rubik', 'Open Sans', sans-serif;
        line-height: 1.5;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
        margin: 0;
    }

    ol, ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    [type="checkbox"], [type="radio"] {
        box-sizing: border-box;
        padding: 0px;
    }

    button, input, optgroup, select, textarea {
        font-family: inherit;
        font-size: inherit;
        line-height: 1.15;
        margin: 0px;
    }

    button, input {
        overflow: visible;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
    }

    .ReactCollapse--collapse {
        transition: height 500ms;
    }
`;

const App = ({ Component, pageProps }) => {
    const [order, actions] = useGlobalState();

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" />

                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />

                {/* Primary Meta Tags */}
                <title>
                    {data.name}: {data.slogan}
                </title>
                <meta name="title" content={data.name} />
                <meta name="description" content={data.about} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={data.website.url} />
                <meta property="og:title" content={data.name} />
                <meta property="og:description" content={data.about} />
                <meta property="og:image" content={data.website.banner_url} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={data.website.url} />
                <meta property="twitter:title" content={data.name} />
                <meta property="twitter:description" content={data.about} />
                <meta
                    property="twitter:image"
                    content={data.website.banner_url}
                />

                {/* Icon */}
                <link
                    rel="shortcut icon"
                    href={data.website.favicon}
                    type="image/x-icon"
                />
            </Head>
            <OrderContext.Provider value={[order, actions]}>
                <GlobalStyle />
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </OrderContext.Provider>
        </>
    );
};

export default App;
