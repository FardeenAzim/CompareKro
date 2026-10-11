import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Mutual Funds", path: "/mutual-funds" },
    { label: "CreditCards", path: "/credit-cards" },
    { label: "Loans", path: "/personal-loans" },
    { label: "Login", path: "/login" },
  ];

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-8"
          />
        </Link>

        <input
          type="search"
          placeholder="Search..."
          className="bg-white text-black placeholder:text-gray-400 border rounded-full py-1 px-4 w-72"
        />
      </div>

      <ul className="flex items-center space-x-12">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="hover:text-blue-300 transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
