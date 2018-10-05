import DropzoneS3Uploader from './DropzoneS3Uploader'
import React from 'react'
import ReactOnRails from 'react-on-rails';
const csrfToken = ReactOnRails.authenticityToken();

export default class S3Uploader extends React.Component {
  constructor() {
    super();
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleFinishedUpload = info => {
    console.log('File uploaded with filename', info.file.name)
    console.log('Access it on s3 at', info.fileUrl)
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
          maxSize={1024 * 1024 * 5}
          upload={uploadOptions}
          className='dropzone'
        />
    </section>
    )
  }
}
