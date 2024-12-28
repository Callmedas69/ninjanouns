import React from "react";
import { abstractLink } from "./Constants";
import Link from "next/link";

const AbstractLink = () => {
  return (
    <div className="mt-10 mx-auto justify-center items-start container bg-black">
      <hr className="border-green-300" />
      <div className="flex gap-5 text-sm text-nowrap justify-center items-center text-centermt-3 py-10">
        {abstractLink.map((abstract, index) => (
          <Link href={abstract.dappUrl}>
            <div key={index} className=" hover:text-green-300 hover:underline">
              {abstract.dappTitle}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AbstractLink;
