// write a function for "input".
// write a function for "search" button to get text from "input" and pass it to "fetch" function with help of "useSate".

import { Link } from "react-router-dom";
import { BsHandbag, BsBrightnessHigh, BsFillMoonFill } from "react-icons/bs";

import { BookContext } from "../context/Bookcontext";
import { useContext, useState } from "react";

const Header = ({ darkMode, toggleTheme }) => {
  const [searchInput, setSearchInput] = useState("");
  const { fetchBooksByCategory } = useContext(BookContext);

  const handleCategorySelect = (category) => {
    fetchBooksByCategory("", category);
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchBook = (e) => {
    e.preventDefault();
    fetchBooksByCategory(searchInput, "");
  };

  return (
    <header data-bs-theme={darkMode ? "dark" : "light"}>
      <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            HI Library
          </Link>

          <div>
            <div className="d-md-none d-block d-flex justify-content-end">
              <div className="p-2 mx-4 ">
                {darkMode ? (
                  <BsBrightnessHigh
                    className="text-white"
                    onClick={toggleTheme}
                  />
                ) : (
                  <BsFillMoonFill onClick={toggleTheme} />
                )}
              </div>

              <button
                className="navbar-toggler "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                </li>
                {/* <li className='nav-item'>
                <Link to='./about' className='nav-link'>
                  About
                </Link>
              </li> */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Catalog
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        href="#"
                        onClick={() => handleCategorySelect("Adventure")}
                        className="dropdown-item"
                      >
                        Adventure
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={() => handleCategorySelect("Biography")}
                        className="dropdown-item"
                      >
                        Biography
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={() => handleCategorySelect("Classics")}
                        className="dropdown-item"
                      >
                        Classics
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={() => handleCategorySelect("Fantasy")}
                        className="dropdown-item"
                      >
                        Fantasy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={() => handleCategorySelect("Fiction")}
                        className="dropdown-item"
                      >
                        Fiction
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={() => handleCategorySelect("Horror")}
                        className="dropdown-item"
                      >
                        Horror
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={() => handleCategorySelect("History")}
                        className="dropdown-item"
                      >
                        History
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        onClick={() => handleCategorySelect("Mystery")}
                        className="dropdown-item"
                      >
                        Mystery
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={() => handleCategorySelect("Romance")}
                        className="dropdown-item"
                      >
                        Romance
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={() => handleCategorySelect("Science Fiction")}
                        className="dropdown-item"
                      >
                        Science fiction
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={() => handleCategorySelect("Thriller")}
                        className="dropdown-item"
                      >
                        Thriller
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
                <li className="d-md-none d-block">
                  <Link to="/checkout" className="nav-link">
                    Cart
                  </Link>
                </li>
              </ul>

              <div className="d-md-block d-none px-3">
                {darkMode ? (
                  <BsBrightnessHigh
                    className="text-white"
                    onClick={toggleTheme}
                  />
                ) : (
                  <BsFillMoonFill onClick={toggleTheme} />
                )}
              </div>

              <form
                className="d-flex"
                role="search"
                onSubmit={handleSearchBook}
              >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={handleInputChange}
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>

              <div className="d-md-block d-none px-4">
                <Link to="/checkout">
                  <BsHandbag size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
