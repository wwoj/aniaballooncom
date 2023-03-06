import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useEffect,useState } from 'react';

  function GoTopButton(){
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 500);
      });
    }, []);
      

    function gotTop(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    return(
        <div className={`gallery-gotop-button ${scroll ? "gallery-btn-fade-in" : "gallery-btn-fade-out"}`} onClick={gotTop}>
                  <FontAwesomeIcon icon={faArrowUp} size="3x"/>

        </div>
    )
}
export default GoTopButton;