import { useSelector } from "react-redux";
import styled from "styled-components";

const Area = styled.div`
  margin : 0 3em;
`;

const H2 = styled.h2`
  color : #69737A;
`;

const ContentArea = styled.div`
  margin : 1% 0 ;
`;

const Ul = styled.ul`
  margin : 5px 0 ;
`;

const Li = styled.li`
`;

const Title = styled.span`
  color : #69737A;
  font-weight : bold;
`;

function Skills() {
  const state = useSelector((state) => state.skills);
  console.log(state)
  return (
    <Area>
      <H2>Skills</H2>
      {
        state.map((data, i) => (
          <ContentArea key={i}>
            <Title>{data.title}</Title>
            {
              data.details.map((e, j) => (
                <Ul key={j}>
                  <Li>{e.detail}</Li>
                </Ul>
              ))
            }
          </ContentArea>
        ))
      }
    </Area>
  )
}

export default Skills;