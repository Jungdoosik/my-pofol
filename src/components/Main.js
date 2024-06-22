import { useRef } from "react";
import AboutMeMain from "./main/aboutme/AboutMeMain";
import CareerMain from "./main/career/CareerMain";
import Header from "./Header";
import StudyMain from "./main/study/StudyMain";
function Main() {
  const inputForm1 = useRef();
  const inputForm2 = useRef();
  const inputForm3 = useRef();
  const onMoveToForm1 = () => {
    inputForm1.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const onMoveToForm2 = () => {
    inputForm2.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const onMoveToForm3 = () => {
    inputForm3.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div>
      <Header fn1={onMoveToForm1} fn2={onMoveToForm2} fn3={onMoveToForm3}></Header>
      <div ref={inputForm1}>
        <AboutMeMain />
      </div>
      <div ref={inputForm2}>
        <CareerMain />
      </div>
      <div ref={inputForm3}>
        <StudyMain />
      </div>
    </div >
  )
}


export default Main;