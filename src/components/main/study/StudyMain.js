import styled from "styled-components";
import Personal from "./personal/Personal";

const Area = styled.div`
  margin : 0 3%;  
`;

const Title = styled.h1`
  color : #69737A;
  left : 0;
`;
function StudyMain() {
  return (
    <>
      <Area>
        <Title>📖Study</Title>
        <Personal></Personal>
      </Area>
    </>
  )
}

export default StudyMain;