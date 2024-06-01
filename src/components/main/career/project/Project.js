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
  list-style:none;
`;

const Title = styled.span`
  color : #69737A;
  font-weight : bold;
`;

function Project() {
  const state = useSelector((state) => state.project);
  console.log(state)
  return (
    <Area Area >
      <H2>Project</H2>
      {
        state.map((data, i) => (
          <ContentArea>
            <Ul>
              <Li>
                {data.date}
              </Li>
            </Ul>
          </ContentArea>
        ))
      }
    </Area >
  )
}

export default Project;