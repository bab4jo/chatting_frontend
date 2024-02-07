import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WebcamContainer = styled.div`
  margin-bottom: 60px;

  canvas {
    border-radius: 100%;
  }
`;

export const BarContainer = styled.div`
  width: 300px;
  margin-bottom: 10px;
`;

export const LabelContainer = styled.div`
  display: flex;
  width: 300px;
  margin-bottom: 30px;
  justify-content: space-between;

  & > div {
    padding: 3px;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const CaptureButton = styled.button`
  width: 165px;
  height: 60px;
  background-color: #fff3e9;
  font-size: 17px;
  font-weight: normal;
  color: #ff9232;
`;

export const NextButton = styled.button`
  width: 165px;
  height: 60px;
  background-color: #ff9232;
  font-size: 17px;
  font-weight: normal;
  color: #ffffff;

  &:disabled {
    background-color: #bebebe;
  }
`;

export const StartButton = styled.button`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  background-color: #fff3e9;
  color: #ff9232;
  width: 100%;
  margin-top: 40px;
`;

export const SmallDesc = styled.div`
  color: #a9a9a9;
  margin-top: 10px;
`;

export const DefaultWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Logo = styled.div`
  color: #ff9232;
  font-weight: 600;
  font-size: 2.6em;
`;

export const FindWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const FindWrapLogo = styled.div`
  color: #ff9232;
  font-weight: 600;
  font-size: 1.6em;
  margin-bottom: 20px;
`;

export const FixWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 520px;
`;
