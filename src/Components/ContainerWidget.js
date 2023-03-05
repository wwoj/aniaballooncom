import { NavLink } from "react-router-dom";

const ContainerWidget = (props)=>{
  function goTop(){
    window.scrollTo(0,0);
  }
    return (
      <div className="widget-container">
        <div className="widget-main">
          <div className="widget-text-container">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <NavLink
              className="home-gallery-button-a"
              end
              to="/animalBalloons"
              onClick={goTop}
            >
              {props.btnText}
            </NavLink>
          </div>
          <div className="widget-img-container">
   
          </div>
          <div className="home-float-container"></div>
        </div>
      </div>
    );
}
export default ContainerWidget;