import React from "react";
import { bridgeLink } from "./Constants";
import Link from "next/link";

const BridgeList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col max-w-[1200px] mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:text-left">
          BRIDGE
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center md:justify-start md:items-start md-text-left">
          {bridgeLink.map((bridge, index) => (
            <Link key={index} href={bridge.dappUrl} className="w-full max-w-sm">
              <div className="border border-gray-400 rounded-lg bg-white px-4 py-3 hover:bg-green-300 text-black text-center transition-colors duration-200 text-lg md:text-xl">
                {bridge.dappTitle}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BridgeList;
