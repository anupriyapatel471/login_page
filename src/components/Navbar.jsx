import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/Profile">Profile</NavLink>
        </li>
      </ul>
    </>
  );
};
export default Navbar;
