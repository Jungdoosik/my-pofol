import { useSelector } from "react-redux";
import styled from "styled-components";

const Area = styled.div`
  margin : 0 3em;
`;

const H2 = styled.h2`
  color : #69737A;
`;

const ContentArea = styled.div`
  margin : 0 0 ;
`;

const Date = styled.span`
  color : #a0a0a0;
  display : block;
  font-size : 13px;
  font-weight : bold;
  `;
const Academy = styled.span`
  color : #69737A;
  display : block;
  font-size : 20px;
  font-weight : bold;
`;
const Curriculum = styled.span`
  color : #69737A;
  display : block;
  font-size : 15px;
  font-weight : bold;
`;

const Detail = styled.a`
  color : black;
  font-weight: 400;
  font-style: normal;
`;

function Education() {

  const state = useSelector((state) => state.education)
  return (
    <Area>
      <H2>Education</H2>
      {
        state.map((data, i) => (
          <ContentArea>
            <Date>{data.date}</Date>
            <Academy>{data.academy}</Academy>
            <Curriculum>- {data.curriculum}</Curriculum>
          </ContentArea>
        ))
      }
    </Area>
  )
}

export default Education