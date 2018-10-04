import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import request from "superagent";
import ReactOnRails from 'react-on-rails';
import ReactS3Uploader from 'react-s3-uploader'
import { getDroppedOrSelectedFiles } from 'html5-file-selector';
const csrfToken = ReactOnRails.authenticityToken();

class Admin extends Component {
  constructor() {
    super();
    this.state = { files: [] };
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  onDrop = (files) => {
  this.setState({
    files
  });


  files.map(f => {

    const fd = new FormData();
    fd.append("upload[title]", f.name);
    fd.append("upload[file]", f)

    request
      .post('/api/uploads/')
      .set({'X-CSRF-TOKEN': csrfToken})
      .query({ album_name: this.state.value})
      .set('accept', 'json')
      .query({ format: 'json' })
      .send( fd ) // sends a JSON post body
      .end((err, res) => {
        // Calling the end function will send the request
      });
  })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const onFinish = file => {
  const regex = /(?:(?!\?).)*/;
  const filename = file.signedUrl.match(regex)[0];
  console.log(filename);
  };
    const headers = {'X-CSRF-TOKEN': csrfToken}
    return (
      <main className="admin">
        <div className="admin-header">
          <h2>Welcome to Admin</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reloads.
        </p>
        <section>
          <label>
            Album Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>

           <ReactS3Uploader
              multiple
              signingUrl={`/api/uploads/presigned_url`}
              signingUrlMethod="GET"
              signingUrlHeaders={headers}
              signingUrlWithCredentials={true}
              uploadRequestHeaders={{ 'acl': 'public-read' }}
              contentDisposition="auto"
              onFinish={onFinish}
              // onProgress={onProgress}
              scrubFilename={( filename ) => filename.replace(/[^\w\d_\-.]+/ig, '')}
            />


         </section>
      </main>
    );
  }
}

export default Admin;
