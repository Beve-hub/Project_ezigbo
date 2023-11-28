import React, { useState, useRef } from "react";
// import Webcam from "react-webcam";
// import QrReader from "react-qr-scanner";
import Html5QrcodePlugin from "../Features/QrCodePLugin";
import { LuSwitchCamera } from "react-icons/lu";
import { toast } from "react-toastify";
import { getProductInfo } from "../utils/contractFunctions";

const WebcamScanner = ({ isVisible, onClose }) => {
  const webcamRef = useRef(null);
  const [facingMode, setFacingMode] = useState("user"); // Step 1: State variable for retry
  const [result, setResult] = useState("");

  if (!isVisible) return null;

  const videoConstraints = {
    width: 250,
    height: 200,
    facingMode: facingMode,
  };

  const switchCamera = () => {
    setFacingMode((prevFacingMode) =>
      prevFacingMode === "user" ? "environment" : "user"
    );
  };

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const successScan = async (decodedText, decodedResult) => {
    if (result) {
      onNewScanResult(decodedText, decodedResult);
    }
    onClose();
  };
  const onNewScanResult = async (decodedText, decodedResult) => {
    setResult(decodedText);
    let SN = Number(decodedText);
    let loading = toast.loading("loading");
    const drugInfo = await getProductInfo(SN);
    if (drugInfo) {
      const options = { day: "numeric", month: "short", year: "numeric" };
      let manDate = new Date(Number(drugInfo[5])).toLocaleDateString(
        "en-US",
        options
      );
      let expDate = new Date(Number(drugInfo[6])).toLocaleDateString(
        "en-US",
        options
      );
      toast.update(loading, {
        render: `Product is original

        Details:
        Company Name: ${drugInfo[1]},
        Product Name: ${drugInfo[0]},
        Manufactured Date: ${manDate},
        Expiration Date: ${expDate}`,
        type: "success",
        isLoading: false,
        autoClose: 3000, // Optional: Close the toast after 3 seconds
      });
    }
    return;
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm  flex justify-center items-center">
      <div>
        <div className="bg-white p-8 rounded-md grid gap-6 ">
          <>
            <p className="w-[20rem] text-sm text-[#828282]">
              Place barcode inside the frame to scan. Please keep your device
              steady when scanning to ensure accurate results.
            </p>

            <div className="ml-[3rem] w-[15rem] py-10 px-0  grid justify-center items-center bg-[#c1c1c1] rounded-lg ">
              <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={successScan}
              />
              {/* <Webcam
                audio={false}
                height={200}
                screenshotFormat="image/jpeg/png"
                width={250}
                ref={webcamRef}
                videoConstraints={videoConstraints}
              ></Webcam> */}

              <p>{result}</p>
            </div>
          </>

          <div className="flex items-center justify-center gap-[2rem]">
            <button
              onClick={onClose}
              className="grid w-[2rem] h-[2rem]  items-center justify-center bg-[--btn-color]  py-2  px-2 rounded-full  text-white font-medium "
            >
              X
            </button>

            <button
              onClick={switchCamera}
              className="grid w-[2rem] h-[2rem]  items-center justify-center bg-transparent  py-2  px-2 rounded-full border-2 border-[--btn-color] text-[--btn-color] font-medium "
            >
              <LuSwitchCamera />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebcamScanner;
