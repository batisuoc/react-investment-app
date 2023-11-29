import logo from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="Logo for investment app" />
      <h1>React Investment Calculator</h1>
    </header>
  );
};

export default Header;
