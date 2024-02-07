import React from "react";
import "./App.css";
import ChattingContainer from "./container/ChattingContainer";
import ChattingRoomContainer from "./components/Chat/ChattingRoomContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AuthRoutes = () => (
  <Routes>
    <Route path="/" element={<ChattingContainer />} />
    <Route path="/chat" element={<ChattingContainer />} />
    <Route path="/chat/:no" element={<ChattingRoomContainer />} />
  </Routes>
);

function App() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
}

export default App;
