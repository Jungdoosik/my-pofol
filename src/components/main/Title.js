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
  return (
    <TitArea>
      <Tit>{props.emoji}{props.tit}</Tit>
      <SubTitle></SubTitle>
      <Contents></Contents>
      <SubTitle></SubTitle>
      <Contents></Contents>
    </TitArea>
  )
}

export default Title;