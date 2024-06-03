import styled from "styled-components";
import Project from "./project/Project";

const Area = styled.div`
  margin : 0 3%;  
`;

const Title = styled.h1`
  color : #69737A;
  left : 0;
`;
function CareerMain() {
  return (
    <>
      <Area>
        <Title>✍️Career</Title>
        <Project></Project>
      </Area>
    </>
  )
}

export default CareerMain;