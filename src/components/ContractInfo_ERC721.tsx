"use client";

import { client } from "@/app/ClientId";
import React from "react";
import { getContract } from "thirdweb";
import { ERC721_Contract, projectChain } from "./Constants";
import { useReadContract } from "thirdweb/react";
import { getContractMetadata } from "thirdweb/extensions/common";

const ContractInfoERC721 = () => {
  const contract = getContract({
    client: client,
    chain: projectChain,
    address: ERC721_Contract,
  });

  const { data: contractMetadata } = useReadContract(getContractMetadata, {
    contract: contract,
  });

  return (
    <div className="my-5">
      <h1 className="text-5xl font-bold text-center md:text-left">
        {contractMetadata?.name}
      </h1>
      <p className="text-lg italic text-center md:text-left">
        {contractMetadata?.description}
      </p>
    </div>
  );
};

export default ContractInfoERC721;
