import Title from "./main/Title";
import { useSelector } from "react-redux";

function Main() {
  const title = useSelector((state) => state.titleData)
  return (
    <div>
      {
        title.map((ele, i) => {
          return <Title props={ele} key={i}></Title>
        })
      }
    </div >
  )
}


export default Main;