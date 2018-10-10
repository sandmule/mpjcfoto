import React, { Component } from 'react';
import axios from 'axios';
import Gallery from 'react-photo-gallery';
import {PageHeader, Button, Breadcrumb} from 'react-bootstrap';
import SelectedVideo from './SelectedVideo'

class PhotoGallery extends React.Component {
  constructor() {
    super();
    this.state = { videos: [], currentImage: 0, redirect: false };
    this.selectVideo = this.selectVideo.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
    this.deletePhotos = this.deletePhotos.bind(this);
  }

  deletePhotos() {
    let itemsForDelete = []
    this.state.videos.forEach((video, index) => {
      if (video.selected) {
        itemsForDelete[index] = { src: video.url }
      }
    });

    axios.post('/api/photos/remove_file', {
      itemsForDelete,
    }).then(location.reload())
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

  selectVideo(event, obj) {
     let videos = this.state.videos;
     videos[obj.index].selected = !videos[obj.index].selected;
     this.setState({ videos: videos });
   }

  toggleSelect() {
     let videos = this.state.videos.map((video, index) => {
       return { ...video, selected: !this.state.selectAll };
     });
     this.setState({ videos: videos, selectAll: !this.state.selectAll });
   }

  componentWillMount() {
        this.getPhotos().then(data => {
          this.setState({videos: Object.values(data)});
        })
       }

  render() {
	   return (
       <div className="AlbumView">
         <Button className="toggle-select btn btn-primary" onClick={this.toggleSelect}>
           Select all
         </Button>
         <Button className="delete-btn btn btn-danger float-right" onClick={this.deletePhotos}>
           Delete selected
         </Button>
         <Gallery photos={this.state.videos}
                  onClick={this.selectVideo}
                  ImageComponent={SelectedVideo} />
       </div>
	     );
     }
}

export default PhotoGallery;
