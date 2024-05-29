import styled from 'styled-components';
import Contents from './Contents';
import SubTitle from './SubTitle';

const Tit = styled.h2`
  color : #778C86;
  position : left;
`;

const TitArea = styled.div`
  text-align : left;
`;

function Title(props) {
  console.log(props)
  return (
    <TitArea>
      <Tit>{props.props.title}</Tit>
      <SubTitle></SubTitle>
      <Contents></Contents>
      <SubTitle></SubTitle>
      <Contents></Contents>
    </TitArea>
  )
}

export default Title;