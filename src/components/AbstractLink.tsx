import React from "react";
import { abstractLink } from "./Constants";
import Link from "next/link";

const AbstractLink = () => {
  return (
    <div className="mt-10 mx-auto w-full bg-black px-4">
      <hr className="border-green-300" />
      <div className="flex flex-wrap gap-3 sm:gap-5 justify-center items-center py-6 sm:py-10">
        <div className="flex flex-col md:flex-row">
          <div>Abstract Official Link :</div>
          {abstractLink.map((abstract, index) => (
            <div
              key={index}
              className="text-sm hover:text-green-300 hover:underline px-2 py-1 text-center"
            >
              <Link href={abstract.dappUrl}>{abstract.dappTitle}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AbstractLink;
