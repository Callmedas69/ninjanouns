"use client";

import React from "react";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import { getContract } from "thirdweb";
import { getOwnedNFTs, balanceOf } from "thirdweb/extensions/erc1155";
import { Card, CardContent } from "@/components/ui/card";
import { client } from "@/app/ClientId";
import { ERC1155_Contract, projectChain } from "./Constants";
import IPFSImage from "@/utils/IPFSImage";

interface NFTMetadata {
  name?: string;
  image?: string;
  description?: string;
}

interface ERC1155NFT {
  id: bigint;
  metadata: NFTMetadata;
  owner: string | null;
  supply: bigint;
  tokenURI: string;
  type: "ERC1155";
  quantityOwned: bigint;
}

const ERC1155_View_Wallet = () => {
  const account = useActiveAccount();
  const contract = getContract({
    client,
    chain: projectChain,
    address: ERC1155_Contract,
  });

  // Get balance of token ID 0
  const { data: tokenZeroBalance, isLoading: isLoadingTokenZeroBalance } =
    useReadContract(balanceOf, {
      contract,
      owner: account?.address || "",
      tokenId: BigInt(0),
    });

  // Get owned NFTs for connected wallet
  const { data: nfts } = useReadContract(getOwnedNFTs, {
    contract,
    start: 0,
    count: 100,
    address: account?.address || "",
  });

  // Show loading state when wallet is connected and we're fetching token balance
  if (account?.address && isLoadingTokenZeroBalance) {
    return (
      <div className="flex flex-col justify-center items-center h-64 max-w-[1200px] mx-auto">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!account?.address) {
    return (
      <div className="flex flex-col justify-center items-center h-64 max-w-[1200px] mx-auto">
        <p className="text-gray-500">your seal will display here</p>
      </div>
    );
  }

  if (
    (!nfts || nfts.length === 0) &&
    (!tokenZeroBalance || tokenZeroBalance === BigInt(0))
  ) {
    return (
      <div className="flex flex-col justify-center items-center h-64 max-w-[1200px] mx-auto">
        <p className="text-gray-500">no seal found in your wallet</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] justify-center items-center mx-auto mb-10">
      <hr className="border-green-300" />
      <p className="text-5xl py-5 px-3 font-bold">YOUR SEAL</p>

      {/* Display other owned NFTs */}
      {nfts && nfts.length > 0 && (
        <div>
          {(nfts as ERC1155NFT[]).map((nft) => (
            <Card
              key={nft.id.toString()}
              className="w-64 bg-transparent border-0"
            >
              <CardContent>
                {nft?.metadata.image ? (
                  <div className="flex justify-center items-center pt-5 pb-3">
                    <div className="overflow-hidden rounded-xl">
                      <IPFSImage
                        ipfsUrl={nft.metadata.image}
                        alt={nft.metadata.name || ""}
                        width={200}
                        height={200}
                        className="object-cover w-48 h-48"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <span className="text-gray-200">No image</span>
                  </div>
                )}
                <div className="flex flex-col justify-center items-center text-center">
                  <h3 className="text-lg font-bold text-gray-200">
                    {nft.metadata.name || `NFT #${nft.id}`}
                  </h3>
                  <p className="text-gray-400">
                    Owned: {nft.quantityOwned.toString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ERC1155_View_Wallet;
