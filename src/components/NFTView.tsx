"use client";

import React from "react";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import { getContract } from "thirdweb";
import { getNFTs } from "thirdweb/extensions/erc721";
import { Card, CardContent } from "@/components/ui/card";
import { client } from "@/app/ClientId";
import { ERC721_Contract, projectChain } from "./Constants";
import IPFSImage from "@/utils/IPFSImage";

interface NFTMetadata {
  name?: string;
  image?: string;
  description?: string;
}

interface NFT {
  id: bigint;
  metadata: NFTMetadata;
  owner: string | null;
  tokenURI: string;
  type: "ERC721" | "ERC1155";
}

const NFTView = () => {
  const account = useActiveAccount();
  const contract = getContract({
    client,
    chain: projectChain,
    address: ERC721_Contract,
  });

  const { data: nfts } = useReadContract(getNFTs, {
    contract,
    start: 0,
    count: 30,
  });

  if (!nfts || nfts.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">No NFTs found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 max-w-[1200px] justify-center items-center mx-auto md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {nfts.map((nft: NFT) => (
        <Card
          key={nft.id.toString()}
          className="overflow-hidden hover:shadow-lg transition-shadow flex justify-center items-center"
        >
          <CardContent className="flex flex-col items-center w-full p-4">
            {nft?.metadata.image ? (
              <div className="flex justify-center items-center h-48 mb-2 w-full">
                <IPFSImage
                  ipfsUrl={nft.metadata.image}
                  alt={nft.metadata.name}
                  width={200}
                  height={200}
                  className="rounded-xl object-contain"
                />
              </div>
            ) : (
              <div className="h-48 w-full bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-400">No image</span>
              </div>
            )}
            <h3 className="font-semibold truncate text-center w-full">
              {nft.metadata.name || `NFT #${nft.id}`}
            </h3>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default NFTView;
