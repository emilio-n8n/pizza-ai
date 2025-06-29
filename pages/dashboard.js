import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Bell, Settings, LogOut, Pizza, Clock, CheckCircle, User } from 'lucide-react';

// --- MOCK DATA ---
const initialOrders = [
  { id: 'A123', customer: 'John Doe', items: ['1x Pepperoni', '1x Coke'], status: 'Delivered', time: '12:30 PM' },
  { id: 'A124', customer: 'Jane Smith', items: ['2x Margherita', '1x Water'], status: 'In Progress', time: '12:45 PM' },
  { id: 'A125', customer: 'Peter Jones', items: ['1x Veggie', '1x Fries'], status: 'New', time: '12:50 PM' },
];

const newOrderSamples = [
    { customer: 'Alice', items: ['1x Quattro Formaggi'] },
    { customer: 'Bob', items: ['1x Calzone', '2x Sprite'] },
    { customer: 'Charlie', items: ['3x Pepperoni', '1x Garlic Bread'] },
];
// --- END MOCK DATA ---


const StatusBadge = ({ status }) => {
  const baseClasses = "px-3 py-1 rounded-full text-sm font-semibold";
  const statusClasses = {
    'New': 'bg-blue-200 text-blue-800',
    'In Progress': 'bg-yellow-200 text-yellow-800',
    'Delivered': 'bg-green-200 text-green-800',
  };
  return <span className={`${baseClasses} ${statusClasses[status]}`}>{status}</span>;
};

const OrderCard = ({ order }) => (
  <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-accent-red mb-4 transform hover:shadow-xl transition-shadow duration-300">
    <div className="flex justify-between items-start mb-2">
      <h3 className="font-bold text-lg text-custom-grey">Order #{order.id}</h3>
      <StatusBadge status={order.status} />
    </div>
    <div className="text-gray-600">
      <div className="flex items-center mb-2">
        <User size={16} className="mr-2" />
        <span>{order.customer}</span>
      </div>
      <div className="flex items-center mb-2">
        <Pizza size={16} className="mr-2" />
        <span>{order.items.join(', ')}</span>
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <Clock size={16} className="mr-2" />
        <span>{order.time}</span>
      </div>
    </div>
  </div>
);

const DashboardPage = () => {
  const [orders, setOrders] = useState(initialOrders);

  // Simulate new orders coming in
  useEffect(() => {
    const interval = setInterval(() => {
      const sampleOrder = newOrderSamples[Math.floor(Math.random() * newOrderSamples.length)];
      const newOrder = {
        id: `A${126 + Math.floor(Math.random() * 100)}`,
        status: 'New',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        ...sampleOrder,
      };
      setOrders(prevOrders => [newOrder, ...prevOrders]);
    }, 8000); // Add a new order every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Dashboard - Pizza Yolo AI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-custom-grey text-light-white p-6 hidden md:block">
          <h1 className="font-bold text-2xl mb-8">Pizza Yolo AI</h1>
          <nav>
            <ul>
              <li className="mb-4"><a href="#" className="flex items-center p-2 bg-accent-red rounded-lg"><Bell className="mr-3" /> Dashboard</a></li>
              <li className="mb-4"><a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded-lg"><Settings className="mr-3" /> Settings</a></li>
              <li className="mb-4"><a href="/login" className="flex items-center p-2 hover:bg-gray-700 rounded-lg"><LogOut className="mr-3" /> Logout</a></li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-8">
          <header className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-custom-grey">Real-Time Orders</h2>
            <div className="flex items-center text-green-600">
              <CheckCircle className="mr-2" />
              <span>Live Connection</span>
            </div>
          </header>

          <div className="max-w-2xl mx-auto">
            {orders.map(order => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
