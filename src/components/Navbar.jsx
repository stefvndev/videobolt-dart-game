import Logo from "../images/logo.png";
import { BiSearch } from "react-icons/bi";
import { FiLogIn } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";
import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="logo-links">
            <img src={Logo} alt="logo-img" />
            <ul className="logo-links__links">
              <li>
                <a href="#templates">Templates</a>
              </li>
              <li>
                <a href="#solutions">Solutions</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#resources">Resources</a>
              </li>
            </ul>
          </div>
          <div className="nav-container__input-btns">
            <form>
              <input type="text" placeholder="Search templates..."></input>
              <button type="submit">
                <BiSearch />
              </button>
            </form>
            <span>
              <a href="#logIn">
                <FiLogIn /> Log in
              </a>
              <a href="#free">
                <HiOutlineUser /> Try for free
              </a>
              <button>
                <HiBars3 />
              </button>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
