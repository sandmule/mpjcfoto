import React, { Component } from 'react';
import HoverImage from './HoverImage'
import axios from 'axios';
import sizeMe from 'react-sizeme';
import {Link} from 'react-router-dom'
import Gallery from 'react-photo-gallery';

class PhotoGallery extends React.Component {
  constructor() {
    super();
    this.state = { images: [] };
  }

  getAlbums() {
      return axios.get(`api/photos/albums`)
                  .then(response => {
                   return response.data;
                  })
     }

  componentWillMount() {
        let images
        this.getAlbums().then(data => {
          this.setState({images: Object.values(data)});
        })
       }

  render() {
	   return (
       <div className="AlbumView">
         <Gallery photos={this.state.images}
                  ImageComponent={HoverImage}
         />
       </div>
	     );
     }
}

export default PhotoGallery;
