import React, { useState } from "react";
import { openSidebar } from "../../redux/features/toggleSidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { logout } from "../../redux/features/authSlice";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { showTimedAlert } from "../../redux/features/alertSlice";
import { setSearchQuery } from "../../redux/features/searchSlice";

const Header = () => {
  const userStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dispatch = useDispatch();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch(logout());
    dispatch(
      showTimedAlert({ message: "Logout successfully", type: "success" })
    );
    setIsDropdownOpen(false);
  };
  return (
    <div className="realative  bg-secondary fixed top-0 w-full z-20 ">
      {/* <Container > */}
      <header className=" text-white px-4 py-2 flex items-center justify-between shadow-md ">
        {/* Logo Section */}
        <div className="flex items-center space-x-4 ">
          <button onClick={() => dispatch(openSidebar())}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <span className="text-xl font-bold text-gray-300">VisionTube</span>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4 max-w-2xl hidden md:block">
          <div className=" flex items-center">
            <input
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              type="text"
              placeholder="Search"
              className="h-10 w-full py-2 px-8 rounded-l-full bg-secondary ring-1 ring-slate-700 placeholder-gray-500 shadow focus:outline-none focus:ring-1 focus:ring-blue-600 text-white"
            />
            <button className="ring-1 ring-slate-700 right-2 h-10 bg-primary text-white px-8 rounded-r-full hover:bg-slate-700 transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Section: Avatar and Buttons */}
        <div className="flex items-center space-x-6">
          {userStatus && (
            <Link to="/upload">
              <Button className="flex items-center ">
                <span className="mr-2 text-gray-300 ">
                  <AddRoundedIcon />
                </span>
                Create
              </Button>
            </Link>
          )}
          {!userStatus && (
            <Link to="/login">
              <Button className="flex items-center">
                {" "}
                <AccountCircleOutlinedIcon />{" "}
                <span className="ml-1">Sign in</span>
              </Button>
            </Link>
          )}
          {userStatus && (
            <img
              src={userData?.avatar}
              alt="User Avatar"
              className="w-10 h-10 rounded-full shadow-md object-cover cursor-pointer"
              onClick={toggleDropdown}
            />
          )}

          {isDropdownOpen && (
            <div className="absolute  right-6 top-14  bg-slate-700 rounded-lg shadow-lg w-40">
              <button
                onClick={() => setIsDropdownOpen(false)}
                className="w-full text-left"
              >
                <Link
                  to="/dashboard"
                  className="flex items-center px-4 py-2 hover:bg-gray-800 rounded-t-lg text-white"
                >
                  <DashboardOutlinedIcon className="mr-2" /> Dashboard
                </Link>
              </button>
              <button
                onClick={handleLogout}
                className=" flex items-center justify-start w-full text-left px-4 py-2 text-white hover:bg-gray-800 rounded-b-lg"
              >
                <ExitToAppOutlinedIcon className="mr-2" /> Logout
              </button>
            </div>
          )}
        </div>
      </header>
      {/* </Container> */}
    </div>
  );
};

export default Header;
