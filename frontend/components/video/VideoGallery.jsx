import React, { Component } from 'react';
import HoverVideo from './HoverVideo'
import axios from 'axios';
import Gallery from 'react-photo-gallery';

class PhotoGallery extends React.Component {
  constructor() {
    super();
    this.state = { videos: [], currentImage: 0 };
  }

  getPhotos() {
    return axios.get(`/api/photos/files`, {
                   params: {
                     file_type: 'video_thumbnail',
                    }
                  })
                 .then(response => {
                   return response.data;
                  })
     }

  componentWillMount() {
        this.getPhotos().then(data => {
          this.setState({videos: Object.values(data)});
          console.log(this.state.videos)
        })
       }

  render() {
	   return (
       <div className="AlbumView">
         <Gallery photos={this.state.videos}
                  ImageComponent={HoverVideo}
         />
       </div>
	     );
     }
}

export default PhotoGallery;
