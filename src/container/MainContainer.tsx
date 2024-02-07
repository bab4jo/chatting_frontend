import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as tmImage from "@teachablemachine/image";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import * as m from "./_style/MainContainerStyle";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const MainContainer = () => {
  const URL = "https://teachablemachine.withgoogle.com/models/EYgf6bU6pf/";

  let model: tmImage.CustomMobileNet | null = null;
  let webcam: tmImage.Webcam | null = null;
  let labelContainer: HTMLElement | null = null;
  let maxPredictions: number | null = null;

  const isPredictingRef = useRef<boolean>(false); // stop 기능을 추가하기 위해
  const [started, setStarted] = useState<boolean>(false); // start 전/후의 화면 구성을 위해

  const labels: string[] = ["말티즈", "비숑", "치와와", "푸들", "리트리버"];
  const [chartData, setChartData] = useState<number[]>([]);
  const [resultData, setResultData] = useState<
    { label: string; probability: number }[]
  >([]);
  const [check, setCheck] = useState<boolean>(false);

  const navigate = useNavigate();
  const handleNextButtonClick = () => {
    navigate("/result", { state: { resultData } });
  };

  async function predict() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const prediction = await model.predict(webcam.canvas);
    setChartData(prediction.map((item) => item.probability));
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    for (let i = 0; i < maxPredictions; i += 1) {
      const classPrediction: string = prediction[i].className;
      const probability: number = Math.round(prediction[i].probability * 100);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      if (labelContainer.childNodes[i] instanceof HTMLDivElement) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        labelContainer.childNodes[i].innerHTML =
          `<div>${classPrediction}</div><div>${probability}%</div>`;
      }
    }
  }

  function stop() {
    isPredictingRef.current = false;
    if (webcam) {
      webcam.stop();
      webcam = null;
    }
    const updatedResultData = chartData.map((item, index) => ({
      label: labels[index],
      probability: Math.round(item * 100),
    }));
    setResultData(updatedResultData);
  }

  const onClickCamera = () => {
    stop();
    setCheck(true);
  };

  async function loop() {
    if (isPredictingRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      webcam.update();
      await predict();
      window.requestAnimationFrame(loop);
    }
  }

  async function init() {
    stop();
    const modelURL = `${URL}model.json`;
    const metadataURL = `${URL}metadata.json`;

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const flip = true;
    webcam = new tmImage.Webcam(240, 240, flip);
    await webcam.setup();
    await webcam.play();
    isPredictingRef.current = true;
    window.requestAnimationFrame(loop);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");

    for (let i = 0; i < maxPredictions; i += 1) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      labelContainer.appendChild(document.createElement("div"));
    }
  }

  // 실시간 예측결과 중 최댓값 추출
  const maxProbability: number = Math.max(...chartData);
  const backgroundColors = chartData.map((probability) =>
    probability === maxProbability
      ? "rgba(255, 146, 50, 0.8)"
      : "rgba(241, 242, 246, 0.8)",
  );

  const data = {
    labels,
    datasets: [
      {
        label: "예측 결과",
        data: chartData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: backgroundColors,
        barThickness: 40,
        borderRadius: 10,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <m.Container>
      {started ? (
        <m.FindWrap>
          <m.FindWrapLogo>나와 닮은 강아지는요?</m.FindWrapLogo>
          <m.FixWrap>
            <m.WebcamContainer id="webcam-container" />
            <m.BarContainer>
              <Bar data={data} options={options} />
            </m.BarContainer>
            <m.LabelContainer id="label-container" />
          </m.FixWrap>
          <m.ActionButtons>
            <m.CaptureButton onClick={onClickCamera}>촬영하기</m.CaptureButton>
            <m.NextButton onClick={handleNextButtonClick} disabled={!check}>
              결과화면보기
            </m.NextButton>
          </m.ActionButtons>
          <m.SmallDesc>*촬영하기 버튼을 먼저 눌러주세요!</m.SmallDesc>
        </m.FindWrap>
      ) : (
        <m.DefaultWrap>
          <m.Logo>
            나와 닮은 <br />
            강아지 찾기!
          </m.Logo>
          <m.StartButton
            type="button"
            onClick={() => {
              setStarted(true);
              init();
            }}
          >
            시작하기
          </m.StartButton>
        </m.DefaultWrap>
      )}
    </m.Container>
  );
};

export default MainContainer;
