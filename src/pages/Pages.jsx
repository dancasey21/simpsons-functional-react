import React from "react";
import { Route, Routes } from "react-router-dom";

import Bart from "./Bart";
import Homer from "./Homer";
import Lisa from "./Lisa";
import Marge from "./Marge";

const Pages = () => {
  return (
    <Routes>
      <Route path="bart" element={<Bart />} />
      <Route path="homer" element={<Homer />} />
      <Route path="lisa" element={<Lisa />} />
      <Route path="marge" element={<Marge />} />
    </Routes>
  );
};

export default Pages;
