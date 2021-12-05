import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./App.module.css";

const App = () => (
  <div>
    장자못 전설 배우기
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to="/map"
      >
        우리 동네 장자못
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to="/search"
      >
        장자못 전설 살펴보기
      </NavLink>
    </nav>
    <Outlet />
  </div>
);

export default App;
