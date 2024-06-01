import styled from "styled-components"
import Contact from "./contact/Contact"
import Profile from "./profile/Profile";
import Education from "./education/Education";

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
      <Education></Education>
    </Area>
  )
}

export default AboutMeMain