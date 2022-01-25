import './style/App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Card />
      </main>
    </div>
  );
}

export default App;
