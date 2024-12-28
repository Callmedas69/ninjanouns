import React from "react";
import Link from "next/link";
import { faucetAbstract } from "./Constants";

const AbstractFaucet = () => {
  return (
    <div className="flex flex-col mt-5 max-w-[1200px] mx-auto justify-end items-end">
      <div className="text-4xl mb-5">FAUCET</div>
      <div className="flex flex-row gap-5 text-xl">
        {faucetAbstract.map((faucet, index) => (
          <Link href={faucet.dappUrl}>
            <div
              key={index}
              className="border border-gray-400 rounded-lg bg-white px-3 py-1 hover:bg-green-300 text-black"
            >
              {faucet.dappTitle}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AbstractFaucet;
