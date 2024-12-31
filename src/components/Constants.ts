import Ninja01 from "@/assets/gallery/133.png"
import Ninja02 from "@/assets/gallery/134.png"
import Ninja03 from "@/assets/gallery/152.png"
import Ninja04 from "@/assets/gallery/178.png"
import Ninja05 from "@/assets/gallery/191.png"
import Ninja06 from "@/assets/gallery/192.png"
import Ninja07 from "@/assets/gallery/286.png"
import Ninja08 from "@/assets/gallery/444.png"
import Ninja09 from "@/assets/gallery/449.png"
import Ninja10 from "@/assets/gallery/473.png"
import { defineChain } from "thirdweb"
import { abstractTestnet } from "thirdweb/chains"


export const projectChain = defineChain(abstractTestnet)

export const ERC721_Contract="0x9Ab3c0d46861928bbE0Aafb8C634a8DA49E7Df33"

export const ERC1155_Contract="0x3982a3E039a74AAA788BCD0aB2BAff7Bf9478a0A"
export const ERC1155_Supply=500
export const ERC1155_TokenId=0



export const bridgeLink = [
    {
        dappTitle:"Relay",
        dappUrl:"https://testnets.relay.link/abstract",
        dappIcon:""
    },
    {
        dappTitle:"Owlto",
        dappUrl:"",
        dappIcon:""
    },
    {
        dappTitle:"Abstract",
        dappUrl:"https://portal.testnet.abs.xyz/bridge",
        dappIcon:""
    },

]

export const faucetAbstract = [
    {
        dappTitle:"Triangle",
        dappUrl:"https://faucet.triangleplatform.com/abstract/testnet",
        dappIcon:""
    },
    {
        dappTitle:"Alchemy",
        dappUrl:"https://www.alchemy.com/faucets/ethereum-sepolia",
        dappIcon:""
    },
]

export const abstractLink = [
    
    {
        dappTitle:"Website",
        dappUrl:"https://abs.xyz/",
        dappIcon:""
    },
    {
        dappTitle:"X",
        dappUrl:"https://x.com/AbstractChain",
        dappIcon:""
    },
    {
        dappTitle:"Discord",
        dappUrl:"",
        dappIcon:""
    },
    {
        dappTitle:"Telegram",
        dappUrl:"",
        dappIcon:""
    },
    {
        dappTitle:"Gain POINTS",
        dappUrl:"https://abstract.deform.cc/?referral=xdESGSEvVCgY",
        dappIcon:"https://abstract.deform.cc/icons/melty-icon.svg"
    },
    {
        dappTitle:"Docs",
        dappUrl:"https://docs.abs.xyz/overview",
        dappIcon:""
    },
    {
        dappTitle:"Github",
        dappUrl:"",
        dappIcon:""
    },
    {
        dappTitle:"Explorer",
        dappUrl:"https://explorer.testnet.abs.xyz/",
        dappIcon:""
    },
    {
        dappTitle:"Blog",
        dappUrl:"https://abs.xyz/blog",
        dappIcon:""
    },
    {
        dappTitle:"Buiilder Incubator",
        dappUrl:"https://form.typeform.com/to/xAU2pxcD?typeform-source=abstractchain.typeform.com",
        dappIcon:""
    },
]



export const ninjaGallery = [
    {
        ninjaName: "Kaku-shi",
        ninjaSrc: Ninja01,
        ninjaPosition:"Supreme Pixel Shadow",
        ninjaClan:"N0unClan"
    },
    {
        ninjaName: "Hako-maru",
        ninjaSrc: Ninja02,
        ninjaPosition:"Council Elder",
        ninjaClan:"N0unClan"
    },
    {
        ninjaName: "Bitō-kun",
        ninjaSrc: Ninja03,
        ninjaPosition:"Binary Defense Master",
        ninjaClan:"N0unClan"
    },
    {
        ninjaName: "Rasu-teru",
        ninjaSrc: Ninja04,
        ninjaPosition:"Grid Formation Commander",
        ninjaClan:"N0unClan"
    },
    {
        ninjaName: "Kido-shi",
        ninjaSrc: Ninja05,
        ninjaPosition:"Illumination Sage",
        ninjaClan:"N0unClan"
    },
    {
        ninjaName: "Masuku-jin",
        ninjaSrc: Ninja06,
        ninjaPosition:"Infiltration Expert",
        ninjaClan:"N0unClan"
    },
    {
        ninjaName: "Dotto-hime",
        ninjaSrc: Ninja07,
        ninjaPosition:"Royal Technomancer",
        ninjaClan:"N0unClan"
    },
    {
        ninjaName: "Gamen-rō",
        ninjaSrc: Ninja08,
        ninjaPosition:"Dimensional Tactician",
        ninjaClan:"N0unClan"
    },
    {
        ninjaName: "Chippu-ken",
        ninjaSrc: Ninja09,
        ninjaPosition:"Weapon Master",
        ninjaClan:"N0unClan"
    },
    {
        ninjaName: "Rezo-chan",
        ninjaSrc: Ninja10,
        ninjaPosition:" Transformation Specialist",
        ninjaClan:"N0unClan"
    },
]

export const internalLink = [
    {
        clanPage:"Story",
        clanPath:"/"
    },
    {
        clanPage:"Seal",
        clanPath:"/seal"
    },
    {
        clanPage:"Clan",
        clanPath:"/clan"
    }
]