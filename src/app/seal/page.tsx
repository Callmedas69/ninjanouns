import MintERC1155 from "@/components/MintERC1155";
import NFTViewWallet from "@/components/ERC721_View_Wallet";
import React from "react";
import ERC1155_View_Wallet from "@/components/ERC1155_View_Wallet";

const page = () => {
  return (
    <div>
      <div>
        <MintERC1155 />
        <ERC1155_View_Wallet />
      </div>
    </div>
  );
};

export default page;
