import styled from 'styled-components';
import { useRef } from "react";

const EmptyArea = styled.div`
  height : 3em;
`;
function Header() {
  const inputForm1 = useRef();
  const inputForm2 = useRef();
  const onMoveToForm1 = () => {
    inputForm1.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const onMoveToForm2 = () => {
    inputForm2.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <EmptyArea>
      <button>about</button>
      <button>career</button>
    </EmptyArea>
  )
}

export default Header