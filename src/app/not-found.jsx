import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="text-center text-gray-800">
      <p className="text-9xl font-bold">404</p>
      <p className="font-bold text-2xl">Oops!! There is nothing here for you</p>
      <Link href={"/"}>
        <button className="mt-2 w-max px-6 lg:px-7 text-lg font-bold text-gray-700 py-1 pt-2 border-2 border-gray-400 rounded-md active:scale-95 transition-all animated-btn hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
