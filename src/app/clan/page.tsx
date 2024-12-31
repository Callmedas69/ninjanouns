import MintERC721 from "@/components/MintERC721";
import NFTViewWallet from "@/components/ERC721_View_Wallet";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <MintERC721 />
        <NFTViewWallet />
      </div>
    </div>
  );
};

export default page;
