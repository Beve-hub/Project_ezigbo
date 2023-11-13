import React, { useState, useEffect } from "react";
import Logo from "../Asset/Logo.png";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import ICON1 from "../Asset/metamask-icon.png";
import ICON2 from "../Asset/coinbase-logo 1.png";
import ICON3 from "../Asset/wallet-connect-logo 1.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [account, setAccount] = useState(null);

  const formatAddress = (address) => {
    if (address) {
      const start = address.substring(0, 6);
      const end = address.substring(address.length - 4);
      return `${start}....${end}`;
    }
    return "";
  };

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        // Request account access
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        // Set the current account
        setAccount(accounts[0]);
      } else {
        console.error("MetaMask not detected");
      }
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  useEffect(() => {
    // Check if the user is already connected to MetaMask
    const checkAccount = async () => {
      try {
        if (window.ethereum) {
          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          });

          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        }
      } catch (error) {
        console.error("Error checking account:", error);
      }
    };

    checkAccount();
  }, []);

  return (
    <div className=" fixed w-full h-[6rem] bg-[#ffffff] px-10 flex items-center justify-between">
      <div className="w-[3rem] flex items-center gap-1">
        <img src={Logo} alt="/" />
        <h1 className="fonts-bold ">EZIGBO</h1>
      </div>
      <div className="flex gap-8">
        <div className="grid text-white">
          <div>
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="font-semibold bg-[--btn-color] px-4 py-2 rounded-xl flex items-center sm:text-sm"
            >
              {account ? `${formatAddress(account)}` : "Connect Wallet"}
              {!open ? (
                <RiArrowDropUpLine size={30} />
              ) : (
                <RiArrowDropDownLine size={30} />
              )}
            </button>
          </div>
          {open && (
            <div className="absolute mt-14 rounded-lg bg-[--primary-color] grid items-center p-3 border-2 border-[green]">
              <ul className="grip items-center cursor-pointer ">
                <li
                  className="flex items-center gap-2 text-white py-4 hover:bg-gray-800 rounded-lg"
                  onClick={connectWallet}
                >
                  <img src={ICON1} alt="icon_img" className="w-[20px]" />
                  Metamask
                </li>
                <li className="flex items-center gap-2 text-white py-4 hover:bg-gray-800 rounded-lg">
                  <img src={ICON2} alt="icon_img" className="w-[20px]" />
                  Coinbase
                </li>
                <li className="flex items-center gap-2 text-white py-4 hover:bg-gray-800 rounded-lg">
                  <img src={ICON3} alt="icon_img" className="w-[20px]" />
                  Wallet-connect
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
