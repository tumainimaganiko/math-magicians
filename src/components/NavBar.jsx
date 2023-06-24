import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { path: "/", text: "Home" },
    { path: "quotes", text: "Quotes" },
    { path: "calculator", text: "Calculator" },
  ];

  const footer = {
    position: "fixed",
    bottom: "0px",
    right: "10px",
  };
  return (
    <>
      <nav className="navbar">
        <h1>Math Magicians</h1>
        <ul>
          {links.map((link) => (
            <li key={link.text}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <footer style={footer}>
        Crafted with code and creativity by <b>Tumaini Maganiko</b> .
      </footer>
    </>
  );
};
export default Navbar;
