import React, { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

// Set worker source for PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const PDFViewer: React.FC = () => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable page scroll while displaying the PDF viewer
    document.body.style.overflow = "hidden";

    const loadingTask = pdfjsLib.getDocument("/comic/miles.pdf");
    loadingTask.promise.then((pdf) => {
      renderAllPages(pdf);
    });

    return () => {
      // Cleanup - re-enable scrolling when leaving the viewer
      document.body.style.overflow = "auto";
    };
  }, []);

  // Function to render all pages
  const renderAllPages = async (pdf: pdfjsLib.PDFDocumentProxy) => {
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      await renderPage(pdf, pageNum);
    }
  };

  const renderPage = async (pdf: pdfjsLib.PDFDocumentProxy, pageNum: number) => {
    const page = await pdf.getPage(pageNum);

    const scale = 1; // Keep scaling consistent with the natural size of the PDF
    const viewport = page.getViewport({ scale });

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    // Render only a single page
    await page.render({
      canvasContext: context,
      viewport,
    }).promise;

    if (canvasContainerRef.current) {
      canvasContainerRef.current.appendChild(canvas);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/comic/miles.pdf";
    link.download = "miles.pdf";
    link.click();
  };

  return (
    <div className="bg-crimson w-screen h-screen flex items-center justify-center relative">
      {/* Static & Fixed Dimensions PDF Viewer */}
      <div
        ref={canvasContainerRef}
        className="overflow-auto w-[] h-[80%] bg-white rounded-lg shadow-lg p-2"
      />

      {/* Download Button */}
      <div className="absolute top-4 right-8 cursor-pointer">
        <button
          className="flex items-center justify-center bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition"
          onClick={handleDownload}
        >
          {/* SVG Download Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-6-6l6 6m0 0l-6 6m6-6H6"
            />
          </svg>
          Download
        </button>
      </div>
    </div>
  );
};

export default PDFViewer;




