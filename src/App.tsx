import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RippleDemo from "@/components/RippleDemo";
import SpiderPage from "@/components/page/spider";
import Miles from "@/components/page/miles"; 
import Gwen from "@/components/page/gwen"
import Peter from "@/components/page/peter"
import Addons from "@/components/page/addon"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RippleDemo />} />
        <Route path="/spider" element={<SpiderPage />} /> 
        <Route path="/miles" element={<Miles />} /> 
        <Route path="/gwen" element={<Gwen />} /> 
        <Route path="/peter" element={<Peter />} /> 
        <Route path="/add" element={<Addons/>}/>
      </Routes>
    </Router>
  );
}

export default App;









// import React from "react";
// import Miles from "@/components/page/gwen"

// function App() {
//   return (
//     <div className="min-h-screen bg-crimson">
//       <Miles />
//     </div>
//   );
// }

// export default App;







// import React from 'react';
// import PDFReader from "@/components/page/pdf"

// function App() {
//   return (
//     <div>
//       <PDFReader />
//     </div>
//   );
// }

// export default App;
