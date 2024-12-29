import React from "react";
import Link from "next/link";
import { faucetAbstract } from "./Constants";

const AbstractFaucet = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col max-w-[1200px] mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:text-right">
          FAUCET
        </h1>
        <div className="flex flex-col justify-items-center gap-3 md:gap-4 md:flex-row md:justify-items-end">
          {faucetAbstract.map((faucet, index) => (
            <Link key={index} href={faucet.dappUrl} className="w-full max-w-sm">
              <div className="border border-gray-400 rounded-lg bg-white px-4 py-3 hover:bg-green-300 text-black text-center transition-colors duration-200 text-lg md:text-xl">
                {faucet.dappTitle}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AbstractFaucet;
