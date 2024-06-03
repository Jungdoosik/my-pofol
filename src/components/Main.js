import { useRef } from "react";
import AboutMeMain from "./main/aboutme/AboutMeMain";
import CareerMain from "./main/career/CareerMain";
import Header from "./Header";
import Footer from "./Footer";
function Main() {
  return (
    <div>
      <Header></Header>
      <div >
        <AboutMeMain />
      </div>
      <div >
        <CareerMain />
      </div>
      <Footer></Footer>
    </div >
  )
}


export default Main;