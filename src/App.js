// -- Modules -- //
import React from "react";
import { Routes, Route } from "react-router";

// -- Components -- //
import { Ordenes } from "./components/pages/Ordenes";
import { Menu } from "./components/pages/Menu";
import { NuevoPlatillo } from "./components/pages/NuevoPlatillo";
import { Sidebar } from "./components/ui/Sidebar";

const App = () => {
  return (
    <div className="md:flex min-h-screen">
      <Sidebar />
      <div className="md:w-3/5 xl:w-4/5">
        <Routes>
          <Route path="/" element={<Ordenes />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/nuevo-platillo" element={<NuevoPlatillo />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
