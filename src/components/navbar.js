import logo from '../imagestwo/airbnbIMG.jpg';

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="airbnb logo" className="__logo" />
    </nav>
  );
};

export default Navbar;
