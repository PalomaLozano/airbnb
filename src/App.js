import './style/App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
import Data from './data.js';

function App() {
  const cards = Data.map((item) => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        {cards}
      </main>
    </div>
  );
}

export default App;
