import React from "react";
import { Button } from "./atoms/Button";
import { useState } from "react";
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <main className=" container flex justify-center items-center relative mx-auto">
      <nav
        className={`w-full  text-textcook  mx-auto py-5 z-10 sticky top-0  ${
          navbar
            ? "bg-dark text-white border-t-2 border-morning "
            : "bg-ligthing"
        }`}
      >
        <div className=" container mx-auto px-5 desktop:flex tablet:flex  desktop:items-center desktop:justify-between tablet:justify-between">
          <div>
            <div className="flex items-center justify-between md:flex">
              <div className="flex justify-center items-center rounded-md "></div>
              <div className="md:hidden">
                <button
                  className="p-2 text-light rounded outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* 00 */}
          <div className=" flex ">
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block " : "hidden"
              }`}
            >
              <div className="flex items-center">
                <img src="./images/Logo.svg" className="mr-12" />
                <ul className="flex">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Courses</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <Button variant="second" action="Sign Up" />
              <Button variant="primary" action="Login" />
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
}
