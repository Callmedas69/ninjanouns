import React from "react";
import Logo from "@/assets/Logo.svg";
import Image from "next/image";
import { client } from "@/app/ClientId";
import { ConnectButton } from "thirdweb/react";
import { internalLink, projectChain } from "./Constants";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full">
      <div className="md:max-w-[1200px] mx-auto">
        <header className="flex flex-col justify-center items-center mx-5 my-3 md:flex-row md:justify-between">
          {/* LOGO */}
          <div className="flex-shrink-0 items-center md:items-start">
            <Image
              src={Logo}
              alt="Ninja Nouns"
              width={250}
              height={50}
              className="h-auto"
            />
          </div>

          {/* LINK */}
          <div className="flex flex-row gap-5 text-2xl">
            {internalLink.map((internal, index) => (
              <div key={index} className="hover:underline hover:text-lime-400">
                <Link href={internal.clanPath}>{internal.clanPage}</Link>
              </div>
            ))}
          </div>

          {/* CONNECT BUTTON */}
          <div>
            <ConnectButton
              client={client}
              chain={projectChain}
              connectModal={{
                showThirdwebBranding: false,
                title: "Welcome to Pixeverse",
              }}
            />
          </div>
        </header>
      </div>
      <hr className="border-green-300 shadow-green-50" />
    </div>
  );
};

export default Header;
