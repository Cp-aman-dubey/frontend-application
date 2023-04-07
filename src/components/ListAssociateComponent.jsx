import React, { Component } from "react";
import AssociateService from "../services/AssociateService";
import { useState } from 'react';
class ListAssociates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      associates: [],
    };
    this.addAssociate = this.addAssociate.bind(this);
    this.editAssociate = this.editAssociate.bind(this);
  }
  componentDidMount() {
    AssociateService.getAssociates().then((res) => {
      this.setState({ associates: res.data });
    });
  }
  deleteAssociate(id){
    AssociateService.deleteAssociate(id).then( res => {
        this.setState({associates: this.state.associates.filter(associate => associate.id !== id)});
    });
}
  viewAssociate(id) {
    this.props.history.push(`/view-associate/${id}`);
  }
  editAssociate(id) {
    this.props.history.push(`/add-associate/${id}`);
  }
  addAssociate() {
    this.props.history.push("/add-associate/_add");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Associates List</h2>
        <div  className="row">
          <button className="btn btn-primary" onClick={this.addAssociate}>
            Add Associate
          </button>
        </div>

        <div className="row">
          <table  className="table table-striped table-bordered">
            <thead >
              <tr>
                <th > Associate First Name</th>
                <th> Associate Last Name</th>
                <th> Associate Team</th>
                <th> Update Associate Details</th>
                <th> Delete Associate Record</th>
                <th> View Associate Record</th>
              </tr>
            </thead>
            <tbody>
              {this.state.associates.map((associate) => (
                <tr key={associate.id}>
                  <td> {associate.firstName} </td>
                  <td> {associate.lastName}</td>
                  <td> {associate.emailId}</td>
                  <td>
                    <button
                      onClick={() => this.editAssociate(associate.id)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button>
                  </td>
                  <td>
                    <button 
                      onClick={() => this.deleteAssociate(associate.id)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => this.viewAssociate(associate.id)}
                      className="btn btn-success"
                    >
                     {" view "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListAssociates;
