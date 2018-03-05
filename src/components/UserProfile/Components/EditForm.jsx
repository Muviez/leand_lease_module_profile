import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FormInputs  from './FormInputs.jsx';
import Button from './CustomButton.jsx';

import { SaveProfile, SaveProfData } from '../../../actions/user.js';

class EditForm extends Component {
    constructor() {
        super();
        this.state = {
            userProf: {
                username: "",
                email: "",
                phone: "",
                firstName: "",
                lastName: "",
                address: ""
            }
        }
    }
    SaveProfFunc = e => {
        // console.log(props.upProf);
        this.props.SaveProfile();
        console.log(this.state.userProf);
        // console.log(this.props.SaveProfData(this.state.userProf));
        this.props.SaveProfData(this.state.userProf);
    }
    render() {
        return(
            <form>
                <FormInputs
                    ncols = {["col-md-3 pr-1" , "col-md-4 px-1" , "col-md-5 pl-1"]}
                    proprieties = {[
                        {
                            label : "Username",
                            inputProps : {
                                type : "text",
                                placeholder: "Username",
                                name: "user1"
                            }
                        },
                        {
                            label : "Email address",
                            inputProps : {
                                type : "email",
                                placeholder: "Email"
                            }
                        },
                        {
                            label : "Phone",
                            inputProps : {
                                type : "text",
                                placeholder: "Phone"
                            }
                        }
                    ]}
                    onChange={() => this.setState({userProf})}
                />
                <FormInputs
                    ncols = {["col-md-6 pr-1" , "col-md-6 pl-1"]}
                    proprieties = {[
                        {
                            label : "First Name",
                            inputProps : {
                                type : "text",
                                placeholder: "First Name"
                            }
                        },
                        {
                            label : "Last Name",
                            inputProps : {
                                type : "text",
                                placeholder: "Last Name"
                            }
                        }
                    ]}
                />
                <FormInputs
                    ncols = {["col-md-12"]}
                    proprieties = {[
                        {
                            label : "Address",
                            inputProps : {
                                type : "text",
                                placeholder: "Home Address",
                            }
                        }
                    ]}
                />
                <Button
                    // bsStyle="info"
                    // pullRight
                    fill
                    type="button"
                    onClick={this.SaveProfFunc}
                >
                    Save Profile
                </Button>
            </form>
        );
    }
}

function mapStateToProps(state){
    return {
        upProf: state.userProfile.changeProfile
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ SaveProfile: SaveProfile, SaveProfData: SaveProfData}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);