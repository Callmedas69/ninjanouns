import React, { useMemo } from "react";
import Image from "next/image";

interface IPFSImageProps {
  ipfsUrl: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  gateway?: string;
}

const IPFSImage: React.FC<IPFSImageProps> = ({
  ipfsUrl,
  alt = "",
  width = 400,
  height = 400,
  className = "",
  gateway = "https://nftstorage.link/ipfs/",
}) => {
  const imageUrl = useMemo(() => {
    if (!ipfsUrl) return "";

    // Handle ipfs:// protocol
    if (ipfsUrl.startsWith("ipfs://")) {
      const hash = ipfsUrl.replace("ipfs://", "");
      return `${gateway}${hash}`;
    }

    // Handle bare CID
    if (ipfsUrl.startsWith("Qm") || ipfsUrl.startsWith("bafy")) {
      return `${gateway}${ipfsUrl}`;
    }

    // If the URL is already using a gateway but it's failing, try to extract CID and use our preferred gateway
    try {
      const url = new URL(ipfsUrl);
      if (url.pathname.includes("/ipfs/")) {
        const cid = url.pathname.split("/ipfs/")[1];
        return `${gateway}${cid}`;
      }
    } catch (e) {
      // If URL parsing fails, return the original URL
    }

    return ipfsUrl;
  }, [ipfsUrl, gateway]);

  return (
    <div className={`relative ${className}`}>
      <Image
        src={imageUrl}
        alt={alt}
        width={width}
        height={height}
        className=""
        loading="lazy"
        unoptimized={false} // Let Next.js optimize the image
      />
    </div>
  );
};

export default IPFSImage;
