import React, { Component } from "react";
// import Container from "./Container";
import API from "../utils/API";
import Table from "react-bootstrap/Table";

class UserContainer extends Component {
    state = {
        result: [],
        search: ""
    };

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        API.search()
            .then(res => {
                console.log(res)
                this.setState({ result: res.data.results })
            })
            .catch(err => console.log(err))
    }


    render() {
        console.log("inside render", this.state)
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.result.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name.first}</td>
                                <td>{user.name.last}</td>
                                <td>{}</td>
                                <td>{}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default UserContainer;