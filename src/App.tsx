import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContainer from "./container/MainContainer";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./style/theme.";
import { GlobalStyle } from "./style/GlobalStyles";
import ResultContainer from "./container/ResultContainer";

const AuthRoutes = () => (
  <Routes>
    <Route path="/" element={<MainContainer />} />
    <Route path="/result" element={<ResultContainer />} />
    {/*<Route path="/chat" element={<ChattingContainer />} />*/}
    {/*<Route path="/chat/:no" element={<ChattingRoomContainer />} />*/}
  </Routes>
);

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <AuthRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
