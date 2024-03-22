import React from "react";
import { Button } from "./atoms/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
export default function Navbar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <main>
      <section className=" container flex justify-between items-center py-5 mx-auto w-full px-3">
        <div className="flex justify-center items-center">
          <img src="./images/Logo.svg" className="mr-12" />
          <ul className="flex">
            <li>
              <Link
                onClick={() => handleClick("home")}
                className={classNames(
                  activeLink === "home" ? "drop-shadow-lg bg-tasting" : ""
                )}
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleClick("courses")}
                className={classNames(
                  activeLink === "courses" ? "drop-shadow-lg bg-tasting" : ""
                )}
                to={"/courses"}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleClick("about")}
                className={classNames(
                  activeLink === "about" ? "drop-shadow-lg bg-tasting" : ""
                )}
                to={"/about"}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to={"/pricing"}
                onClick={() => handleClick("pricing")}
                className={classNames(
                  activeLink === "pricing" ? "drop-shadow-lg bg-tasting" : ""
                )}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                onClick={() => handleClick("contact")}
                className={classNames(
                  activeLink === "contact" ? "drop-shadow-lg bg-tasting" : ""
                )}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex">
          <Button variant="second" action="Sign Up" />
          <Button variant="primary" action="Login" />
        </div>
      </section>
    </main>
  );
}
