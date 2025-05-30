import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import UserAccount from "./UserAccount";

const Navbar = () => {
  return (
    <div className="w-full border-b flex items-center justify-between p-2">
      <div className="flex items-center">
        <button className="ring-offset-2 ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none rounded-sm">
          <Logo />
        </button>
        <div className="text-sm h-full font-medium flex items-center">
          Virtualbox
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Search />
        <UserAccount />
      </div>
    </div>
  );
};

export default Navbar;
