import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '/#features', text: 'Fonctionnalités' },
    { href: '/#pricing', text: 'Tarifs' },
    { href: '/login', text: 'Connexion' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-custom-grey shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <Logo />
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} legacyBehavior>
              <a className="text-light-white font-semibold hover:text-accent-yellow transition-colors duration-200">
                {link.text}
              </a>
            </Link>
          ))}
          <Link href="/signup" legacyBehavior>
            <a className="bg-accent-red text-white px-5 py-2 rounded-full font-bold hover:scale-105 transform transition-transform duration-300">
              S'inscrire
            </a>
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-light-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-custom-grey">
          <div className="flex flex-col items-center space-y-6 p-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} legacyBehavior>
                <a className="text-light-white font-semibold hover:text-accent-yellow transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                  {link.text}
                </a>
              </Link>
            ))}
            <Link href="/signup" legacyBehavior>
              <a className="bg-accent-red text-white px-8 py-3 rounded-full font-bold hover:scale-105 transform transition-transform duration-300" onClick={() => setIsMenuOpen(false)}>
                S'inscrire
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
