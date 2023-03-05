import React from 'react';
import "./GalleryBackdropTitle.scss"


const GalleryBackdropTitle = (props) => {
    return (
        <section className='gallery-title'>
            <img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTU0OTVhMjE1NWUzNGQzMDhmMDM2YmYzMjEwMTM4Mjk3YWYwZmZlOCZjdD1z/XYIWqQyZ1v1LLzjnwb/giphy.gif'/>
            <h1>{props.title}</h1>
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Y4OWQ2NDJlM2UwZTA2ZTZmMTcxMTE1OTc2NDhkYWE0MjRiZWY2YSZjdD1z/vzdaNrU4b7ThByWi4r/giphy.gif"/>
        </section>
    )
}

export default GalleryBackdropTitle;