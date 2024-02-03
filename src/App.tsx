import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChattingContainer from "./container/ChattingContainer";
import ChattingRoomContainer from "./components/Chat/ChattingRoomContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const AuthRoutes = () => (
    <Routes>
      <Route path="/chat" element={<ChattingContainer/>}/>
      <Route path="/chat/:no" element={<ChattingRoomContainer/>}/>
    </Routes>
);

function App() {
  return (
      <BrowserRouter>
        <AuthRoutes/>
      </BrowserRouter>
  );
}

export default App;
