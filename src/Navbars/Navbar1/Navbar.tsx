// Center Links

const Navbar = () => {
  return (
    <header className="text-base w-[90%]  mx-auto pt-6 pb-2">
      <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap items-center justify-between">
          <a className="flex font-medium text-text ">
            <img
              className="object-contain object-center rounded-3xl w-36 h-10 "
              alt="hero"
              src="https://res.cloudinary.com/dnzjbmzag/image/upload/v1695361206/CompanyLogo.png"
            />
          </a>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-text rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <ul className="w-full lg:w-auto block lg:flex flex-grow lg:grow-0 ">
            <Links href="/" isActive={true}>
              Home
            </Links>
            <Links href="/" isActive={false}>
              Shows
            </Links>
            <Links href="/" isActive={false}>
              Product
            </Links>
            <Links href="/" isActive={false}>
              Faq's
            </Links>
          </ul>
          <div className=" flex flex-row items-center  lg:space-x-6 lg:space-y-0 lg:flex-row  py-2 lg:px-4 text-base mt-2 lg:mt-0">
            <a className="hover:text-gray-900 cursor-pointer text-[#453878]">
              Log In
            </a>
            <button
              type="button"
              className="text-white bg-[#0E004A] hover:drop-shadow-lg focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-3 mr-2 mb-2  focus:outline-none"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

type Link = {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
};

const Links = ({ href, isActive, children }: Link) => {
  return (
    <li className="mr-5 block lg:inline cursor-pointer">
      <a
        href={href}
        className={`${
          isActive
            ? "text-primary hover:text-gray-900"
            : " text-text hover:text-primary"
        }

          mr-5 pr-4   cursor-pointer flex gap-2`}
      >
        {children}
      </a>
    </li>
  );
};
