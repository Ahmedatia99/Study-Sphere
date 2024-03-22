import React from "react";
import { Button } from "./atoms/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <main>
      <section className=" container flex justify-between items-center py-5 mx-auto w-full px-3">
        <div className="flex justify-center items-center">
          <img src="./images/Logo.svg" className="mr-12" />
          <ul className="flex">
            <li>
              <Link
                to={"/"}
                onClick={handleClick}
                className={classNames({ "bg-red": clicked })}
              >
                Home
              </Link>
            </li>
            <li>
              <Link to={"/courses"} onClick={handleClick}>
                Courses
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                onClick={handleClick}
                className={classNames({ "bg-red": clicked })}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link to={"/pricing"} onClick={handleClick}>
                Pricing
              </Link>
            </li>
            <li>
              <Link to={"/contact"} onClick={handleClick}>
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
