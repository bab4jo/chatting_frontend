import ResultTopSection from "../components/Result/ResultTopSection";
import ResultInfoSection from "../components/Result/ResultInfoSection";
import * as r from "../container/_style/ResultContainerStyle";

const ResultContainer = () => {
  return (
    <r.Container>
      <r.Wrap>
        <ResultTopSection />
        <ResultInfoSection />
      </r.Wrap>
    </r.Container>
  );
};

export default ResultContainer;
