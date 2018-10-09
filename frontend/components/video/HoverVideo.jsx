import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import {Link} from 'react-router-dom'
import {PageHeader, Button, Breadcrumb} from 'react-bootstrap';

const cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative"
};

const imgStyle = {
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
const selectedImgStyle = {
  opacity: '0.5'
};

const HoverVideo = ({
  index,
  onClick,
  onMouseLeave,
  photo,
  margin,
  direction,
  top,
  left
}) => {

  return (
    <div
      className='image-box'
      style={{ margin, height: photo.height, width: photo.width, ...cont }}
     >
      <Link to={`/video/${photo.alt}`}>
      <img
        style={
               photo.selected
                 ? { ...imgStyle, ...selectedImgStyle }
                 : { ...imgStyle }
             }
        {...photo}
      /><div className='overlay'><p></p></div></Link>
    </div>
  );
};

export default HoverVideo;
