import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    //const url = "http://localhost:8080/api/users/login";
    const url = "https://ezigboapi.onrender.com/api/users/login";

    const postData = {
      email: email,
      password: pass,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify content type as JSON
        // Add any other headers if needed
      },
      body: JSON.stringify(postData), // Convert the data to JSON string
    };

    let loading = toast.loading("loading");
    // Make the POST request
    fetch(url, requestOptions)
      .then((response) => {
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        // Handle the response data
        console.log("Response:", data);
        if (data.status == 201) {
          toast.update(loading, {
            render: `${data.message}`,
            type: "success",
            isLoading: false,
            autoClose: 3000, // Optional: Close the toast after 3 seconds
          });

          navigate("/Product");
        } else
          toast.update(loading, {
            render: `${data.message}`,
            type: "error",
            isLoading: false,
            autoClose: 3000, // Optional: Close the toast after 3 seconds
          });
      })
      .catch((error) => {
        // Handle errors
        toast.update(loading, {
          render: `There was an error, Try again`,
          type: "error",
          isLoading: false,
          autoClose: 3000, // Optional: Close the toast after 3 seconds
        });
        console.error("Error:", error);
      });
  };

  return (
    <div className="grid justify-center text-center gap-6 mt-[10rem] sm:ml-[6.5rem]">
      <h1 className="font-bold text-2xl">Welcome Back</h1>
      <form onSubmit={handleSubmit}>
        <div className="w-[20rem] grid gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="block w-full bg-slate-200 pl-4 border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password"
            className="block w-full bg-slate-200 pl-4 border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div className="flex justify-between">
            <div className="flex items-center">
              <input type="checkbox" />
              <p className="text-sm">Remember me </p>
            </div>
            <p className="text-sm">Forgotten Password?</p>
          </div>
        </div>

        <div className="grid gap-2 pt-4">
          <button
            type="submit"
            className="bg-[--btn-color] w-full p-2 text-white font-semibold"
          >
            {" "}
            Login
          </button>
          <p className="text-sm ">
            Don’t have an account ?{" "}
            <span
              onClick={() => props.onFormSwitch("Register")}
              className="cursor-pointer font-semibold text-blue"
            >
              Register
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
