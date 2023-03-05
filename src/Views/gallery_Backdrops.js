import { Fragment, useState} from "react";
import ImageModal from "../Components/UI/ImageModal";
import GalleryBackdropTitle from "../Components/GalleryBackdropTitle";


function Gallery_Backdrops(props) {

  const [showImageModal, setShowImageModal] = useState(false);
  const [idOfImageToShowInModal, setIdOfImageToShowInModal] = useState("")


  const showImageHandler = (id) => {
    setIdOfImageToShowInModal(id)
    console.log(idOfImageToShowInModal, "id in gallery")
    document.body.style.overflow = "hidden";
    setShowImageModal(true);
  }

  const hideImage = () => {
    setShowImageModal(false);
    document.body.style.overflow = "";
  }

  return (
    <Fragment>
      {showImageModal && <ImageModal imagesArrey={props.gallerySource} entryId={idOfImageToShowInModal} onHide={hideImage} />}
      <div className="page-view-container">
          <GalleryBackdropTitle title={props.title}/>
        <div className="gallery">
          {props.gallerySource.map((x, y) => (
            <div className="pics" onClick={() => showImageHandler(y)} key={y}>
              <img
                src={x}
                alt={`pic_${y}`}
              />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
export default Gallery_Backdrops;