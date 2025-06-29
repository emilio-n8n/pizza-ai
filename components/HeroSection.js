import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-light-white">
      <div className="container mx-auto flex flex-col items-center justify-center text-center min-h-[70vh] px-4 pt-32 pb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-custom-grey mb-4">
          Ne Manquez Plus Jamais une Commande
        </h1>
        <p className="text-lg md:text-2xl text-custom-grey max-w-3xl mx-auto mb-8">
          Notre assistant IA répond à chaque appel, prend les commandes avec précision et laisse votre équipe se concentrer sur ce qui compte vraiment : la cuisine.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/signup" legacyBehavior>
            <a className="bg-accent-red text-white px-8 py-4 rounded-full font-bold hover:scale-105 transform transition-transform duration-300">
              Commencez l'Essai Gratuit
            </a>
          </Link>
          <Link href="/login" legacyBehavior>
            <a className="bg-white text-custom-grey px-8 py-4 rounded-full font-bold hover:scale-105 transform transition-transform duration-300 border border-gray-300">
              Accès Restaurateur
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
