import './style/App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
