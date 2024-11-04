import React from "react";
import image from "./photo.png";

function Home() {
  return (
    <div className="w-full h-screen bg-white mt-10">
      <div className="ml-[12%] w-[80%]  h-[60%] flex translate-y-[10%]">
        <div className="w-[60%] h-full   ">
          <h3 className="text-xl font-semibold">Welcome in my Feed</h3>
          <h1 className="text-2xl font-bold mt-1">
            Hello I'm a Frontend &{" "}
            <span className="text-red-500"> React Developer |</span>
          </h1>
          <p className="mt-5 text-xl font-[20px] leading-6.5">
            Hi there! I’m{" "}
            <span className="font-bold text-2xl">Himanshu Kumar</span>, a React
            Developer with some years of hands-on experience in crafting dynamic
            and high-performance web applications. My passion lies in leveraging
            React’s power to create seamless, interactive user experiences that
            drive business success and user satisfaction.
          </p>
          <p className="mt-10  ">
            My coding journey began at the age of 17 with basic of HTML,CSS and
            JS and that the age I develop my own mine games. At 18, My curiosity
            led to me to explore web development, where I discovered the power
            of the React. In addition to my current skills, I am learning
            Backend with Javascript to prepare for my future Startup.
          </p>
        </div>
        <div className="w-[40%] h-full  flex justify-center items-center ">
          <div className="w-[350px] h-[350px] border-black overflow-hidden  rounded-full mb-[20%] ">
            <img className="" src={image} alt="" />
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold ml-[12%] ">EXPERIANCE :-</h1>
      <div className="ml-[12%] w-[80%]  h-[90%]  flex">
        <div className="w-1/2 h-full ">
          <div className="mt-10 flex flex-wrap gap-14  ">
            <div className="w-[150px] h-[150px] ml-10 ">
              <img
                className="rounded-md"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjl0vEakPtx6iubXI-VLP56s36ZNRp30DEsw&s"
                alt=""
              />
              <h1 className="text-2xl font-semibold ml-[30%]">HTML</h1>
            </div>
            <div className="w-[300px] h-[30px] bg-white ml-5 mt-[10%] rounded overflow-hidden bg-red-200">
              <div className="w-[96%] h-full bg-green-600 text-end text-white text-xl font-bold">
                98%
              </div>
            </div>

            <div className="w-[150px] h-[150px] ml-10 ">
              <img
                className="rounded-md"
                src="https://i.pinimg.com/564x/f5/72/a9/f572a9cb46a1f1f80806208e12706f73.jpg"
                alt=""
              />
              <h1 className="text-2xl font-semibold ml-[35%]">JS</h1>
            </div>
            <div className="w-[300px] h-[30px] bg-white ml-5 mt-[10%] rounded overflow-hidden border-black bg-red-200">
              <div className="w-[80%] h-full bg-green-600 text-end text-white text-xl font-bold">
                80%
              </div>
            </div>

            <div className="w-[150px] h-[150px] ml-10 ">
              <img
                className="rounded-md"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XXoN9fWeptv1CbW9iHlfAMoSyhw0_g0Ziw&s"
                alt=""
              />
              <h1 className="text-xl font-semibold ml-[10%]">GSAP ANIMATION</h1>
            </div>
            <div className="w-[300px] h-[30px] bg-white ml-5 mt-[10%] rounded overflow-hidden border-black bg-red-200">
              <div className="w-[70%] h-full bg-green-600 text-end text-white text-xl font-bold">
                70%
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full ">
          <div className="mt-10 flex  flex-wrap gap-14  ">
            <div className="w-[150px] h-[150px] ml-10 ">
              <img
                className="rounded-md"
                src="https://i.pinimg.com/736x/3f/83/9a/3f839a4a5688116dfb5f9f81eaa8d067.jpg"
                alt=""
              />
              <h1 className="text-2xl font-semibold ml-[30%]">CSS</h1>
            </div>
            <div className="w-[300px] h-[30px] bg-white ml-5 mt-[10%] rounded overflow-hidden border-black bg-red-200">
              <div className="w-[90%] h-full bg-green-600 text-end text-white text-xl font-bold">
                90%
              </div>
            </div>
            <div className="w-[150px] h-[150px] ml-10 ">
              <img
                className="rounded-md"
                src="https://i.pinimg.com/736x/cd/00/4b/cd004b701e51ee32dd3225b910575320.jpg"
                alt=""
              />
              <h1 className="text-xl font-semibold ml-[10%] ">TAILWIND CSS</h1>
            </div>
            <div className="w-[300px] h-[30px] bg-white ml-5 mt-[10%] rounded overflow-hidden border-black bg-red-200">
              <div className="w-[85%] h-full bg-green-600 text-end text-white text-xl font-bold">
                85%
              </div>
            </div>

            <div className="w-[150px] h-[150px] ml-10 ">
              <img
                className="rounded-md"
                src="https://i.pinimg.com/564x/0f/65/58/0f6558f88fb457e68f92c042df252892.jpg"
                alt=""
              />
              <h1 className="text-2xl font-semibold ml-[20%]">REACT JS</h1>
            </div>
            <div className="w-[300px] h-[30px] bg-white ml-5 mt-[10%] rounded overflow-hidden border-black bg-red-200">
              <div className="w-[70%] h-full bg-green-600 text-end text-white text-xl font-bold">
                70%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-32  flex justify-center ">
      <h1 className="text-center text-2xl font-bold mt-5">Now I'm Learnning Backend with (JS) Javascript</h1>
    
      </div>
     
    </div>
  );
}

export default Home;
