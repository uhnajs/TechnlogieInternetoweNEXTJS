import React from 'react';

// Jeśli używasz React 18 lub nowszego, importujesz ReactNode w następujący sposób:
// import { ReactNode } from 'react';

interface LayoutProps {
    children: React.ReactNode; // Definiuje typ dla właściwości children
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <header className="bg-blue-500 text-white p-4 shadow-md">
                <div className="container mx-auto">
                    <h1 className="text-xl font-bold">Nazwa Strony</h1>
                </div>
            </header>

            <main className="mb-auto">
                <div className="container mx-auto py-4">
                    {children}
                </div>
            </main>

            <footer className="bg-gray-800 text-white text-center p-4">
                <div className="container mx-auto">
                    <p>&copy; {new Date().getFullYear()} Nazwa Strony. Wszelkie prawa zastrzeżone.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
