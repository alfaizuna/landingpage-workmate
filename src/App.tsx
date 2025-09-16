import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const handleLogin = () => {
    // Redirect to the main app login page
    window.open('https://workmate.webapz.my.id/login', '_blank');
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#10B981',
                secondary: '#fff',
              },
            },
            error: {
              duration: 5000,
              iconTheme: {
                primary: '#EF4444',
                secondary: '#fff',
              },
            },
          }}
        />

        {/* Navigation */}
        <Navbar onLogin={handleLogin} />

        {/* Main Content */}
        <main>
          <Hero onLogin={handleLogin} />
          <Features />
          <Benefits />
          {/* <Pricing onLogin={handleLogin} /> */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
