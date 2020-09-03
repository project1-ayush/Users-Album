import React from "react";
import { Button, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class UsersComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    this.props.dispatch({ type: "User_data", payload: data });
  }
  albumUser = (id) => {
    console.log(this.props);
    this.props.history.push({
      pathname: "/albumscomponent/" + id,
    });
  };
  onhandleChange = (e) => {
    this.setState({ search: e.target.value });
  };
  render() {
    const { search } = this.state;
    const filteredusers = this.props.user.filter((user) => {
      return user.username.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    return (
      <div>
        <h1>This is User Page.</h1>

        <br></br>

        <div class="row">
          <div class="col-md-6 mb-4">
            <form class="form-inline md-form form-sm mt-0">
              <i class="fas fa-search" aria-hidden="true"></i>
              <input
                class="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
                onChange={this.onhandleChange}
              />
            </form>
          </div>
        </div>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Website</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredusers.map((users) => (
              <tr key={users.id}>
                <td>{users.id}</td>
                <td>{users.name}</td>
                <td>{users.username}</td>
                <td>{users.email}</td>
                <td>{users.website}</td>
                <td>
                  <Button
                    onClick={() => this.albumUser(users.id)}
                    variant="primary"
                  >
                    Select User
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
  const { user } = state;
  return { user: user };
}

export default withRouter(connect(mapStatetoProps)(UsersComponent));
