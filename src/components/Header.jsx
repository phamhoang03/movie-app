import {
  faMagnifyingGlass,
  faPlus,
  faLanguage,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "./profile/Profile";

const Header = () => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <header className="flex h-14 items-center justify-between bg-slate-950 px-8 text-white lg:h-20">
      <div className="flex items-center gap-4 lg:gap-6">
        <Link to="/">
          <img src="/netflix.png" className="w-16 sm:w-28" />
        </Link>
        <Link to="/search?mediaType=movie" className="lg:text-xl">
          Phim
        </Link>
        <Link to="/search?mediaType=tv" className="lg:text-xl">
          Truyền hình
        </Link>
      </div>

      <div className="flex gap-5">
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
        <Link to={"/search"}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer text-gray-400 hover:text-white"
          />
        </Link>
      </div>
    </header>
  );
};
export default Header;
