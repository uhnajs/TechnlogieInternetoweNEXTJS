// components/Footer.tsx

const Footer = () => {
    return (
        <footer className="bg-black text-white text-center p-4">
            <p>&copy; {new Date().getFullYear()} Nazwa Firmy. Wszystkie prawa zastrzeżone.</p>
        </footer>
    );
};

export default Footer;
