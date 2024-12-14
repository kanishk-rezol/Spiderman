import React, { useEffect, useRef, useState } from "react";
const Addon: React.FC = () => {
    
    return(
        <div>
            <div className=" justify-center ">
            <div className="hidden md:block absolute left-6 mt-6 w-2/3 h-4/5 p-4 bg-white shadow-lg border rounded-lg overflow-hidden">
        <model-viewer
          src="/model/peter.glb"
          alt="Miles Morales Model"
          camera-controls
          auto-rotate
          style={{ width: "100%", height: "100%" }}
          className="w-full h-full"
        />
      </div>
            </div>

        </div>
    );
}
export default Addon;