// pages/_app.tsx
import '../styles/globals.css' // Załóżmy, że ścieżka do globals.css jest poprawna


function MyApp({ Component, pageProps }) {
    // Opakowanie każdej strony w komponent Layout
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
