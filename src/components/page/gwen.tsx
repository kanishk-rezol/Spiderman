import React, { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import name from "@/images/name.png";
import logo from "@/images/logo.png";
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const downloadFile = (filePath: string, fileName: string) => {
  fetch(filePath)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.blob();
    })
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    })
    .catch((error) => console.error("File download failed:", error));
};

const Gwen: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false);

  const desktopCanvasContainerRef = useRef<HTMLDivElement>(null);
  const mobileCanvasContainerRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setShowOptions((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const loadingTask = pdfjsLib.getDocument("/comic/gwen.pdf");

    loadingTask.promise
      .then((pdf) => {
        renderAllPages(pdf, desktopCanvasContainerRef);
        renderAllPages(pdf, mobileCanvasContainerRef);
      })
      .catch((error) => console.error("Error loading PDF:", error));

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const renderAllPages = async (pdf: pdfjsLib.PDFDocumentProxy, containerRef: React.RefObject<HTMLDivElement>) => {
    if (containerRef.current) {
      // Clear previous canvases
      containerRef.current.innerHTML = "";
    }

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      await renderPage(pdf, pageNum, containerRef);
    }
  };

  const renderPage = async (
    pdf: pdfjsLib.PDFDocumentProxy,
    pageNum: number,
    containerRef: React.RefObject<HTMLDivElement>
  ) => {
    const page = await pdf.getPage(pageNum);
    const scale = 1;
    const viewport = page.getViewport({ scale });

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    try {
      await page.render({
        canvasContext: context,
        viewport,
      }).promise;
      if (containerRef.current) {
        containerRef.current.appendChild(canvas);
      }
    } catch (error) {
      console.error(`Failed rendering page ${pageNum}:`, error);
    }
  };

  const handlePDFDownload = () => {
    const link = document.createElement("a");
    link.href = "/comic/gwen.pdf";
    link.download = "gwen.pdf";
    link.click();
  };

  return (
    <div className="bg-crimson w-screen h-screen flex items-center justify-center relative overflow-auto">
      <img src={name} className="absolute w-[80px] top-2 left-4 z-10" alt="Name" />
      <img src={logo} className="absolute w-[50px] top-4 left-1/2 transform -translate-x-1/2 z-10" alt="Logo" />

      
  {/* Model Viewer Section  desktop */}
  <div className="hidden md:block absolute left-6 mt-6 w-2/3 h-4/5 p-4 bg-white shadow-lg border rounded-lg overflow-hidden">
            <model-viewer
            src="/model/gwen.glb"
            alt="Gwen Model"
            camera-controls
            auto-rotate
            style={{ width: "100%", height: "100%" }}
            className="w-full h-full"
            />
        </div>

        {/* Model Download Options */}

        <h1 className="absolute bottom-[2.3%] left-[37%] text-2xl">Model Download:</h1>
        <div className="absolute bottom-[2%] left-[50%]">
            <button
            className=" hidden md:block px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            onClick={toggleDropdown}
            >
            Download
            </button>

            {showOptions && (
            <div className="absolute mt-2 bg-white shadow-md rounded-lg w-48 z-10">
                <div
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                    downloadFile("/model/miles.glb", "miles.glb");
                    toggleDropdown();
                }}
                >
                Download GLB
                </div>
                <div
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                    downloadFile("/model/miles.gltf", "miles.gltf");
                    toggleDropdown();
                }}
                >
                Download GLTF
                </div>
                <div
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                    downloadFile("/model/miles.obj", "miles.obj");
                    toggleDropdown();
                }}
                >
                Download OBJ
                </div>
            </div>
            )}
        </div>




        {/* Model Viewer Section */}
        <div className="block md:hidden absolute left-12 mt-6 w-5/6 h-4/5 p-4 bg-white shadow-lg border rounded-lg overflow-hidden">
            <model-viewer
            src="/model/gwen.glb"
            alt="Miles Morales Model"
            camera-controls
            auto-rotate
            style={{ width: "100%", height: "100%" }}
            className="w-full h-full"
            />
        </div>
        {/* Model Download Options mobile */}

        <h1 className="absolute bottom-[2.3%] left-[37%] text-2xl">Model Download:</h1>
        <div className="block md:hidden absolute top-[930px] left-[45%]">
            <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            onClick={toggleDropdown}
            >
            Download
            </button>

            {showOptions && (
            <div className="absolute mt-2 bg-white shadow-md rounded-lg w-48 z-10">
                <div
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                    downloadFile("/model/miles.glb", "miles.glb");
                    toggleDropdown();
                }}
                >
                Download GLB
                </div>
                <div
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                    downloadFile("/model/miles.gltf", "miles.gltf");
                    toggleDropdown();
                }}
                >
                Download GLTF
                </div>
                <div
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                    downloadFile("/model/miles.obj", "miles.obj");
                    toggleDropdown();
                }}
                >
                Download OBJ
                </div>
            </div>
            )}
        </div>


        


      {/* Desktop PDF Viewer Section */}
      <div className="hidden md:block">
        <h1 className="absolute top-[11%] right-[15%] text-3xl font-Combo bg">Comic</h1>
        <div className="absolute top-[17%] right-[2%] w-[27%] h-[70%] bg-white shadow-lg rounded-lg overflow-x-hidden">
          <div ref={desktopCanvasContainerRef} className="absolute right-12 w-full h-full" />
        </div>
        {/* PDF Download Button */}
        <div className="hidden md:block absolute bottom-[5%] right-8 cursor-pointer">
          <button
            className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition"
            onClick={handlePDFDownload}
          >
            Download PDF
          </button>
        </div>
      </div>

      {/* Mobile PDF Viewer Section */}
      <div className="block md:hidden">
        <h1 className="absolute top-[1020px] right-[45%] text-3xl font-Combo bg">Comic</h1>
        <div className="absolute top-[1080px] right-[10%] w-[80%] h-[70%] bg-white shadow-lg rounded-lg overflow-x-hidden">
          <div ref={mobileCanvasContainerRef} className="absolute right-12 w-full h-full" />
        </div>
        {/* Mobile PDF Download Button */}
        <div className="block md:hidden absolute top-[1750px] right-[35%] cursor-pointer">
          <button
            className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition"
            onClick={handlePDFDownload}
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gwen;
