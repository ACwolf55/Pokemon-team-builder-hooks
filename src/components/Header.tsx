import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-red-600 w-full h-[15vh] flex items-center justify-center text-white px-4">
      <Link
        to="/"
        className="flex items-center hover:opacity-80 transition"
      >
        <img src="./pokeball.png" className="h-8 w-8 mr-2" alt="Pokeball" />
        <h1 className="text-3xl font-bold">Pokemon Team Builder</h1>
      </Link>
    </header>
  );
};

export default Header;
