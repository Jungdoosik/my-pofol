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
  margin : 0 0 ;
`;

const Title = styled.span`
  color : #69737A;
  font-weight : bold;
`;

const Detail = styled.a`
  color : black;
  font-weight: 400;
  font-style: normal;
`;

function Contact() {

  const state = useSelector((state) => state.contact)
  return (
    <Area>
      <H2>Contact</H2>
      {
        state.map((data, i) => (
          <ContentArea key={i}>
            <Title>{data.title}</Title>{"　:　"}
            <Detail
              href={data.title === "Email" ? "mailto:" + data.detail : data.detail}
              target={data.title === "Github" ? '_blank' : ""}>
              {data.detail}
            </Detail>
          </ContentArea>
        ))
      }
    </Area>
  )
}

export default Contact;