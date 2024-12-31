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
  MediaRenderer,
  TransactionButton,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { setTimeout } from "timers";
import ProjectStory_Main from "./ProjectStory_Main";
import { ERC721_Contract } from "./Constants";
import ContractInfoERC721 from "./ContractInfo_ERC721";

export default function MintERC721() {
  const account = useActiveAccount();

  const chain = defineChain(abstractTestnet);

  // Alert
  const [showAlert, setShowAlert] = useState(false);
  const [prevQuantity, setPrevQuantity] = useState(1);

  const [quantity, setQuantity] = useState(1);

  const contract = getContract({
    client: client,
    chain: chain,
    address: ERC721_Contract,
  });

  const { data: contractMetadata, isLoading: isContractMetadataLoading } =
    useReadContract(getContractMetadata, {
      contract: contract,
    });

  const { data: claimedSupply } = useReadContract(getTotalClaimedSupply, {
    contract: contract,
  });

  const { data: totalNFTSupply } = useReadContract(nextTokenIdToMint, {
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
      <div className="flex flex-col mt-5 max-w-[1200px] mx-auto justify-between items-start md:flex-row">
        {/* LEFT GRID / PROJECT DESCRIPTION */}
        <div className="flex flex-col gap-4 p-6 max-w-[850px] container">
          {/* TITLE & SUBTITLE */}
          <div>
            <ContractInfoERC721 />
          </div>
          {/* DESCRIPTION */}
          <div>
            <ProjectStory_Main />
          </div>
        </div>

        {/* RIGHT GRID / MINT INFORMATION*/}

        {isContractMetadataLoading ? (
          <div className="flex mx-auto h-full justify-center items-center text-center">
            Loading...
          </div>
        ) : (
          <div className="flex flex-col max-w-[350px] container justify-center items-center">
            {/* NFT PREVIEW */}

            <div>
              <MediaRenderer
                client={client}
                src={contractMetadata?.image}
                className="rounded-xl mx-4 mb-4 mt-10"
              />
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

              <div>
                {showAlert && (
                  <div className="my-4 px-5">
                    <Alert>
                      <AlertTitle>Welcome to the Dojo</AlertTitle>
                      <AlertDescription>
                        {`You just claimed ${prevQuantity} Kon for ${parseFloat(
                          getPrice(prevQuantity)
                        ).toFixed(4)} Ξ`}
                      </AlertDescription>
                    </Alert>
                  </div>
                )}

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
                      setPrevQuantity(quantity);
                      setShowAlert(true);
                      setQuantity(1);
                      setTimeout(() => setShowAlert(false), 10000);
                    }}
                    className="hover:bg-green-400"
                  >{`Claim NFT (${parseFloat(getPrice(quantity)).toFixed(
                    4
                  )}) Ξ`}</TransactionButton>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
