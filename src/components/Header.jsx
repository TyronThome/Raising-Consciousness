import { useLocation, useNavigate } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { raisingconsciousness } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Use navigate to change routes
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  const handleNavigationClick = (url) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => {
        document
          .getElementById(url.substring(1))
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document
        .getElementById(url.substring(1))
        ?.scrollIntoView({ behavior: "smooth" });
    }
    handleClick();
  };

  const handleDonateClick = () => {
    // Navigate to the donate page and close the mobile menu
    navigate("/donate");
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false); // Close the mobile menu after navigating
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <div
          className="block w-[12rem] xl:mr-8 cursor-pointer"
          onClick={() => handleNavigationClick("#hero")}
        >
          <img
            src={raisingconsciousness}
            width={190}
            height={40}
            alt="Raising Consciousness"
          />
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigationClick(item.url)}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  location.hash === item.url
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        {/* Donate button */}
        <Link to="/donate">
          <Button className="hidden lg:flex" href="/donate">
            Donate
          </Button>
        </Link>

        {/* Donate button for mobile */}
        <Button
          className="lg:hidden ml-auto"
          px="px-3"
          onClick={handleDonateClick}
        >
          Donate
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
