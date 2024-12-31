import React from "react";
import BridgeList from "@/components/BridgeList";
import AbstractFaucet from "@/components/AbstractFaucet";
import AbstractLink from "@/components/AbstractLink";
import { Gallery } from "@/components/Gallery";
import ProjectStory_Main from "@/components/ProjectStory_Main";
import ContractInfoERC721 from "@/components/ContractInfo_ERC721";

const page = () => {
  return (
    <div className="flex flex-col max-w-[1200px] justify-center items-center mx-auto">
      {/* MAIN CONTENT */}
      <div>
        <ContractInfoERC721 />

        <div>
          <ProjectStory_Main />
          <hr className="border-green-300 mt-5" />
        </div>

        {/* BRIDGE AND FAUCET LINKS */}
        <div className="flex flex-col justify-center items-center mx-auto md:flex-row md:justify-between md:text-center">
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
    </div>
  );
};

export default page;
