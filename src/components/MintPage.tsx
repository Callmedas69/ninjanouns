"use client";

import { client } from "@/app/ClientId";
import React, { useState } from "react";
import { defineChain, getContract, toEther } from "thirdweb";
import { abstractTestnet } from "thirdweb/chains";
import { getContractMetadata } from "thirdweb/extensions/common";
import {
  claimTo,
  getActiveClaimCondition,
  getTotalClaimedSupply,
  nextTokenIdToMint,
} from "thirdweb/extensions/erc721";
import {
  ConnectButton,
  MediaRenderer,
  TransactionButton,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";
import ProjectDescriptions from "./ProjectDescriptions";

export default function MintingPage() {
  const account = useActiveAccount();

  const chain = defineChain(abstractTestnet);

  const [quantity, setQuantity] = useState(1);

  const contract = getContract({
    client: client,
    chain: chain,
    address: "0x9Ab3c0d46861928bbE0Aafb8C634a8DA49E7Df33",
  });

  const { data: contractMetadata, isLoading: isContractMetadataLoading } =
    useReadContract(getContractMetadata, {
      contract: contract,
    });

  const { data: claimedSupply, isLoading: isClaimedSupplyLoading } =
    useReadContract(getTotalClaimedSupply, {
      contract: contract,
    });

  const { data: totalNFTSupply, isLoading: isTotalSupplyLoading } =
    useReadContract(nextTokenIdToMint, {
      contract: contract,
    });

  const { data: claimCondition } = useReadContract(getActiveClaimCondition, {
    contract: contract,
  });

  const getPrice = (quantity: number) => {
    const total =
      quantity * parseInt(claimCondition?.pricePerToken.toString() || "0");
    return toEther(BigInt(total));
  };

  return (
    <div>
      {/* CONTENT CONTAINER */}
      <div className="flex flex-row mt-5 max-w-[1200px] mx-auto justify-between items-start">
        {/* LEFT GRID / PROJECT DESCRIPTION */}
        <div className="flex flex-col gap-4 p-6 max-w-[850px] container">
          {/* TITLE & SUBTITLE */}
          <div>
            <p className="text-5xl font-bold">{contractMetadata?.name}</p>
            <p className="text-xs italic">{contractMetadata?.description}</p>
          </div>
          {/* DESCRIPTION */}
          <div>
            <ProjectDescriptions />
          </div>
        </div>

        {/* RIGHT GRID / MINT INFORMATION*/}
        <div className="flex flex-col max-w-[350px] container justify-center items-center">
          {/* NFT PREVIEW */}
          <div>
            {isContractMetadataLoading ? (
              <p>Loading...</p>
            ) : (
              <div>
                <MediaRenderer
                  client={client}
                  src={contractMetadata?.image}
                  className="rounded-xl mx-4 mb-4 mt-10"
                />
              </div>
            )}
          </div>

          {/* MINT DETAIL */}
          <div className="flex flex-col max-w-[350px] container mb-4 gap-3 text-nowrap px-5">
            <div className="flex flex-row justify-between items-end">
              <p>Chain</p>
              <p>{chain.name}</p>
            </div>
            <div className="flex flex-row justify-between items-end">
              <p>Mint Price</p>
              <p>{getPrice(1)} Ξ</p>
            </div>
            <div className="flex flex-row justify-between items-end">
              <p>Limit per Wallet</p>
              <p>{claimCondition?.quantityLimitPerWallet.toString()}</p>
            </div>
            <div className="flex flex-row justify-between items-end">
              <p>Claimed / Supply</p>
              <p>
                {claimedSupply?.toString()} / {totalNFTSupply?.toString()}
              </p>
            </div>
            <hr />
          </div>

          {/* INPUT AND BUTTON */}
          <div className="max-w-[350px] container">
            <div className="flex flex-col px-5">
              {/* INPUT FIELD */}
              <div className="flex flex-row items-center justify-between mb-4 px-5">
                <button
                  className="border border-gray-400 rounded-lg mr-2 px-3 py-2 hover:bg-green-400 hover:text-black"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input
                  type="number"
                  className="rounded-lg text-black px-3 py-2 w-32 text-center pl-1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  min="1"
                />
                <button
                  className="border border-gray-400 rounded-lg ml-2 px-3 py-2 hover:bg-green-400 hover:text-black"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <hr />
            </div>

            {/* MINT / CLAIM BUTTON */}
            <div className="flex my-4 justify-center px-5">
              <TransactionButton
                transaction={() =>
                  claimTo({
                    contract: contract,
                    to: account?.address || "",
                    quantity: BigInt(quantity),
                  })
                }
                onTransactionConfirmed={async () => {
                  alert("NFT Claimed");
                  setQuantity(1);
                }}
                className="hover:bg-green-400"
              >{`Claim NFT (${parseFloat(getPrice(quantity)).toFixed(
                4
              )}) Ξ`}</TransactionButton>
            </div>
          </div>
        </div>
      </div>
      <hr className="flex mx-auto justify-center items-center max-w-[1200px] my-4 border-green-300" />
    </div>
  );
}
