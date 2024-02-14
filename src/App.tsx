import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContainer from "./container/MainContainer";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./style/theme.";
import { GlobalStyle } from "./style/GlobalStyles";
import ResultContainer from "./container/ResultContainer";
import InfoContainer from "./container/InfoContainer";

// 사용자 에이전트 문자열 가져오기
const userAgent: string = navigator.userAgent;

// 특정한 문자열을 검색하여 기기를 확인할 수 있습니다.
if (userAgent.match(/Android/i)) {
  console.log("Android 기기로 접속했습니다.");
} else if (userAgent.match(/iPhone|iPad|iPod/i)) {
  console.log("iOS 기기로 접속했습니다.");
} else if (userAgent.match(/Windows/i)) {
  console.log("Windows 기기로 접속했습니다.");
} else if (userAgent.match(/Mac/i)) {
  console.log("Mac 기기로 접속했습니다.");
} else {
  console.log("기타 기기 또는 브라우저로 접속했습니다.");
}

if (userAgent.match(/iPhone|iPad|iPod/i) || userAgent.match(/Mac/i)) {
  alert("iOS 또는 Mac 기기로의 접근은 준비중입니다.");
  // window.location.href = "/restricted-access-page";
}

const AuthRoutes = () => (
  <Routes>
    <Route path="/" element={<MainContainer />} />
    <Route path="/result" element={<ResultContainer />} />
    <Route path="/info" element={<InfoContainer />} />
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
