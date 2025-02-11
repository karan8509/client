import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import UserDetails from "./Component/userDetails";
import Create from "./Component/Create";
import UserUpdata from "./Component/UserUpdata";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserDetails />} />
        <Route path="/create" element={<Create />} />
        <Route path="/updata/:id" element={<UserUpdata />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
