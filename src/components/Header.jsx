import {
  faPlus,
  faLanguage,
  faBell,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "./profile/Profile";
import SearchTitle from "./SearchForm/SearchTitle";

const Header = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative flex h-14 items-center justify-between bg-slate-950 px-4 text-white lg:h-20">
      <div className="flex items-center gap-4">
        <button
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} className="text-xl" />
        </button>

        <Link to="/">
          <img src="/netflix.png" className="w-16 sm:w-28" />
        </Link>

        <nav className="ml-4 hidden gap-4 md:flex">
          <Link to="/search?mediaType=movie" className="lg:text-xl">
            Movie
          </Link>
          <Link to="/search?mediaType=tv" className="lg:text-xl">
            TV Show
          </Link>
          <Link to="/search?mediaType=tv" className="lg:text-xl">
            People
          </Link>
        </nav>
      </div>

      {isMenuOpen && (
        <nav className="bg-opacity-90 absolute top-full left-0 z-50 flex w-full flex-col gap-3 bg-slate-900 p-4 md:hidden">
          <Link to="/search?mediaType=movie" className="text-white">
            Movie
          </Link>
          <Link to="/search?mediaType=tv" className="text-white">
            TV Show
          </Link>
          <Link to="/search?mediaType=tv" className="lg:text-xl">
            People
          </Link>
        </nav>
      )}

      <Link
        to="/search?mediaType=movie"
        className="flex w-1/3 items-center rounded-lg bg-gray-800 px-3 py-1"
      >
        <SearchTitle />
      </Link>

      <div className="flex gap-3 md:gap-5 lg:text-lg">
        <a href="#" className="text-gray-400 hover:text-white">
          <FontAwesomeIcon icon={faPlus} />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <FontAwesomeIcon icon={faLanguage} />
        </a>
        <a href="#" className="relative text-gray-400 hover:text-white">
          <div className="absolute flex h-2 w-2 items-center justify-center rounded-full border border-amber-50 bg-red-500 text-center text-[4px] text-white">
            2
          </div>
          <FontAwesomeIcon icon={faBell} />
        </a>
        <div
          onClick={() => setIsShowing(!isShowing)}
          className="z-50 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border bg-amber-500"
        >
          H{isShowing && <Profile />}
        </div>
      </div>
    </header>
  );
};

export default Header;
