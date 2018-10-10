import React, { Component } from 'react';
import { Player } from 'video-react';
import axios from 'axios';
import Gallery from 'react-photo-gallery';
import {Link} from 'react-router-dom'
import {PageHeader, Button, Breadcrumb} from 'react-bootstrap';


class VideoViewer extends Component {
  constructor() {
    super();
    this.state = { video: { src: '', thumbnail: ''}};
  }

  getPhotos() {
    return axios.get(`/api/photos/files`, {
                   params: {
                     file_name: this.props.location.pathname.split('/')[2],
                     file_type: 'video_file'
                    }
                  })
                 .then(response => {
                   return response.data;
                  })
     }

  componentWillMount() {
        this.getPhotos().then(data => {
          this.setState({video: {src: data.src, thumbnail: data.thumbnail}})
          console.log(this.state);
        })
       }

  render() {
    return (
      <div className="VideoView">
        <div className="AlbumView-header">
            <Breadcrumb>
              <Breadcrumb.Item componentClass="div"><Link to='/video'>Back</Link></Breadcrumb.Item>
            </Breadcrumb>
        </div>
        <div className="player-box mx-auto vertical-center">
        <Player
          playsInline
          poster={this.state.video.thumbnail}
          src={this.state.video.src}
        />
      </div>
      </div>
    );
  }
}

export default VideoViewer;
