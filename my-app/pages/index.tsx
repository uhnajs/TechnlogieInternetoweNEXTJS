// pages/index.tsx

import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {/* Przykładowe dane dla kart */}
                <FeatureCard
                    imageSrc="/images/feature1.jpg"
                    title="Tytuł Kafelka 1"
                    description="Opis zawartości kafelka 1..."
                />
                <FeatureCard
                    imageSrc="/images/feature2.jpg"
                    title="Tytuł Kafelka 2"
                    description="Opis zawartości kafelka 2..."
                />
                <FeatureCard
