import { useSelector } from "react-redux"
import styled from "styled-components";

const Area = styled.div`
  margin : 0 3em;
  width : 100%;
`;

const ImageArea = styled.div`
  width : 300px;
  height : 300px;
  cursor : pointer;
`;

const ImageDiv = styled.img`
  width:100%;
`
const StudyInfoArea = styled.div`

`;

const Title = styled.span`
  color : #69737A;
  font-weight : bold;
`;

const Date = styled.span`
  color : #a0a0a0;
  display : block;
  font-size : 13px;
  font-weight : bold;
  `;

function Personal() {
  let state = useSelector(((state) => state.personal));
  console.log(state)
  return (
    <Area>
      {
        state.map((item, i) =>
          <>
            <ImageArea onClick={() => window.open('https://github.com/Jungdoosik/todoList')}>
              <ImageDiv src={item.imgSrc} alt="" />
            </ImageArea>
            <div>
              <StudyInfoArea>
                <Date>{item.made}</Date>
              </StudyInfoArea>
              <StudyInfoArea>
                <Title>{item.title}</Title>
              </StudyInfoArea>
            </div>
          </>
        )
      }
    </Area >
  )
}

export default Personal