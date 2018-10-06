import DropzoneS3Uploader from './DropzoneS3Uploader'
import React from 'react'
import ReactOnRails from 'react-on-rails';
const csrfToken = ReactOnRails.authenticityToken();
import axios from 'axios';
import {ProgressBar} from 'react-bootstrap';

export default class S3Uploader extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onUploadProgress = this.onUploadProgress.bind(this);
    this.state = { value: '',  completed: 0};

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleFinishedUpload = info => {
    axios.post(`api/uploads`, {
      url: info.fileUrl,
      name: info.file.name
    })
  }

  onUploadProgress(percent){
    this.setState({completed: percent});
  }

  render() {
    const uploadOptions = {
      signingUrlHeaders: {'X-CSRF-TOKEN': csrfToken},
      signingUrlQueryParams: {'album_name': this.state.value},
    }
    const s3Url = 'https://mpjcfoto.s3.eu-west-2.amazonaws.com'

    return (
      <section className='selection-box'>
        <label>
          <p>Album Name:&nbsp;</p>
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <DropzoneS3Uploader
          onFinish={this.handleFinishedUpload}
          s3Url={s3Url}
          upload={uploadOptions}
          className='dropzone'
          onProgress={this.onUploadProgress}
        />
        <div>
          <ProgressBar striped bsStyle="success" now={this.state.completed}  label={`${this.state.completed}%`}/>
        </div>
    </section>
    )
  }
}
