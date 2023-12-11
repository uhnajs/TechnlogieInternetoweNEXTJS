// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-4 px-6 bg-opacity-50 text-white">
            <div className="logo">
                <Link href="/">
                    <a className="text-2xl font-bold">Logo</a>
                </Link>
            </div>
            <div className="navigation space-x-4">
                <Link href="/"><a className="hover:text-gray-300">Home</a></Link>
                <Link href="/about"><a className="hover:text-gray-300">About</a></Link>
                <Link href="/services"><a className="hover:text-gray-300">Services</a></Link>
                <Link href="/pricing"><a className="hover:text-gray-300">Pricing</a></Link>
                {/* Dodaj więcej linków zgodnie z potrzebami */}
            </div>
        </nav>
    );
};

export default Navbar;
