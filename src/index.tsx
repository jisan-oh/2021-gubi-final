import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MapPage from "./routes/MapPage";
import SearchPage from "./routes/SearchPage";
import StoryPage from "./routes/StoryPage";
import NotFoundPage from "./routes/NotFoundPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="2021-gubi-final">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/map" element={<MapPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/stories/:title" element={<StoryPage />} />=
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
