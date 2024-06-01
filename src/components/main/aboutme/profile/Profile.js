import { useSelector } from "react-redux";
import styled from "styled-components";

const Area = styled.div`
  margin : 0 3em;
`;

const H2 = styled.h2`
  color : #69737A;
`;

const ContentArea = styled.div`
  display : flex;
  margin : 1% 0 ;
`;

const Ul = styled.ul`
  padding:  0;
  margin : 0;
`;

const Li = styled.li`
  list-style:none;
`;

const Title = styled.span`
  color : #69737A;
  font-weight : bold;
`;

const Detail = styled.span`
`;



function Profile() {

  const state = useSelector((state) => state.profile)
  return (
    <Area>
      <H2>Profile</H2>

      <ContentArea >
        <Ul>
          {
            state.map((data, i) => (
              <Li key={i}>
                <Title>{data.title}</Title>{"　:　"}<Detail>{data.detail}</Detail>
              </Li>
            ))
          }
        </Ul>
      </ContentArea>
    </Area>
  )
}

export default Profile;