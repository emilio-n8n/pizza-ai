import Logo from './Logo';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-custom-grey text-light-white">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <p className="mt-4 text-gray-400">L'assistant IA pour votre pizzeria.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link href="/#features" legacyBehavior><a className="hover:text-accent-yellow">Fonctionnalités</a></Link></li>
              <li><Link href="/#pricing" legacyBehavior><a className="hover:text-accent-yellow">Tarifs</a></Link></li>
              <li><Link href="/login" legacyBehavior><a className="hover:text-accent-yellow">Connexion</a></Link></li>
              <li><Link href="/signup" legacyBehavior><a className="hover:text-accent-yellow">S'inscrire</a></Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="hover:text-accent-yellow"><Facebook /></a>
              <a href="#" className="hover:text-accent-yellow"><Twitter /></a>
              <a href="#" className="hover:text-accent-yellow"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
          <p>&copy; {new Date().getFullYear()} Pizza Yolo AI. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
