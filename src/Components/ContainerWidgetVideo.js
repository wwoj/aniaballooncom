import { NavLink } from "react-router-dom";

const ContainerWidgetVideo = (props)=>{
  function goTop(){
    window.scrollTo(0,0);
  }
    return (
      <div className="widget-container">
        <div className="widget-main">
          <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/N6If-5JpmjQ"
            title="Ania&#39;s Balloon World"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    );
}
export default ContainerWidgetVideo;