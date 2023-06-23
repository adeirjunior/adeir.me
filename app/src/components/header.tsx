import Logo from "./icons/logo";
import LanguageSwitch from "./languageSwitch";
import Nav from "./nav";

function Header() {
  return (
    <nav className="border-gray-200">
      <div className=" flex flex-wrap items-center justify-between mx-auto py-4 px-8">
        <div className="flex items-center">
          <Logo />
          <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Adeir
          </h1>
        </div>
        <LanguageSwitch />
        <Nav />
      </div>
    </nav>
  );
}

export default Header;
