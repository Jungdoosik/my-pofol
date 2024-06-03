import styled from 'styled-components';

const FixedArea = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 75px;
  padding: 1rem;
  color: white;
  background: transparent;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  font-size : 20px;
  cursor: pointer;
  background: transparent;
  margin-right:5px;
  color
`;
function Header(props) {
  console.log(props)
  return (
    <div>
      <FixedArea>
        <Button onClick={props.fn1}>AboutMe</Button>
        <Button onClick={props.fn2}>Career</Button>
      </FixedArea>
    </div>
  )
}

export default Header