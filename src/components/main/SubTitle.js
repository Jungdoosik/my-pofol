import styled from "styled-components";

const SubTit = styled.h3`
  color : #778C86;
  position : left;
`;

const SubTitArea = styled.div`
  text-align : left;
  margin :0 5%;
`;

function SubTitle(props) {
  console.log(props.subTitle)
  return (
    <SubTitArea>
      <SubTit>
        {props.subTitle}
      </SubTit>
    </SubTitArea>
  )
}

export default SubTitle;