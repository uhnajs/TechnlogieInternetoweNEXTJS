// components/HeroSection.tsx
const HeroSection = () => {
    return (
        <div className="text-center p-12 text-white" style={{ backgroundImage: 'url(/path/to/your/hero-image.jpg)', backgroundSize: 'cover' }}>
            <h1 className="text-5xl font-bold">We're Streaming</h1>
            <p className="text-xl mt-4 mb-8">Odkrywaj niesamowite światy i epickie przygody</p>
            {/* Dodaj przyciski akcji lub inne elementy */}
        </div>
    );
};

export default HeroSection;
