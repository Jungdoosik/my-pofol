import styled from "styled-components"
import Contact from "./contact/Contact"
import Profile from "./profile/Profile";

const Area = styled.div`
  margin : 0 3%;  
`;

const Title = styled.h1`
  color : #69737A;
  left : 0;
`;
function AboutMeMain() {
  return (
    <Area>
      <Title>🧑‍💻About Me</Title>
      <Profile></Profile>
      <Contact></Contact>
    </Area>
  )
}

export default AboutMeMain