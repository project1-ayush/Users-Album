import React from "react";
import { Button, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class AlbumsComponent extends React.Component {
  async componentDidMount() {
    const url = `https://jsonplaceholder.typicode.com/albums?userId=${this.props.match.params.id}`;
    const response = await fetch(url);
    const data = await response.json();
    this.props.dispatch({ type: "Album_data", payload: data });
  }

  photoUser = (id) => {
    this.props.history.push({
      pathname: "/photoscomponent/" + id,
    });
  };
  render() {
    return (
      <div>
        <h1>This is Album Page.</h1>

        <br></br>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>User-id</th>
              <th>Id</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {this.props.album.map((users) => (
              <tr key={users.id}>
                <td>{users.userId}</td>
                <td>{users.id}</td>
                <td>{users.title}</td>
                <td>
                  <Button
                    onClick={() => this.photoUser(users.id)}
                    variant="primary"
                  >
                    Select Album
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
  const { album } = state;

  return { album: album };
}

export default withRouter(connect(mapStatetoProps)(AlbumsComponent));
