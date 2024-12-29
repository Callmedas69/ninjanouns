import MintingPage from "@/components/MintPage";
import React from "react";
import { ConnectButton } from "thirdweb/react";
import { client } from "./ClientId";
import { defineChain } from "thirdweb";
import { abstractTestnet } from "thirdweb/chains";
import BridgeList from "@/components/BridgeList";
import AbstractFaucet from "@/components/AbstractFaucet";
import AbstractLink from "@/components/AbstractLink";
import { Gallery } from "@/components/Gallery";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";

const chain = defineChain(abstractTestnet);

const page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <div className="w-full">
        <div className="md:max-w-[1200px] mx-auto">
          <header className="flex flex-col justify-center items-center mx-5 my-3 md:flex-row md:justify-between">
            <div className="flex-shrink-0 items-center md:items-start">
              <Image
                src={Logo}
                alt="Ninja Nouns"
                width={250}
                height={50}
                className="h-auto"
              />
            </div>
            <div>
              <ConnectButton client={client} chain={chain} />
            </div>
          </header>
        </div>
        <hr className="border-green-300 shadow-green-50" />
      </div>

      {/* MAIN CONTENT */}
      <div>
        {/* MINT SECTION */}
        <div>
          <MintingPage />
        </div>

        {/* BRIDGE AND FAUCET LINKS */}
        <div className="flex flex-col justify-center items-center max-w-[1200px] mx-auto md:flex-row md:justify-between md:text-center">
          <div>
            <BridgeList />
          </div>
          <div>
            <AbstractFaucet />
          </div>
        </div>
        <hr className="border-green-300 max-w-[1200px] mt-10 mx-auto justify-center items-center" />

        {/* GALLERY */}
        <div>
          <Gallery />
        </div>
      </div>

      {/* FOOTER */}
      <div className="bottom-0 w-full">
        <AbstractLink />
      </div>
    </div>
  );
};

export default page;
