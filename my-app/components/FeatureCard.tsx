// components/HeroSection.tsx

const HeroSection = () => {
    return (
        <div className="text-center p-12 text-white" style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}>
            <h1 className="text-5xl font-bold">We're Streaming</h1>
            <p className="text-xl mt-4 mb-8">Odkrywaj niesamowite światy i epickie przygody</p>
            {/* Dodaj więcej treści lub przyciski */}
        </div>
    );
};

export default HeroSection;