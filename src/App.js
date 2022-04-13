// -- Modules -- //
import React from "react";
import { Routes, Route } from "react-router";

// -- Components -- //
import { Ordenes } from "./components/pages/Ordenes";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Ordenes />} />
      </Routes>
    </div>
  );
};

export default App;
