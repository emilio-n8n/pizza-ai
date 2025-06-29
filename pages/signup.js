import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

const SignupPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here.
    console.log('Signup form submitted');
    alert('Thanks for signing up! In a real app, you would receive a confirmation email. For now, we will redirect you to the dashboard.');
    window.location.href = '/dashboard';
  };

  return (
    <div className="bg-light-white min-h-screen flex flex-col">
      <Head>
        <title>Sign Up - Pizza Yolo AI</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet" />
      </Head>
      <Navigation />
      <main className="flex-grow flex items-center justify-center pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="inline-block mb-6">
              <Logo />
            </div>
            <h1 className="text-3xl font-bold text-custom-grey mb-2">Create Your Account</h1>
            <p className="text-custom-grey mb-6">Start your 14-day free trial. No credit card required.</p>
            <form onSubmit={handleSubmit} className="text-left">
              <div className="mb-4">
                <label htmlFor="restaurantName" className="block text-gray-700 font-bold mb-2">
                  Restaurant Name
                </label>
                <input
                  type="text"
                  id="restaurantName"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                  placeholder="e.g., The Pizza Palace"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                  placeholder="e.g., yourpizzeria@email.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                  placeholder="Create a strong password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent-red hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
              >
                Get Started
              </button>
            </form>
            <p className="text-custom-grey mt-6">
              Already have an account?{' '}
              <Link href="/login" legacyBehavior>
                <a className="text-accent-red font-bold hover:underline">Log in here</a>
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignupPage;
