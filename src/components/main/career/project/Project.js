import { useSelector } from "react-redux";
import styled from "styled-components";

const Area = styled.div`
  margin : 0 3em;
`;

const H2 = styled.h2`
  color : #69737A;
`;

const ContentArea = styled.div`
  margin : 1% 0 ;
`;

const Ul = styled.ul`
  margin : 5px 0 ;
  padding : 0;
`;

const Li = styled.li`
  list-style:none;
`;

const ProjectName = styled.p`
  color : #69737A;
  font-size : 20px;
  font-weight : bold;
`;

const Date = styled.span`
  color : #a0a0a0;
  display : block;
  font-size : 13px;
  font-weight : bold;
  `;

const Role = styled.p`

`;

const Detail = styled.div`

`;

const SkillArea = styled.div`
  display : flex;
`;
const Skill = styled.div`
  border : 1px;
  width : auto;
  color : white;
  text-align : center;
  border-radius:2px;
  background-color: #a0a0a0;
  margin-right:2px;
  margin-top: 15px;
  padding : 0 5px;
`;

const SiteArea = styled.a`
  color: black;
`;

function Project() {
  const state = useSelector((state) => state.project);
  console.log(state)
  return (
    <Area Area >
      <H2>Project</H2>
      {
        state.map((data, i) => (
          <ContentArea key={i}>
            <hr></hr>
            <Ul>
              <Li>
                <Date>{data.date}</Date>
                <Date>{data.company}</Date>
                <ProjectName>{data.projectName}</ProjectName>
                <SiteArea href={data.site} target={'_blank'}>{data.site}</SiteArea>
                <Role>{data.role}</Role>
                {
                  data.details.map((e, j) => (
                    <>
                      <Detail>{e.detail}</Detail>
                      {
                        e.subDetails.map((s, k) => (
                          <Ul>
                            <Li>{s.subDetail}</Li>
                          </Ul>
                        ))
                      }
                    </>
                  ))
                }

                <SkillArea>
                  {
                    data.skills.map((e, j) => (
                      <>
                        <Skill>{e.skill}</Skill>
                      </>
                    ))
                  }
                </SkillArea>
              </Li>
            </Ul>
          </ContentArea>
        ))
      }
    </Area >
  )
}

export default Project;