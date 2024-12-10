import { MdOutlineLocationOn } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { RiAdminLine } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import { IoMenuSharp } from "react-icons/io5";
const Header = () => {
  return (
    <header className="flex items-center justify-between px-24 py-4 gap-5 bg-white shadow-md">
      <div className="flex items-center justify-around gap-16 ">
        <img
          src="assets\logo_web.png"
          alt="Logo"
          className="h-8 w-auto cursor-pointer"
        />
        <div className="relative group">
          <select className="appearance-none bg-gray-50 border w-48 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 cursor-pointer hover:border-blue-500 pl-8 pr-4">
            <option value="" disabled selected>
              Choose location
            </option>
            <div className="sticky top-0 p-2 bg-white">
              <input
                type="text"
                placeholder="Search location..."
                className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <option value="NY" className="py-2 hover:bg-gray-100">
              New York
            </option>
            <option value="LA" className="py-2 hover:bg-gray-100">
              Los Angeles
            </option>
            <option value="CH" className="py-2 hover:bg-gray-100">
              Chicago
            </option>
            <option value="HO" className="py-2 hover:bg-gray-100">
              Houston
            </option>
          </select>
          <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none text-gray-700">
            <MdOutlineLocationOn className="text-xl" />
          </div>
        </div>{" "}
      </div>

      <div className="flex items-center space-x-8">
        <nav className="hidden lg:flex items-center space-x-6">
          <div className="flex space-x-3 items-center cursor-pointer">
            <CiSearch className="text-xl" />
            <p>Search</p>
          </div>
          <button className="rounded-lg bg-pink-600 text-white p-2 w-[80px]">
            Offers
          </button>
          <div className="flex items-center text-sm space-x-2 cursor-pointer">
            <RiAdminLine />
            <p>Sign-in</p>
          </div>
          <div className="flex items-center text-sm space-x-2">
            <div className="h-10 w-10 rounded-full bg-gray-300"></div>
            <div className="relative">
              <select className="appearance-none bg-gray-50 border w-32 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 cursor-pointer hover:border-blue-500 pr-8">
                <option value="" className="hidden" disabled selected>
                  Hii Nikhil{" "}
                </option>
                <option className="py-2 hover:bg-gray-100">My Account</option>
                <option className="py-2 hover:bg-gray-100">
                  Dilevery Support
                </option>
                <option className="py-2 hover:bg-gray-100">Contact Us</option>
                <option className="py-2 hover:bg-gray-100">Term Of Use</option>
                <option className="py-2 hover:bg-gray-100">
                  Privacy Policy
                </option>
              </select>
              <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-lg cursor-pointer">
            <BsCart2 />
            <p>Cart</p>
          </div>
        </nav>
        <IoMenuSharp className="text-2xl cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
