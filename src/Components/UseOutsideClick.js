import { useRef,useEffect } from "react";

const useOutsideClick = (callback) => {
    const ref = useRef();
  
    useEffect(() => {
      const handleClick = (event) => {
        console.log(ref.current && ref.current.contains(event.target))
        if (ref.current && !ref.current.contains(event.target)) {
        callback();
        }
      };
  
      document.addEventListener('click', handleClick);
  
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, [ref]);
  
    return ref;
  };
  export default useOutsideClick;