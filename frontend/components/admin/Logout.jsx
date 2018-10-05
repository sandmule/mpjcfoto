import React from 'react';
import axios from 'axios';


export default class Logout extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`/users/sign_out`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <button type="submit" className="btn btn-danger">Log out</button>
        </form>
      </div>
    )
  }
}
