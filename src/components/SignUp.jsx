import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import GoogleIcon from "@mui/icons-material/Google";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleGoogleSignIn = () => {
    setShowModal(true); // Open modal
  };

  const closeModal = () => {
    setShowModal(false); // Close modal
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const selectGoogleAccount = (account) => {
    console.log(`Selected Google account: ${account}`);
    setShowModal(false); // Close mdal after selection
  };

  return (
    <div className="min-h-96 flex flex-col items-center justify-center ">
      <div className="bg-secondary shadow-lg rounded-lg p-8 w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-gray-300 mb-6 text-center">
          Sign Up to VisionTube
        </h1>

        {/* Email Input */}
        <Input
          label={"Email :"}
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />

        {/* Sign Up with Google */}
        <Button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center"
        >
          {" "}
          <GoogleIcon /> <span className="ml-2">Sign up with google</span>
        </Button>
      </div>

      {/* Google Account Selection Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center">
          <div className="bg-secondary rounded-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              Choose a Google Account
            </h2>
            <ul className="space-y-4">
              <li
                className="p-3 border rounded-md shadow-sm hover:bg-primary cursor-pointer"
                onClick={() => selectGoogleAccount("user1@gmail.com")}
              >
                user1@gmail.com
              </li>
              <li
                className="p-3 border rounded-md shadow-sm hover:bg-primary cursor-pointer"
                onClick={() => selectGoogleAccount("user2@gmail.com")}
              >
                user2@gmail.com
              </li>
              <li
                className="p-3 border rounded-md shadow-sm hover:bg-primary hover:text-gray-100 cursor-pointer"
                onClick={() => selectGoogleAccount("user3@gmail.com")}
              >
                user3@gmail.com
              </li>
            </ul>
            <Button
              className=" mt-6 w-full"
              onClick={closeModal}
              color="primary"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
