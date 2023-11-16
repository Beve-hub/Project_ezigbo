import React, { useState } from "react";

const Register = (props) => {
  const [buName, setBuName] = useState("");
  const [pass, setPass] = useState("");
  const [fuName, setFuName] = useState("");
  const [buAdd, setBuAdd] = useState("");
  const [phNum, setPhNum] = useState("");
  const [email, setEmail] = useState("");
  const [CAC, setCAC] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='grid justify-center text-center gap-6 mt-[10rem] sm:ml-[6.5rem]'>
      <h1 className="font-bold text-2xl">Let Us Know You!</h1>
      <form onSubmit={handleSubmit}>
        <div className="w-[20rem] grid gap-3">
          <input
            type="text"
            value={buName}
            onChange={(e) => setBuName(e.target.value)}
            placeholder="BusinessName"
            className="block w-full bg-slate-200 pl-4 border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <input
            type="text"
            value={fuName}
            onChange={(e) => setFuName(e.target.value)}
            placeholder="Full Name"
            className="block w-full bg-slate-200 pl-4 border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="block w-full bg-slate-200 pl-4 border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

           <input
            type="text"
            value={buAdd}
            onChange={(e) => setBuAdd(e.target.value)}
            placeholder="Business Address"
            className="block w-full bg-slate-200 pl-4 border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div className="flex items-center gap-2">
          <input
            type="text"
            value={CAC}
            onChange={(e) => setCAC(e.target.value)}
            placeholder="CAC Number"
            className="block w-full bg-slate-200 pl-4 border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <input
            type="email"
            value={phNum}
            onChange={(e) => setPhNum(e.target.value)}
            placeholder="Phone Number"
            className="block w-full bg-slate-200 pl-4 border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          </div>

          
         
          
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password"
            className="block w-full bg-slate-200 pl-4 border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="grid gap-2 pt-10">
          <button
            type="submit"
            className="bg-[--btn-color] w-full p-2 text-white font-semibold"
          >
            {" "}
            Register
          </button>
          <p className="text-sm ">
            Already have an account ?{" "}
            <span
              onClick={() => props.onFormSwitch("Login")}
              className="font-semibold cursor-pointer text-blue"
            >
              Login
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
