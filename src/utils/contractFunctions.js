import { getContract } from "./getContract";
import { rpsContract } from "./rpcContract";
// import { ethers } from "ethers";

export const addProduct = async (data) => {
  const contract = await getContract();

  //const options = { value: (0.01 * 10 ** 18).toString() };
  //const options = { value: ethers.utils.parseUnits(price, "ether") };
  //console.log(options);
  console.log(data.prodDetails);
  const transactionResponse = await contract.addProduct(
    data.serialNumber,
    data.name,
    data.manufacturer,
    data.batchNumber,
    data.productType,
    data.prodDetails,
    data.manufacturedDate,
    data.expirationDate
  );

  return transactionResponse;
};

export const getProductInfo = async (data) => {
  const contract = await rpsContract();

  const transactionResponse = await contract.getProductInfo(data);

  return transactionResponse;
};

// to get allDrugs
export const getAllProducts = async () => {
  const contract = await rpsContract();

  const transactionResponse = await contract.getAllProducts();

  return transactionResponse;
};

// get drugs signed by an address
export const getProductsOwnedByAddress = async (data) => {
  const contract = await rpsContract();

  const transactionResponse = await contract.getProductsOwnedByAddress(data);

  return transactionResponse;
};
