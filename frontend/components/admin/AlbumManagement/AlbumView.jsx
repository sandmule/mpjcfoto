import React, { Component } from 'react';
import axios from 'axios';
import Gallery from 'react-photo-gallery';
import { Redirect } from 'react-router'
import {Link} from 'react-router-dom'
import LinkContainer from 'react-router-bootstrap'
import {PageHeader, Button, Breadcrumb} from 'react-bootstrap';
import SelectedImage from "./SelectedImage";

class AlbumView extends Component {
  constructor() {
    super();
    this.state = { images: [], currentImage: 0, redirect: false };
    this.selectPhoto = this.selectPhoto.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
    this.deletePhotos = this.deletePhotos.bind(this);
  }

  getPhotos() {
    return axios.get(`/api/photos/files`, {
                   params: {
                     album_name: this.props.location.pathname.split('/')[3],
                     file_type: 'image'
                    }
                  })
                 .then(response => {
                   return response.data;
                  })
                  .catch(() => this.setState({ redirect: true }));
     }

  deletePhotos() {
    let albumName = this.props.location.pathname.split('/')[3]
    let itemsForDelete = []
    this.state.images.forEach((photo, index) => {
      if (photo.selected) {
        itemsForDelete[index] = { src: photo.src }
      }
    });

    axios.post('/api/photos/remove_file', {
      itemsForDelete,
      album: albumName
    }).then(location.reload())
  }

  componentWillMount() {
        this.getPhotos().then(data => {
          this.setState({images: Object.values(data)});
        })
        console.log(this.state.images)
       }

  selectPhoto(event, obj) {
     let images = this.state.images;
     images[obj.index].selected = !images[obj.index].selected;
     this.setState({ images: images });
   }

  toggleSelect() {
     let images = this.state.images.map((photo, index) => {
       return { ...photo, selected: !this.state.selectAll };
     });
     this.setState({ images: images, selectAll: !this.state.selectAll });
   }

  render() {
    const { redirect } = this.state;

    if (redirect) {
     return <Redirect to='/admin/albums'/>;
    }
    return (
      <div className="AlbumView">
        <div className="AlbumView-header">
            <Breadcrumb>
              <Breadcrumb.Item componentClass="div"><Link to='/admin'>Home</Link>/</Breadcrumb.Item>
              <Breadcrumb.Item componentClass="div"><Link to='/admin/albums'>Album Management</Link>/</Breadcrumb.Item>
              <Breadcrumb.Item active>{this.props.location.pathname.split('/')[3]}</Breadcrumb.Item>
            </Breadcrumb>
        </div>
        <Button className="toggle-select btn btn-primary" onClick={this.toggleSelect}>
          Select all
        </Button>
        <Button className="delete-btn btn btn-danger float-right" onClick={this.deletePhotos}>
          Delete selected
        </Button>
        <Gallery
           photos={this.state.images}
           onClick={this.selectPhoto}
           ImageComponent={SelectedImage}
         />
    </div>
    );
  }
}

export default AlbumView;
