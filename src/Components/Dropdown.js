import {  useState } from "react";
import useOutsideClick from "./UseOutsideClick";
import flagUSA from '../Pictures/Flags/us.svg';
import flagPL from '../Pictures/Flags/pl.svg';

function Dropdown ({selected, setSelected}){
    const [isActive, setIsActive] = useState(false);
    const options = [{lang:"English",country:"us"}, {lang:"Polski", country:"pl"}];
  
    const handleClickOutside = () => {
        setIsActive(false)
      };
      const ref = useOutsideClick(handleClickOutside);

    return (
      <div className="dropdown" ref={ref}>
        <div
          className="dropdown-btn"
          onClick={(e) => {
            setIsActive(!isActive);
          }}
        >
          <span className="lang-selected">{selected == "us" ? options[0].lang : options[1].lang}</span>
          <img className="country-flag" src={selected==="us"?flagUSA: flagPL}/>

        </div>
        {isActive && (
          <div className="dropdown-content">
            {options.map((x, y) => (
              <div
                data-lang={x.country}
                className="dropdown-item"
                onClick={(e) => {
                  console.log(e.target.dataset.lang);

                  setSelected(e.target.dataset.lang);
                  setIsActive(false);
                }}
                key={y}
              >
                {x.lang}
                <img className="country-flag" src={x.country==="us"?flagUSA: flagPL} data-lang={x.country}/>
              </div>
            ))}
          </div>
        )}
      </div>
    );
}
export default Dropdown;