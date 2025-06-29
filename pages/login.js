import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here.
    // For this mockup, we'll just log to console.
    console.log('Login form submitted');
    alert('In a real app, this would log you in. For now, we will redirect you to the dashboard.');
    window.location.href = '/dashboard';
  };

  return (
    <div className="bg-light-white min-h-screen flex flex-col">
      <Head>
        <title>Login - Pizza Yolo AI</title>
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
            <h1 className="text-3xl font-bold text-custom-grey mb-2">Welcome Back!</h1>
            <p className="text-custom-grey mb-6">Log in to see your real-time orders.</p>
            <form onSubmit={handleSubmit} className="text-left">
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
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent-red hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
              >
                Log In
              </button>
            </form>
            <p className="text-custom-grey mt-6">
              Don't have an account?{' '}
              <Link href="/signup" legacyBehavior>
                <a className="text-accent-red font-bold hover:underline">Sign up here</a>
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
