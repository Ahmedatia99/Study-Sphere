import React from "react";
import { Button } from "./atoms/Button/Button.tsx";
export default function Benfits() {
  return (
    <main>
      <section className="container mx-auto flex justify-center items-center">
        <div className="flex">
          <div>
            <h2 className="desktop:text-5xl font-semibold text-textcook">
              Benefits
            </h2>
            <p className="desktop:text-lg text-textcook">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <Button variant="second" action="View All" />
        </div>
      </section>
    </main>
  );
}
