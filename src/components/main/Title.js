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
  // const content = useSelector((state) => state.contentData);

  // let copy = [];
  // subTitle.map((ele1) => {
  //   return (
  //     content.map((ele2) => {
  //       if (ele1.subTitleSno === ele2.subTitleSno && ele1.titleSno === ele2.titleSno) {
  //         let obj = { ...ele1, ...ele2 }
  //         copy.push(obj)
  //       }
  //     })
  //   )
  // })

  return (
    <TitArea>
      <Tit>{props.props.title}</Tit>
      {
        subTitle.map((ele, i) => {
          return (
            <div key={i}>
              <SubTitle subTitle={props.props.sno === ele.titleSno ? ele.subTitle : ""}></SubTitle>
              <Contents content={props.props.sno === ele.titleSno ? ele.content : ""}></Contents>
            </div>
          )
        })
      }
    </TitArea>
  )
}

export default Title;