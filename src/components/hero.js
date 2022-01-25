import imgHero from '../images/Group77.png';

const Hero = () => {
  return (
    <section className="hero">
      <img src={imgHero} alt="group of images" className="hero--photo" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </section>
  );
};

export default Hero;
