import Image from 'next/image';
import Link from 'next/link';

const StorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <Image
            src="https://img.freepik.com/photos-gratuite/ancien-chef-pizzeria-portrait-realiste-du-chef-au-travail-livrant-pizzas-fraiches-i_166373-6607.jpg"
            alt="Restaurateur souriant"
            width={500}
            height={600}
            className="rounded-lg object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-custom-grey to-transparent opacity-40 rounded-lg"></div>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-custom-grey mb-4">Concentrez-vous sur votre art, nous gérons les appels</h2>
          <p className="text-lg text-custom-grey mb-6">
            Arrêtez de jongler entre le téléphone et le four. Notre assistant IA prend les commandes de manière fluide, libérant votre personnel pour ce qu'il fait de mieux : créer des plats incroyables et une ambiance chaleureuse pour vos clients en salle.
          </p>
          <Link href="/features" legacyBehavior>
            <a className="relative inline-block px-8 py-3 font-bold text-light-white bg-accent-red rounded-full overflow-hidden group">
              <span className="relative z-10">Voir les fonctionnalités</span>
              <span className="absolute inset-0 bg-accent-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
