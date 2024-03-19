import Image from "next/image";
import React, { useContext } from "react";
import logo from "../../assets/brand/logo.png";
import { AuthContext } from "../context/AuthContext";
const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="container flex justify-between items-center py-3 bg-white">
      <span className="hidden md:block"></span>
      <Image
        src={logo}
        alt="logo"
        className="max-w-[80px] md:max-w-[120px] object-contain"
      />
      {user && user?._id && (
        <button
          onClick={() => logout()}
          className="shadow-none hover:shadow-none rounded bg-red-600 text-current w-[80px] md:w-[100px] h-7 md:h-8 text-white text-xs md:text-sm p-0"
        >
          Log out
        </button>
      )}
    </div>
  );
};

export default Header;
