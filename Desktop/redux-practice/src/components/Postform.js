import React, { Component } from 'react';

class Postform extends Component {
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
          <div>
            <label>Title:</label>
            <br />
            <input type='text' />
          </div>
          <div>
            <label>Body:</label>
            <br />
            <textarea name='body' />
          </div>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Postform;
