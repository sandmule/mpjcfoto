import React, { Component } from 'react';
import StackGrid, { transitions, easings } from "react-stack-grid";
import axios from 'axios';
import sizeMe from 'react-sizeme';
import {Link} from 'react-router-dom'
const transition = transitions.scaleDown;

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
    const { size: { width }} = this.props;
	   return (
       <StackGrid
          monitorImagesLoaded
          columnWidth={width <= 768 ? '100%' : 240}
          duration={400}
          gutterWidth={5}
          gutterHeight={5}
          easing={easings.cubicOut}
          appearDelay={30}
          appear={transition.appear}
          appeared={transition.appeared}
          enter={transition.enter}
          entered={transition.entered}
          leaved={transition.leaved}
        >
          {this.state.images.map(obj => (
            <figure
              key={obj.src}
              className="image"
            >
              <Link to={`/photography/${obj.label}`} >
                <img src={obj.src} alt={obj.label} />
              </Link>
              <figcaption>{obj.label}</figcaption>
            </figure>
          ))}
        </StackGrid>
	     );
     }
}

export default sizeMe()(PhotoGallery);
