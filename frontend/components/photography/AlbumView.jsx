import React, { Component } from 'react';
import axios from 'axios';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import {Link} from 'react-router-dom'
import LinkContainer from 'react-router-bootstrap'
import {PageHeader, Button, Breadcrumb} from 'react-bootstrap';


class AlbumView extends Component {
  constructor() {
    super();
    this.state = { images: [], currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  getPhotos() {
    return axios.get(`/api/photos/files`, {
                   params: {
                     album_name: this.props.location.pathname.split('/')[2],
                     file_type: 'image'
                    }
                  })
                 .then(response => {
                   return response.data;
                  })
     }

  componentWillMount() {
        this.getPhotos().then(data => {
          this.setState({images: Object.values(data)});
        })
       }

       openLightbox(event, obj) {
         this.setState({
           currentImage: obj.index,
           lightboxIsOpen: true,
         });
       }
       closeLightbox() {
         this.setState({
           currentImage: 0,
           lightboxIsOpen: false,
         });
       }
       gotoPrevious() {
         this.setState({
           currentImage: this.state.currentImage - 1,
         });
       }
       gotoNext() {
         this.setState({
           currentImage: this.state.currentImage + 1,
         });
       }

  render() {
    return (
      <div className="AlbumView">
        <div className="AlbumView-header">
            <Breadcrumb>
              <Breadcrumb.Item componentClass="div"><Link to='/Photography'>Photography</Link>/</Breadcrumb.Item>
              <Breadcrumb.Item active>{this.props.location.pathname.split('/')[2]}</Breadcrumb.Item>
            </Breadcrumb>
        </div>
        <Gallery photos={this.state.images} onClick={this.openLightbox} />
        <Lightbox images={this.state.images}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }
}

export default AlbumView;
