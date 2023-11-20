import { ethers } from "ethers";
import contractAbi from "./abi1.json";
// declare var window: any;

export const getContract = async () => {
  const CONTRACT_ADDRESS = "0x9b2d82c74dfa8cc60f1965500015b68253d7a41b";
  // 0x2C4Ca73659a6AcfC0c43fa5a8b8eC33ed29aE5b9

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const provider = new ethers.providers.JsonRpcProvider(
  //   "https://alfajores-forno.celo-testnet.org"
  // );

  const signer = await provider.getSigner();

  const contract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi, signer);

  return contract;
};
