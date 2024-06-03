import { useRef } from 'react';

//hook
function useMoveScrool() {
  // eslint-disable-next-line no-mixed-operators
  const element = useRef();
  const onMoveToElement = () => {
    element.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return { element, onMoveToElement };
}

export default useMoveScrool;
