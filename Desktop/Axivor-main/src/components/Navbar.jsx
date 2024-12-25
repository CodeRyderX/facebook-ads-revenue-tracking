import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Icons
import { BiSearch, BiCandles } from "react-icons/bi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TbActivityHeartbeat } from "react-icons/tb";
import { PiRanking } from "react-icons/pi";
import { FaUserCircle, FaSignOutAlt, FaCog, FaWallet } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeMarketTab, setActiveMarketTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.getElementById("profile-dropdown");
      const profileButton = document.getElementById("profile-button");
      if (
        dropdown &&
        profileButton &&
        !dropdown.contains(event.target) &&
        !profileButton.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { path: "/markets", icon: <BiCandles size={22} />, label: "Markets" },
    { path: "/dashboard", icon: <MdOutlineDashboardCustomize size={22} />, label: "Dashboard" },
    { path: "/activity", icon: <TbActivityHeartbeat size={22} />, label: "Activity" },
    { path: "/rankings", icon: <PiRanking size={22} />, label: "Rankings" },
  ];

  const marketTabs = [
    "All",
    "New",
    "Creators",
    "Sports",
    "Entertainment",
    "PopCulture",
    "Crypto",
    "Politics",
    "Business",
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="w-full bg-white font-mona py-3 px-4 lg:px-10">
        <div className="flex flex-wrap justify-between items-center gap-4 relative">
          {/* Logo */}
          <Link to="/" className="text-lg font-semibold">
            Axivor
          </Link>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="flex items-center flex-1 max-w-sm bg-gray-100 rounded-md py-2 px-3"
          >
            <BiSearch size={18} className="text-gray-600" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-100 text-sm w-full focus:outline-none ml-2"
              placeholder="Search Markets"
            />
          </form>

          {/* Navigation Links */}
          <div className="hidden lg:flex gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 ${
                  location.pathname === item.path ? "text-teal-600" : "text-gray-700"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              id="profile-button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="w-10 h-10 rounded-full overflow-hidden"
            >
              <img
                src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </button>
            {isDropdownOpen && (
              <div
                id="profile-dropdown"
                className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md border z-50"
              >
                {[
                  { icon: <FaUserCircle className="mr-2" />, label: "Profile" },
                  { icon: <FaCog className="mr-2" />, label: "Account Settings" },
                  { icon: <FaWallet className="mr-2" />, label: "Wallet" },
                  { icon: <FaSignOutAlt className="mr-2" />, label: "Sign Out" },
                ].map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setIsDropdownOpen(false)}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Market Tabs */}
        <div className="mt-4 flex gap-3 overflow-x-auto scrollbar-hide">
          {marketTabs.map((tab) => (
            <button
              key={tab}
              className={`px-3 py-1 rounded-full ${
                activeMarketTab === tab
                  ? "bg-teal-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveMarketTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

          {/* Bottom Navigation */}
          <div className="fixed bottom-0 left-0 w-full bg-white border-t lg:hidden z-50">
        <div className="flex justify-around py-3 px-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center text-xs w-full ${
                location.pathname === item.path 
                  ? "text-[#48B4A9]" 
                  : "text-gray-500"
              }`}
            >
              <div className="flex flex-col items-center justify-center">
                {React.cloneElement(item.icon, { 
                  size: 22, 
                  className: location.pathname === item.path 
                    ? "text-[#48B4A9]" 
                    : "text-gray-500"
                })}
                <span className="mt-1">{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
