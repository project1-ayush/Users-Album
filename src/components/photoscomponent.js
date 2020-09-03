import React from "react";
import { connect } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { withRouter } from "react-router";

class PhotosComponent extends React.Component {
  async componentDidMount() {
    const url = `https://jsonplaceholder.typicode.com/photos?albumId=${this.props.match.params.idd}`;
    const response = await fetch(url);
    const data = await response.json();
    this.props.dispatch({ type: "Photo_data", payload: data });
  }

  render() {
    return (
      <div>
        <h1>This is Photo Page.</h1>

        <br></br>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Albumid</th>
              <th>Id</th>
              <th>Title</th>
              <th>Url</th>
              <th>ThumbnailUrl</th>
            </tr>
          </thead>
          <tbody>
            {this.props.photo.map((users) => (
              <tr key={users.id}>
                <td>{users.albumId}</td>
                <td>{users.id}</td>
                <td>{users.title}</td>
                <td>
                  <img src={users.url} height="70" width="70" alt="error" />{" "}
                </td>
                <td>
                  <img
                    src={users.thumbnailUrl}
                    height="70"
                    width="70"
                    alt="error"
                  />{" "}
                </td>

                <td>
                  <Button
                    onClick={() => this.photoUser(users.id)}
                    variant="primary"
                  >
                    Select Photo
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  const { photo } = state;

  return { photo: photo };
}

export default withRouter(connect(mapStatetoProps)(PhotosComponent));
