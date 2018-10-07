import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';

export default class Logout extends React.Component {
  constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`/users/sign_out`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        window.location.href = '../';
      });

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <button type="submit" className="btn btn-danger logout-button">Log out</button>
        </form>
      </div>
    )
  }
}
