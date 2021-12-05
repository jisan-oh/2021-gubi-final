import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const App = () => (
  <div>
    <header className="p-6 md:flex md:items-center shadow-md whitespace-nowrap">
      <h1 className="text-3xl font-semibold text-black">장자못 전설</h1>
      <nav className="flex flex-col md:flex-row mt-3 md:mt-0 md:ml-auto">
        <MenuItem to="/map">우리 동네 근처 장자못</MenuItem>
        <MenuItem to="/search">장자못 전설 살펴보기</MenuItem>
      </nav>
    </header>
    <main className="px-8 mt-6">
      <Outlet />
    </main>
  </div>
);

const MenuItem: React.FC<{ to: string }> = ({ to, children }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `text-lg px-3 py-2 rounded-md text-gray-500 hover:bg-purple-50 ${
          isActive ? "font-bold text-purple-700" : ""
        }`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default App;
