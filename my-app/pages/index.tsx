// pages/index.tsx
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
// Zaimportuj pozostałe komponenty, które tworzysz

export default function Home() {
    return (
        <Layout>
            <HeroSection />
            {/* Tutaj możesz dodać kolejne sekcje i komponenty, takie jak karty funkcji itp. */}
        </Layout>
    );
}
