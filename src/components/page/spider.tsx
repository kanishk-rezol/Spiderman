import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Spline from "@splinetool/react-spline";
import name from "@/images/name.png";
import logo from "@/images/logo.png";

const Spider: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div style={{ backgroundColor: "#a9000c", minHeight: "100vh", position: "relative" }}>
      <Helmet>
        {/* Preload Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inspiration&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Header Images */}
      <img src={name} className="absolute w-[80px] top-2 left-4 z-10" alt="Name" />
      <img src={logo} className="absolute w-[50px] top-4 left-1/2 transform -translate-x-1/2 z-10" alt="Logo" />

      {/* Spline Viewer */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="absolute top-0 w-full h-[800px]">
          <Spline scene="https://prod.spline.design/gp1HLdMavlL0GV6e/scene.splinecode" style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
      <div className="hidden lg:block absolute border-none bg-crimson h-16 w-60 bottom-[55%] left-[86.8%]"></div>
      <div className="block lg:hidden absolute border-none bg-crimson h-20 w-[259px] bottom-[74.5%] left-[35%]"></div>

      {/* Video Containers */}
      <div className="flex flex-col items-center justify-center space-y-16 overflow-hidden">
        <div className="flex flex-wrap justify-center gap-24">
          {/* First Video Container */}
          <a href="/miles" className="relative w-full sm:w-64 h-96 border-none shadow-lg px-4 py-2 bg-t hover:scale-110 transition-transform duration-300 group">
            <div className="relative w-full h-full">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300"
                src="/video/miles.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                onMouseEnter={() => setIsMuted(false)}
                onMouseLeave={() => setIsMuted(true)}
              ></video>
              <div className="absolute top-16 left-0 w-full h-full flex flex-col items-center justify-center z-10 group-hover:opacity-0 transition-opacity duration-300">
                <h1 className="w-full text-maliesred mt-36 text-6xl h-28 bg-gray-500 bg-opacity-25 mb-4 font-inspiration font-bold">Miles</h1>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-5"></div>
            </div>
          </a>

          {/* Second Video Container */}
          <a href="/gwen" className="relative w-full sm:w-64 h-96 border-none shadow-lg px-4 py-2 bg-t hover:scale-110 transition-transform duration-300 group">
            <div className="relative w-full h-full">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300"
                src="/video/Gwen.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                onMouseEnter={() => setIsMuted(false)}
                onMouseLeave={() => setIsMuted(true)}
              ></video>
              <div className="absolute top-16 left-0 w-full h-full flex flex-col items-center justify-center z-10 group-hover:opacity-0 transition-opacity duration-300">
                <h1 className="w-full text-gwen font-inspiration font-bold mt-36 text-6xl h-28 bg-gray-100 bg-opacity-25 mb-4">Gwen</h1>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-5"></div>
            </div>
          </a>

          {/* Third Video Container */}
          <a href="/peter" className="relative w-full sm:w-64 h-96 border-none shadow-lg px-4 py-2 bg-t hover:scale-110 transition-transform duration-300 group">
            <div className="relative w-full h-full">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300"
                src="/video/peter.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                onMouseEnter={() => setIsMuted(false)}
                onMouseLeave={() => setIsMuted(true)}
              ></video>
              <div className="absolute top-16 left-0 w-full h-full flex flex-col items-center justify-center z-10 group-hover:opacity-0 transition-opacity duration-300">
                <h1 className="w-full text-peter font-bold font-mrBedfort mt-36 text-3xl h-28 bg-gray-100 bg-opacity-25 mb-4">Peter Parker</h1>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-5"></div>
            </div>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-24 w-[max]">
          {/* Fourth Video Container */}
          <a href="/pavitr" className="relative w-full sm:w-64 h-96 border-none shadow-lg px-4 py-2 bg-t hover:scale-110 transition-transform duration-300 group">
            <div className="relative w-full h-full">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300"
                src="/video/Pavtirprabhakar.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                onMouseEnter={() => setIsMuted(false)}
                onMouseLeave={() => setIsMuted(true)}
              ></video>
              <div className="absolute top-16 left-0 w-full h-full flex flex-col items-center justify-center z-10 group-hover:opacity-0 transition-opacity duration-300">
                <h1 className="w-full text-pavitrprabhakar font-rugeBoogie mt-36 text-4xl h-28 bg-gray-100 bg-opacity-25 mb-4">Pavtir Prabhakar</h1>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-5"></div>
            </div>
          </a>

          {/* Fifth Video Container */}
          <a href="/welcome" className="relative w-full sm:w-64 h-96 border-none shadow-lg px-4 py-2 bg-t hover:scale-110 transition-transform duration-300 group">
            <div className="relative w-full h-full">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300"
                src="/video/MiguelOHara.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                onMouseEnter={() => setIsMuted(false)}
                onMouseLeave={() => setIsMuted(true)}
              ></video>
              <div className="absolute top-16 left-0 w-full h-full flex flex-col items-center justify-center z-10 group-hover:opacity-0 transition-opacity duration-300">
                <h1 className="w-full text-black font-Combo mt-36 text-3xl h-28 bg-gray-100 bg-opacity-25 mb-4">Miguel O'Hara</h1>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-5"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Spider;
