

// import React, { useState } from 'react';
// import Navbar from "./components/Navbar"; 
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Register from "./components/Register"; 

// const App = () => {
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [isRegisterOpen, setIsRegisterOpen] = useState(false); 
//   const openLogin = () => setIsLoginOpen(true);
//   const closeLogin = () => setIsLoginOpen(false);
//   const openRegister = () => setIsRegisterOpen(true);
//   const closeRegister = () => setIsRegisterOpen(false);

//   return (
//     <div>
//       <Navbar openLogin={openLogin} openRegister={openRegister} /> 
//       <Home />
//       {isLoginOpen && <Login onClose={closeLogin} />}
//       {isRegisterOpen && <Register onClose={closeRegister} />}
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated import for v6

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import SearchResults from "./components/SearchResults"; // Assuming you have this component

const App = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);
  const openRegister = () => setIsRegisterOpen(true);
  const closeRegister = () => setIsRegisterOpen(false);

  return (
    <Router>
      <Navbar openLogin={openLogin} openRegister={openRegister} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
      {isLoginOpen && <Login onClose={closeLogin} />}
      {isRegisterOpen && <Register onClose={closeRegister} />}
    </Router>
  );
};

export default App;
