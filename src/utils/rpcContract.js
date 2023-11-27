import { ethers } from "ethers";
import contractAbi from "./abi1.json";

export const rpsContract = async function () {
  const CONTRACT_ADDRESS = "0x9b2d82c74dfa8cc60f1965500015b68253d7a41b";
  const RPC_URL = "https://testnet.toronet.org/rpc/"; // Replace with your Ethereum node's RPC URL

  const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

  // If you need to interact as a wallet holder
  // const privateKey = "YOUR_PRIVATE_KEY"; // Add your private key
  // const wallet = new ethers.Wallet(privateKey, provider);

  const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    contractAbi,
    provider
    // If interacting as a wallet holder, use 'wallet' instead of 'provider' above
  );

  return contract;
};
