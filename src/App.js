// -- Modules -- //
import React from "react";
import { Routes, Route } from "react-router";

// -- Firebase -- //
import fb, { FirebaseContext } from "./firebase/index";

// -- Components -- //
import { Ordenes } from "./components/pages/Ordenes";
import { Menu } from "./components/pages/Menu";
import { NuevoPlatillo } from "./components/pages/NuevoPlatillo";
import { Sidebar } from "./components/ui/Sidebar";

const App = () => {
  return (
    <FirebaseContext.Provider
      value={{
        fb,
      }}
    >
      <div className="md:flex min-h-screen">
        <Sidebar />
        <div className="md:w-3/5 xl:w-4/5 p-6">
          <Routes>
            <Route path="/" element={<Ordenes />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/nuevo-platillo" element={<NuevoPlatillo />} />
          </Routes>
        </div>
      </div>
    </FirebaseContext.Provider>
  );
};

export default App;
