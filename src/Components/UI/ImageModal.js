import React, { Fragment, useState } from 'react';
import ReactDOM from "react-dom";
import './ImageModal.scss'

const Backdrop = (props) => {
    return <div className='modal-backdrop' onClick={props.onHide} />
}

const ModalOverlay = (props) => {
    const entryId = props.entryId;
    const ARREY_OF_IMAGES = props.imagesArrey;

    const [imageToDisplayID, setImageToDisplayID] = useState(entryId)

    const prevImageHandler = () => {
        if (imageToDisplayID === 0) {
            setImageToDisplayID((ARREY_OF_IMAGES.length - 1))
        } else {
            setImageToDisplayID(imageToDisplayID - 1)
        }
    };

    const nextImageHandler = () => {
        if (imageToDisplayID === (ARREY_OF_IMAGES.length - 1)) {
            setImageToDisplayID(0);
        }
        else {
            setImageToDisplayID(imageToDisplayID + 1);
        }
    }

    return <div className='image-modal'>
       
       <div className="arrow x-button" onClick={props.onHide}>
                <div className="arrow-top"></div>
                <div className="arrow-bottom"></div>
            </div>
        <div className='image-modal-content'>
            <img
                src={ARREY_OF_IMAGES[imageToDisplayID]}
                alt={`pic_${entryId}`}
            />
        </div>
        <div className='image-modal-buttons'>
            <div className="arrow arrow-prev" onClick={prevImageHandler}>
                <div className="arrow-top"></div>
                <div className="arrow-bottom"></div>
            </div>
            <div className="arrow arrow-next" onClick={nextImageHandler}>
                <div className="arrow-top"></div>
                <div className="arrow-bottom"></div>
            </div>
        </div>
    </div>
}

const portalElement = document.getElementById(`modal-root`)

const ImageModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onHide={props.onHide} />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay imagesArrey={props.imagesArrey} entryId={props.entryId} onHide={props.onHide}>{props.children} </ModalOverlay>,
                portalElement
            )}
        </Fragment>
    )
}

export default ImageModal;