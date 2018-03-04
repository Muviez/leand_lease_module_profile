import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInputs  from './FormInputs.jsx';
import Button from './CustomButton.jsx';

import { SaveProfile } from '../../../actions/user.js';

function EditForm(props) {

    const SaveProfFunc = () => {
        console.log(props.upProf)
        props.SvProf();
    }

    return (
        <form>
            <FormInputs
                ncols = {["col-md-5 pr-1" , "col-md-3 px-1" , "col-md-4 pl-1"]}
                proprieties = {[
                    {
                        label : "Company",
                        inputProps : {
                            type : "text",
                            defaultValue: "Creative Code Inc."
                        }
                    },
                    {
                        label : "Username",
                        inputProps : {
                            type : "text",
                            defaultValue: "michael23"
                        }
                    },
                    {
                        label : "Email address",
                        inputProps : {
                            type : "email",
                            placeholder: "Email"
                        }
                    }
                ]}
            />
            <FormInputs
                ncols = {["col-md-6 pr-1" , "col-md-6 pl-1"]}
                proprieties = {[
                    {
                        label : "First Name",
                        inputProps : {
                            type : "text",
                            placeholder: "First Name",
                            defaultValue: "Mike"
                        }
                    },
                    {
                        label : "Last Name",
                        inputProps : {
                            type : "text",
                            placeholder: "Last Name",
                            defaultValue: "Andrew"
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
                            defaultValue: "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                        }
                    }
                ]}
            />
            <FormInputs
                ncols = {["col-md-4 pr-1" , "col-md-4 px-1"]}
                proprieties = {[
                    {
                        label : "City",
                        inputProps : {
                            type : "text",
                            defaultValue: "Bucharest",
                            placeholder: "City"
                        }
                    },
                    {
                        label : "Country",
                        inputProps : {
                            type : "text",
                            defaultValue: "Romania",
                            placeholder: "Country"
                        }
                    }                                             
                ]}
            />
            <Button
                // bsStyle="info"
                // pullRight
                fill
                type="button"
                onClick={SaveProfFunc}
            >
                Save Profile
            </Button>
        </form>
    );
}

function mapStateToProps(state){
    return {
        upProf: state.userProfile.changeProfile
    }
};

function mapDispatchToProps(dispatch) {
    return {
        SvProf: () => {
            dispatch(SaveProfile());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);