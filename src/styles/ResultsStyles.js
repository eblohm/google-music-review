import styled from "styled-components";

const ResultsHeader = styled.h2`
  margin-bottom: 0.5rem;
  margin-top: 0;
`;

const ResultsStyles = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const ResultSingle = styled.li`
  list-style-type: none;
  margin-bottom: 0.25rem;

  .music--name {
    font-size: 1.25rem;
  }

  .music--listening {
    font-style: italic;
  }
`;

const ResultsSection = styled.section`
  &:first-child {
    margin-right: 7rem;
  }

  ul {
    margin-top: 0;
    padding-left: 0;
  }
`;

export default ResultsStyles;
export { ResultsHeader, ResultSingle, ResultsSection };
