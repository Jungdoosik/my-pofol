import { useRef } from "react";
import AboutMeMain from "./main/aboutme/AboutMeMain";
import CareerMain from "./main/career/CareerMain";
import Header from "./Header";
function Main() {
  const inputForm1 = useRef();
  const inputForm2 = useRef();
  const onMoveToForm1 = () => {
    inputForm1.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const onMoveToForm2 = () => {
    inputForm2.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div>
      <Header fn1={onMoveToForm1} fn2={onMoveToForm2}></Header>
      <div ref={inputForm1}>
        <AboutMeMain />
      </div>
      <div ref={inputForm2}>
        <CareerMain />
      </div>
    </div >
  )
}


export default Main;