import React, { Component } from 'react';
import S3Uploader from './S3Uploader'
import Logout from './Logout'
import './admin.css'

class Admin extends Component {
  render() {
    return (
      <main className="admin">
        <div className="admin-header">
          <h2>Welcome to Admin</h2>
        </div>
        <S3Uploader />
        <Logout />
      </main>
    );
  }
}

export default Admin;
