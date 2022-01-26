import './style/App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
import img1 from './images/image1.png';
import img2 from './images/wedding.png';
import img3 from './images/mountain.png';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Card img={img1} />
        <Card img={img2} />
        <Card img={img3} />
      </main>
    </div>
  );
}

export default App;
