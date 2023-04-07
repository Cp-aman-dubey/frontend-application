import React, { Component } from 'react'
import AssociateService from '../services/AssociateService';

class CreateAssociateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateAssociate = this.saveOrUpdateAssociate.bind(this);
    }

    
    componentDidMount(){

       
        if(this.state.id === '_add'){
            return
        }else{
            AssociateService.getAssociateById(this.state.id).then( (res) =>{
                let associate = res.data;
                this.setState({firstName: associate.firstName,
                    lastName: associate.lastName,
                    emailId : associate.emailId
                });
            });
        }        
    }
    saveOrUpdateAssociate = (event) => {
        event.preventDefault();
        let associate = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('associate => ' + JSON.stringify(associate));

        // step 5
        if(this.state.id === '_add'){
            AssociateService.createAssociate(associate).then(res =>{
                this.props.history.push('/associates');
            });
        }else{
            AssociateService.updateAssociate(associate, this.state.id).then( res => {
                this.props.history.push('/associates');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/associates');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Associate</h3>
        }else{
            return <h3 className="text-center">Update Associate</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateAssociate}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateAssociateComponent