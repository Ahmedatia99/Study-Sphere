import React from "react";
import { Button } from "./atoms/Button";

export default function Navbar() {
  return (
    <main>
      <section className=" container flex justify-between items-center py-5 mx-auto w-full px-3">
        <div className="flex justify-center items-center">
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
        <div className="flex">
          <Button variant="primary" action="Sign Up" />
          <Button variant="second" action="Login" />
        </div>
      </section>
    </main>
  );
}
