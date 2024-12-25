import React, { useState } from "react";
import Button from "./Button";

const Signin = () => {
  const [activeButton, setActiveButton] = useState("SAAS");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 h-screen w-full">
      <div className="hidden bg-white md:flex justify-center items-center">
        <img
          src="./src/assets/card.png"
          alt=""
          className="w-1/2 h-auto hidden md:block" // `hidden md:block` makes it initially hidden then block on medium screens and up
        />
      </div>
      <div className=" p-5 m-auto flex flex-col justify-center items-center">
        <div className="bg-white w-full border border-slate-300 p-8 rounded-lg">
          <div className="p-4 flex text-bold text-2xl uppercase justify-center items-center gap-3">
            <img
              src="./src/assets/codeant_ai_logo.jpg"
              alt="Logo"
              className="h-12"
            />
            <span>Codeant ai</span>
          </div>
          <div className="font-bold text-2xl">Welcome to the codeant ai</div>
          <div className="w-full flex flex-row justify-center items-center mt-4">
            <Button
              onClick={() => handleButtonClick("SAAS")}
              isActive={activeButton === "SAAS"}
              className="w-full font-bold "
            >
              SAAS
            </Button>
            <Button
              onClick={() => handleButtonClick("Self Hosted")}
              isActive={activeButton === "Self Hosted"}
              className="w-full font-bold"
            >
              Self Hosted
            </Button>
          </div>
          <hr />
          {activeButton === "SAAS" && (
            <div>
              <Button className="bg-white  text-black font-semibold border border-slate-300 w-full mt-4 flex flex-row justify-center gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
                Sign in with Github
              </Button>
              <Button className="bg-white  text-black font-semibold border border-slate-300 w-full mt-4 flex flex-row justify-center gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#2196F3"
                    d="M36,32.7L35,39c0,2.2-5.1,4-11,4s-11-1.8-11-4l-1-6.3c-0.1-0.4,0.3-0.8,0.8-0.6C15.8,33.4,20,34,24,34s8.2-0.6,11.2-1.9C35.6,31.9,36.1,32.3,36,32.7z M41,10c0,0.2,0,0.3-0.1,0.5L38,27c0,2.8-6.2,5-13.9,5C16.4,32,10,29.8,10,27L7.1,10.5C7,10.3,7,10.2,7,10c0-2.8,7.6-5,17-5S41,7.2,41,10z M29,23c0-2.8-2.2-5-5-5s-5,2.2-5,5s2.2,5,5,5S29,25.8,29,23z M35.8,10c0-1.7-5.3-3-11.8-3s-11.8,1.3-11.8,3s5.3,3,11.8,3S35.8,11.7,35.8,10z M24,25c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S22.9,25,24,25z"
                  ></path>
                </svg>
                Sign in with Bitbucket
              </Button>
              <Button className="bg-white  text-black font-semibold border border-slate-300 w-full mt-4 flex flex-row justify-center gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#035bda"
                    d="M46 40L29.317 10.852 22.808 23.96 34.267 37.24 13 39.655zM13.092 18.182L2 36.896 11.442 35.947 28.033 5.678z"
                  ></path>
                </svg>
                Sign in with Azure Devops
              </Button>
              <Button className="bg-white  text-black font-semibold border border-slate-300 w-full mt-4 flex flex-row justify-center gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path fill="#e53935" d="M24 43L16 20 32 20z"></path>
                  <path fill="#ff7043" d="M24 43L42 20 32 20z"></path>
                  <path fill="#e53935" d="M37 5L42 20 32 20z"></path>
                  <path fill="#ffa726" d="M24 43L42 20 45 28z"></path>
                  <path fill="#ff7043" d="M24 43L6 20 16 20z"></path>
                  <path fill="#e53935" d="M11 5L6 20 16 20z"></path>
                  <path fill="#ffa726" d="M24 43L6 20 3 28z"></path>
                </svg>
                Sign in with Gitlab
              </Button>
            </div>
          )}
          {activeButton === "Self Hosted" && (
            <div>
              <Button className="bg-white  text-black font-semibold border border-slate-300 w-full mt-4 flex flex-row justify-center gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path fill="#e53935" d="M24 43L16 20 32 20z"></path>
                  <path fill="#ff7043" d="M24 43L42 20 32 20z"></path>
                  <path fill="#e53935" d="M37 5L42 20 32 20z"></path>
                  <path fill="#ffa726" d="M24 43L42 20 45 28z"></path>
                  <path fill="#ff7043" d="M24 43L6 20 16 20z"></path>
                  <path fill="#e53935" d="M11 5L6 20 16 20z"></path>
                  <path fill="#ffa726" d="M24 43L6 20 3 28z"></path>
                </svg>
                Sign in with Gitlab
              </Button>
              <Button className="bg-white  text-black font-semibold border border-slate-300 w-full mt-4 flex flex-row justify-center gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path d="M 30 5 C 22.838262 5 17 10.838262 17 18 C 17 18.882345 17.182742 19.703331 17.351562 20.527344 L 5.4394531 32.439453 A 1.50015 1.50015 0 0 0 5 33.5 L 5 41.5 A 1.50015 1.50015 0 0 0 6.5 43 L 14.5 43 A 1.50015 1.50015 0 0 0 16 41.5 L 16 39 L 19.5 39 A 1.50015 1.50015 0 0 0 21 37.5 L 21 34 L 24.5 34 A 1.50015 1.50015 0 0 0 26 32.5 L 26 30.294922 C 27.271145 30.709396 28.595703 31 30 31 C 37.161738 31 43 25.161738 43 18 C 43 10.838262 37.161738 5 30 5 z M 30 8 C 35.540262 8 40 12.459738 40 18 C 40 23.540262 35.540262 28 30 28 C 28.262518 28 26.639202 27.56058 25.21875 26.785156 A 1.50015 1.50015 0 0 0 23 28.101562 L 23 31 L 19.5 31 A 1.50015 1.50015 0 0 0 18 32.5 L 18 36 L 14.5 36 A 1.50015 1.50015 0 0 0 13 37.5 L 13 40 L 8 40 L 8 34.121094 L 19.988281 22.132812 A 1.50015 1.50015 0 0 0 20.373047 20.669922 C 20.133878 19.809089 20 18.919659 20 18 C 20 12.459738 24.459738 8 30 8 z M 32 13 A 3 3 0 0 0 32 19 A 3 3 0 0 0 32 13 z"></path>
                </svg>
                Sign in with SSO
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signin;
