"use client";

import React from "react";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import { getContract } from "thirdweb";
import { getAllOwners, getNFTs } from "thirdweb/extensions/erc721";
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

const NFTViewWallet = () => {
  const account = useActiveAccount();
  const contract = getContract({
    client,
    chain: projectChain,
    address: ERC721_Contract,
  });

  // Get all token ownership data
  const { data: ownersData } = useReadContract(getAllOwners, {
    contract,
    start: 0,
    count: 100,
  });

  // Find tokens owned by connected wallet
  const ownedTokenIds = ownersData
    ?.filter(
      (item) => item.owner.toLowerCase() === account?.address?.toLowerCase()
    )
    .map((item) => item.tokenId);

  // Get metadata for owned tokens only
  const { data: nfts } = useReadContract(getNFTs, {
    contract,
    start: Number(ownedTokenIds?.[0] || 0),
    count: ownedTokenIds?.length || 0,
  });

  if (!account?.address) {
    return (
      <div className="flex flex-col justify-center items-center h-64 max-w-[1200px] mx-auto">
        <p className="text-gray-500">your n1nj4 will display here</p>
      </div>
    );
  }

  if (!nfts || nfts.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-64 max-w-[1200px] mx-auto">
        <p className="text-gray-500">no n1nj4 found in your wallet</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] justify-center items-center mx-auto mb-10">
      <hr className="border-green-300" />
      <p className="text-5xl py-5 px-3 font-bold">YOUR N1NJ4</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {nfts.map((nft: NFT) => (
          <Card
            key={nft.id.toString()}
            className="overflow-hidden hover:shadow-lg transition-shadow flex justify-center items-center"
          >
            <CardContent className="flex flex-col items-center w-full px-2 pt-6">
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
    </div>
  );
};

export default NFTViewWallet;
