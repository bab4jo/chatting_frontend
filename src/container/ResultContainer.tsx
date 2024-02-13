import ResultTopSection from "../components/Result/ResultTopSection";
import ResultInfoSection from "../components/Result/ResultInfoSection";
import * as r from "../container/_style/ResultContainerStyle";
import ResultSurveyForm from "../components/Result/ResultSurveyForm";
import ResultChartSection from "../components/Result/ResultChartSection";

const ResultContainer = () => {
  return (
    <r.Container>
      <r.Wrap>
        <ResultTopSection />
        <ResultInfoSection />
        <ResultChartSection />
        <ResultSurveyForm />
      </r.Wrap>
    </r.Container>
  );
};

export default ResultContainer;
