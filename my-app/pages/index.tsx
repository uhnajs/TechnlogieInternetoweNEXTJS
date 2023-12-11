// pages/index.tsx
import Layout from '../src/app/layout'; // Załóżmy, że ścieżka do layout jest poprawna
import HeroSection from '../components/HeroSection'; // Upewnij się, że HeroSection jest poprawnie zaimportowany

const Home = () => {
    return (
        <Layout>
            <HeroSection />
            {/* Dodaj inne sekcje strony głównej tutaj */}
        </Layout>
    );
};

export default Home;
