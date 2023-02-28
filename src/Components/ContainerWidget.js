const ContainerWidget = (props)=>{

    return (
      <div className="widget-container">
        <div className="widget-main">
          <div className="widget-text-container">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <a className="home-gallery-button-a" href="/">
              {props.gallery}
            </a>
          </div>
          <div className="widget-img-container">
            {/* <img
              src="https://www.pngfind.com/pngs/m/321-3219231_unicorn-balloon-hat-ballon-animals-animal-balloons-unicorn.png"
              alt=""
            /> */}
          </div>
          <div className="home-float-container"></div>
        </div>
      </div>
    );
}
export default ContainerWidget;