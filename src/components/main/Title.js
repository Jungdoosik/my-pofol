import styled from 'styled-components';
import Contents from './Contents';
import SubTitle from './SubTitle';
import { useSelector } from "react-redux";

const Tit = styled.h2`
  color : #778C86;
  position : left;
`;

const TitArea = styled.div`
  text-align : left;
`;

function Title(props) {
  const subTitle = useSelector((state) => state.subTitleData);
  return (
    <TitArea>
      <Tit>{props.props.title}</Tit>
      {
        subTitle.map((ele, i) => {
          if (props.props.sno === ele.titleSno) {
            return (
              <div>
                <SubTitle props={ele} key={i}></SubTitle>
                <Contents></Contents>
              </div>
            )
          }
        })
      }
    </TitArea>
  )
}

export default Title;