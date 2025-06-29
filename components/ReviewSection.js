const reviews = [
  {
    name: 'Marco, Gérant de "La Pizzeria"',
    review: 'Nous perdions tellement d\'appels pendant les heures de pointe. Pizza Yolo AI a changé la donne. Nos revenus de commandes téléphoniques ont augmenté de 30% !',
    rating: 5,
  },
  {
    name: 'Sofia, "Le Carré Pizza"',
    review: 'J\'étais sceptique au début, mais l\'IA est incroyablement précise. Elle gère même les garnitures personnalisées parfaitement. Mon équipe est moins stressée et peut se concentrer sur la qualité.',
    rating: 5,
  },
  {
    name: 'Léo, "Nuits de Naples"',
    review: 'Le tableau de bord en temps réel est ma fonctionnalité préférée. Je peux voir les commandes arriver de n\'importe où. C\'est comme si nous avions un nouvel employé super efficace.',
    rating: 5,
  },
];

const ReviewSection = () => {
  return (
    <section className="py-16 bg-light-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-custom-grey mb-12">Approuvé par des Pizzerias Comme la Vôtre</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="border-l-4 border-accent-red pl-4 mb-4">
                <p className="text-custom-grey italic">"{review.review}"</p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-custom-grey">{review.name}</p>
                <div className="text-accent-yellow">
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
