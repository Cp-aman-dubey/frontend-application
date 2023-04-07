import React, { Component } from 'react'
import AssociateService from '../services/AssociateService'

class ViewAssociateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            associate: {}
        }
    }

    componentDidMount(){
        AssociateService.getAssociateById(this.state.id).then( res => {
            this.setState({associate: res.data});
        })
    }

    render() {
        return (
            <div > 
                <br></br>
                <div  className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Associate Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Associate First Name: </label>
                            <div> { this.state.associate.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Associate Last Name: </label>
                            <div> { this.state.associate.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Associate Email ID: </label>
                            <div> { this.state.associate.emailId }</div>
                        </div>
                        <div className = "row">
                            <label> Associate Phone number: </label>
                            <div> { this.state.associate.name }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
} 

export default ViewAssociateComponent