import styled from 'styled-components';

const ContentArea = styled.div`
  text-align : left;
  margin :0 5%;
`;

const Content = styled.pre`
  white-space: pre-line; 
`;

const P = styled.p`
  width : 100%;
  height : auto;
`;
function Contents(props) {
  console.log(props)
  return (
    <ContentArea>
      <Content>
        <P>
          {
            `
              안녕하세요. 2년차 개발자 정두식입니다.
              texttexttexttexttext
            `
          }
        </P>
      </Content>
    </ContentArea>
  )
}

export default Contents