import React from "react";
import { bridgeLink } from "./Constants";
import Link from "next/link";

const BridgeList = () => {
  return (
    <div className="flex flex-col mt-5 max-w-[1200px] mx-auto justify-between items-start">
      <div className="text-4xl mb-5">BRIDGE</div>
      <div className="flex flex-row gap-5 text-xl">
        {bridgeLink.map((bridge, index) => (
          <div key={index}>
            <Link href={bridge.dappUrl}>
              <div className="border border-gray-400 rounded-lg bg-white px-3 py-1 hover:bg-green-300 text-black">
                {bridge.dappTitle}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BridgeList;
