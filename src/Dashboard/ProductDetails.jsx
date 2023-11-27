import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { addProduct } from "../utils/contractFunctions";
import { toast } from "react-toastify";
import QRCode from "qrcode.react";
import Navbar from "../componet/Navbar";

const getEthereumObject = () => window.ethereum;
const convertToepochTime = (date) => {
  // Get the date from the date picker or input
  let selectedDate = new Date(date); // Replace this with your selected date from the date picker
  // Convert the selected date to epoch time (in milliseconds)
  let epochTime = selectedDate.getTime();
  return epochTime;
};

const findMetaMaskAccount = async () => {
  try {
    const ethereum = getEthereumObject();

    if (!ethereum) {
      console.error("Make sure you have Metamask!");
      alert("get metamask account");
      return null;
    }

    console.log("We have the Ethereum object", ethereum);
    const accounts = await ethereum.request({
      method: "eth_accounts",
    });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      return account;
    } else {
      console.error("No authorized account found");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

const ProductDetails = () => {
  const [poName, setPoName] = useState("");
  const [poType, setPoType] = useState("");
  const [manName, setManName] = useState("");
  const [snNum, setSnNum] = useState("");
  const [bNum, setBNum] = useState("");
  const [maDate, setMaDate] = useState();
  const [expNum, setExpNum] = useState();
  const [PoCont, setPoCont] = useState("");
  const [wallet, setWallet] = useState("");
  const [showQR, setShowQR] = useState(false);
  const qrCanvasRef = useRef(null);
  const { state } = useLocation();
  console.log(state);

  const generateQRCode = () => {
    setShowQR(true);
  };

  // const handleQRCodeRender = (canvas) => {
  //   if (canvas !== null) {
  //     qrCanvasRef.current = canvas;
  //     setShowQR(true); // Set showQR to true when the QR code is rendered
  //   }
  // };

  const downloadQRCode = () => {
    const canvas = qrCanvasRef.current.querySelector("canvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "QRCode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      serialNumber: snNum,
      name: poName,
      manufacturer: manName,
      batchNumber: bNum,
      manufacturedDate: convertToepochTime(maDate),
      expirationDate: convertToepochTime(expNum),
      prodDetails: PoCont,
      productType: poType,
    };
    console.log(data);

    let loading = toast.loading("loading");
    const response = await addProduct(data);
    console.log(response);
    if (response) {
      toast.update(loading, {
        render: `${response.hash}`,
        type: "success",
        isLoading: false,
        autoClose: 3000, // Optional: Close the toast after 3 seconds
      });

      generateQRCode();
    }
    // store the hash on the database

    // Clear the input field value after form submission
    document.getElementById("poName").value = "";
    document.getElementById("poType").value = "";
    // document.getElementById("snNum").value = "";
    document.getElementById("bNum").value = "";
    document.getElementById("maDate").value = "";
    document.getElementById("expNum").value = "";
    document.getElementById("PoCont").value = "";
  };

  useEffect(() => {
    const findAccount = async () => {
      const account = await findMetaMaskAccount();
      if (account !== null) {
        setWallet(account);
      }
    };

    const checkManufacturer = async () => {
      if (state) {
        setManName(state);
      }
    };

    findAccount();
    checkManufacturer();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="grid justify-center text-center gap-6 pt-[7rem] sm:ml-[6.5rem]">
        <h1 className="font-bold text-2xl text-white">Product Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="w-[30rem] grid gap-3">
            <div className="gird text-start ">
              <label for="poName" className=" text-white ">
                Product Name
              </label>
              <input
                type="text"
                name="poName"
                id="poName"
                value={poName}
                onChange={(e) => setPoName(e.target.value)}
                required
                placeholder="Enter Product Name"
                className="mt-2 block w-full bg-slate-200 pl-4 border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="gird text-start ">
              <label for="poType" className=" text-white ">
                Product Type
              </label>
              <input
                type="text"
                name="poType"
                id="poType"
                value={poType}
                onChange={(e) => setPoType(e.target.value)}
                required
                placeholder="Enter product Type"
                className="mt-2 block w-full bg-slate-200 pl-4 border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="gird text-start ">
              <label for="snNum" className=" text-white ">
                Serial Number
              </label>
              <input
                type="text"
                name="snNum"
                id="snNum"
                value={snNum}
                onChange={(e) => setSnNum(e.target.value)}
                required
                placeholder="Enter Product Serial Number"
                className="mt-2 block w-full bg-slate-200 pl-4 border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="gird text-start ">
              <label for="bNum" className=" text-white ">
                Batch Number
              </label>
              <input
                type="text"
                name="bNum"
                id="bNum"
                value={bNum}
                onChange={(e) => setBNum(e.target.value)}
                required
                placeholder="Enter Product Batch Number"
                className="mt-2 block w-full bg-slate-200 pl-4 border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="flex gap-4">
              <div className="gird text-start ">
                <label for="maDate" className=" text-white ">
                  Manufacturing Date
                </label>
                <input
                  type="date"
                  name="maDate"
                  id="maDate"
                  value={maDate}
                  onChange={(e) => setMaDate(e.target.value)}
                  required
                  placeholder="MM/YY"
                  className="mt-2 block w-[13rem] bg-slate-200 pl-4 border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="gird text-start ">
                <label for="expNum" className=" text-white ">
                  Expiry Date
                </label>
                <input
                  type="date"
                  name="expNum"
                  id="expNum"
                  value={expNum}
                  onChange={(e) => setExpNum(e.target.value)}
                  required
                  placeholder="MM/YY"
                  className="mt-2 block w-[16rem] bg-slate-200 pl-4 border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="gird text-start ">
              <label for="PoCont" className=" text-white ">
                Product Content
              </label>
              <textarea
                type="text"
                name="PoCont"
                id="PoCont"
                value={PoCont}
                onChange={(e) => setPoCont(e.target.value)}
                required
                placeholder="Describe content"
                className="mt-2 block w-full bg-slate-200 pl-4 border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="grid gap-2 pt-8">
            <button
              type="submit"
              className="bg-[#FF9900] w-full p-2 text-white font-semibold"
            >
              {" "}
              Submit
            </button>
          </div>
        </form>
        {showQR && (
          <div className="mt-4">
            <QRCode value={snNum} ref={qrCanvasRef} id="qrCode" />
            <button
              onClick={downloadQRCode}
              className="mt-2 bg-[#FF9900] w-half p-2 text-white font-semibold"
            >
              Download QR Code
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
