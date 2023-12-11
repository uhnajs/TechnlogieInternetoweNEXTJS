import { TailwindConfig } from 'tailwindcss/tailwind-config';

const config: TailwindConfig = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Tutaj możesz rozszerzyć domyślne motywy, np. kolory, czcionki itp.
      colors: {
        'custom-blue': '#243c5a', // Przykładowy niestandardowy kolor
        // Dodaj własne kolory
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'], // Przykładowa niestandardowa czcionka
        // Dodaj własne rodziny czcionek
      },
      // Możesz również rozszerzyć inne motywy, np. odstępy, wielkości, cienie i inne
    },
  },
  plugins: [
    // Tutaj możesz dodać wtyczki Tailwind, jeśli używasz jakichś niestandardowych
  ],
  // Możesz także dodać niestandardowe konfiguracje dla różnych wariantów, takich jak hover, focus itp.
  variants: {
    extend: {
      // Dodaj własne warianty
    },
  },
};

export default config;
